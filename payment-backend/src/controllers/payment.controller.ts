// src/controllers/payment.controller.ts
import type { Request, Response } from 'express';
import { env } from '../config/env.js';
import {
  createYooKassaPayment,
  getYooKassaPayment,
} from '../services/yookassa.service.js';
import type {
  CreatePaymentRequest,
  YooKassaWebhookBody,
} from '../types/payments.types.ts';

export async function createPayment(
  req: Request<CreatePaymentRequest>,
  res: Response
): Promise<void> {
  try {
    const { amount, orderId, description } = req.body;

    // ❗️ ГЛАВНОЕ ПРАВИЛО: цену берём из БД, а не от клиента
    // const order = await db.getOrder(orderId);
    // const amount = order.total;

    if (!amount || amount <= 0 || !orderId) {
      res.status(400).json({ error: 'Некорректные данные заказа' });
      return;
    }

    const payment = await createYooKassaPayment({
      amount: { value: amount.toFixed(2), currency: 'RUB' },
      capture: true,
      confirmation: {
        type: 'redirect',
        return_url: `${env.FRONTEND_URL}/payment-success`,
      },
      description: description ?? `Оплата заказа №${orderId}`,
      metadata: { order_id: orderId },
    });

    const url = payment.confirmation?.confirmation_url;
    if (!url) {
      res.status(500).json({ error: 'ЮKassa не вернула ссылку на оплату' });
      return;
    }

    res.json({ confirmationUrl: url, paymentId: payment.id });
  } catch (error) {
    console.error('createPayment error:', error);
    res.status(500).json({ error: 'Не удалось создать платёж' });
  }
}

export async function handleWebhook(
  req: Request<YooKassaWebhookBody>,
  res: Response
): Promise<void> {
  try {
    const { event, object } = req.body;

    if (event === 'payment.succeeded') {
      const orderId = object.metadata?.order_id;

      // Перепроверяем платёж через API, а не доверяем только телу вебхука
      const verified = await getYooKassaPayment(object.id);
      if (!verified.paid || verified.status !== 'succeeded') {
        console.warn('Вебхук не подтверждён в ЮKassa:', verified.id);
        res.status(400).send('Invalid payment');
        return;
      }

      console.log(`Заказ ${orderId} оплачен, платёж ${verified.id}`);
      // await db.updateOrderStatus(orderId, 'paid');
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('handleWebhook error:', error);
    res.status(500).send('Error');
  }
}
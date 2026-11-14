// src/services/yookassa.service.ts
import axios from 'axios';
import { randomUUID } from 'node:crypto';
import { env } from '../config/env.js';
import type {
  YooKassaPaymentRequest,
  YooKassaPaymentResponse,
} from '../types/payments.types.ts';

const YOOKASSA_URL = 'https://api.yookassa.ru/v3';

const authHeader =
  'Basic ' +
  Buffer.from(`${env.YOOKASSA_SHOP_ID}:${env.YOOKASSA_SECRET_KEY}`).toString('base64');

export async function createYooKassaPayment(
  data: YooKassaPaymentRequest
): Promise<YooKassaPaymentResponse> {
  const { data: payment } = await axios.post<YooKassaPaymentResponse>(
    `${YOOKASSA_URL}/payments`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': randomUUID(),
        Authorization: authHeader,
      },
    }
  );
  return payment;
}

export async function getYooKassaPayment(
  paymentId: string
): Promise<YooKassaPaymentResponse> {
  const { data } = await axios.get<YooKassaPaymentResponse>(
    `${YOOKASSA_URL}/payments/${paymentId}`,
    { headers: { Authorization: authHeader } }
  );
  return data;
}
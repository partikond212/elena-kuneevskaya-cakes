// src/types/payment.types.ts

export interface CreatePaymentRequest {
  amount: number;      // сумма в рублях
  orderId: string;     // ID заказа из вашей системы
  description?: string;
}

export interface YooKassaAmount {
  value: string;       // строка с 2 знаками после запятой
  currency: 'RUB';
}

export interface YooKassaConfirmation {
  type: 'redirect';
  return_url: string;
}

export interface YooKassaPaymentRequest {
  amount: YooKassaAmount;
  capture: boolean;
  confirmation: YooKassaConfirmation;
  description: string;
  metadata?: Record<string, string>;
}

export interface YooKassaPaymentResponse {
  id: string;
  status: 'pending' | 'waiting_for_capture' | 'succeeded' | 'canceled';
  paid: boolean;
  amount: YooKassaAmount;
  confirmation?: {
    type: string;
    confirmation_url: string;
  };
  metadata?: Record<string, string>;
}

export interface YooKassaWebhookBody {
  type: 'notification';
  event: 'payment.succeeded' | 'payment.canceled' | 'payment.waiting_for_capture';
  object: YooKassaPaymentResponse;
}
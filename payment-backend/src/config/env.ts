// src/config/env.ts
import 'dotenv/config';
import process from 'process';

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Отсутствует обязательная переменная окружения: ${name}`);
  }
  return value;
}

export const env = {
  PORT: Number(process.env.PORT ?? 3001),
  YOOKASSA_SHOP_ID: required('YOOKASSA_SHOP_ID'),
  YOOKASSA_SECRET_KEY: required('YOOKASSA_SECRET_KEY'),
  FRONTEND_URL: process.env.FRONTEND_URL ?? 'http://localhost:3000',
} as const;
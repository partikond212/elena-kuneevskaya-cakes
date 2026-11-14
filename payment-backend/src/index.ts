// src/index.ts
import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import paymentRoutes from './routes/payment.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', paymentRoutes);

app.listen(env.PORT, () => {
  console.log(`Сервер запущен на порту ${env.PORT}`);
});
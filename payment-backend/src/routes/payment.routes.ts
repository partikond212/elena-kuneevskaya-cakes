// src/routes/payment.routes.ts
import { Router } from 'express';
import {
  createPayment,
  handleWebhook,
} from '../controllers/payment.controller.ts';

const router = Router();

router.post('/create-payment', createPayment);
router.post('/webhook', handleWebhook);

export default router;
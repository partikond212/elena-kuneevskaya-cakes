
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Эндпоинт для создания платежа
app.post('/api/create-payment', async (req, res) => {
  try {
    // 1. Получаем данные от фронтенда (например, сумму заказа)
    const { amount, orderId } = req.body;

    // 2. Проверяем сумму на сервере (очень важно для безопасности!)
    // В реальном проекте вы должны получить сумму заказа из вашей базы данных,
    // а не доверять значению, пришедшему с клиента[reference:6].
    // Пример: const order = await db.getOrder(orderId); const amount = order.total;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Некорректная сумма' });
    }

    // 3. Формируем запрос к API ЮKassa (или другой платёжной системы)
    const idempotenceKey = uuidv4(); // Уникальный ключ для предотвращения дублей
    const auth = Buffer.from(
      `${process.env.YOOKASSA_SHOP_ID}:${process.env.YOOKASSA_SECRET_KEY}`
    ).toString('base64');

    const paymentData = {
      amount: {
        value: amount.toFixed(2), // Сумма в виде строки с двумя знаками после запятой[reference:7]
        currency: 'RUB',
      },
      capture: true, // Автоматический захват платежа после подтверждения
      confirmation: {
        type: 'redirect',
        // URL, куда ЮKassa вернёт пользователя после оплаты
        return_url: 'http://localhost:3000/payment-success', // Замените на URL вашего фронтенда
      },
      description: `Оплата заказа №${orderId}`,
      metadata: {
        order_id: orderId, // Сохраняем ID заказа для дальнейшей связи
      },
    };

    const response = await axios.post(
      'https://api.yookassa.ru/v3/payments',
      paymentData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': idempotenceKey,
          Authorization: `Basic ${auth}`,
        },
      }
    );

    // 4. Возвращаем фронтенду ссылку на оплату
    const payment = response.data;
    res.json({ confirmation_url: payment.confirmation.confirmation_url });
  } catch (error) {
    console.error('Ошибка при создании платежа:', error.response?.data || error.message);
    res.status(500).json({ error: 'Не удалось создать платёж' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
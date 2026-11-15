export type OrderDetails = {
  name: string;
  phone: string;
  date: string;          // "2026-12-15" — как приходит из input type="date"
  weight: number;
  cakeTitle: string | null;     // null — «посоветуйте»
  fillingName: string | null;   // null — «посоветуйте»
  wishes: string;
  approxPrice?:number| null;        
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ru-RU"); // "15.12.2026"

export function buildOrderMessage(order: OrderDetails): string {
  const lines = [
    `Здравствуйте! Меня зовут ${order.name.trim()}.`,
    order.cakeTitle
      ? `Хочу заказать торт «${order.cakeTitle}» на ${formatDate(order.date)}.`
      : `Хочу, чтобы вы посоветовали торт, на ${formatDate(order.date)}.`,
    `Вес: ${order.weight} кг`,
    `Начинка: ${order.fillingName ?? "посоветуйте, пожалуйста"}`,
    `Телефон: ${order.phone}`,
    `Пожелания: ${order.wishes.trim() || "нет"}`,
  ];

  if (order.approxPrice) {
  lines.push(`Примерная стоимость по каталогу: ~${order.approxPrice.toLocaleString("ru-RU")} ₽`);
}


  return lines.join("\n");
}

export function buildWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

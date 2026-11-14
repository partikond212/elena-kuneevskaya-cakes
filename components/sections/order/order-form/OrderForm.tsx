"use client";
import { business, cakes, fillings } from "@/data/data";
import styles from "./OrderForm.module.css";

import ClickSpark from "@/components/ui/click-spak/ClickSpark";
import { useState } from "react";
import { Cake } from "@/types";

const formatPhone = (value: string) => {
  // 1. Выкидываем всё, кроме цифр: "+7 (918) 93" → "791893"
  let digits = value.replace(/\D/g, "");

  // 2. Если начали с 8 (по-русски "8 918..."), меняем на 7
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);

  // 3. Если начали сразу с 918, добавляем 7 впереди
  if (!digits.startsWith("7")) digits = "7" + digits;

  // 4. В российском номере 11 цифр — лишние обрезаем
  digits = digits.slice(0, 11);

  // 5. Берём цифры без семёрки: "79189341034" → "9189341034"
  const d = digits.slice(1);

  // 6. Собираем строку по кусочкам — только те части, до которых дошёл ввод
  let result = "+7";
  if (d.length > 0) result += ` (${d.slice(0, 3)}`; // +7 (918
  if (d.length >= 3) result += ")"; // +7 (918)
  if (d.length > 3) result += ` ${d.slice(3, 6)}`; // +7 (918) 934
  if (d.length > 6) result += `-${d.slice(6, 8)}`; // +7 (918) 934-10
  if (d.length > 8) result += `-${d.slice(8, 10)}`; // +7 (918) 934-10-34

  return result;
};

const PHONE_REGEX = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const OrderForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cake, setCake] = useState<Pick<Cake, "title"> | "suggest">();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = e.target.value.replace(/[^а-яёА-ЯЁa-zA-Z\s-]/g, "");
    setName(clean.charAt(0).toUpperCase() + clean.slice(1));
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhone(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!PHONE_REGEX.test(phoneNumber)) {
      alert("Введите номер полностью");
      return;
    }
    const data = new FormData(e.currentTarget);
    const filling = fillings.find((f) => f.slug === data.get("filling"));

    const orderMessage = [
      `Здравствуйте! Меня зовут ${name}.`,
      `Хочу ${cake !== "suggest" ? "хочу заказать торт - " + cake : "чтобы вы мне посоветовали торт"} на ${data.get("date")}`,
      `Вес: ${data.get("weight")} кг`,
      ` ${filling ? "Начинка: " + filling.name : "Начинку ,пожалуйста,посоветуйте  "}`,
      `Телефон: ${data.get("phoneNumber")}`,
      `Пожелания: ${data.get("wishes") || "нет"}`,
    ].join("\n");
    window.open(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(orderMessage)}`,
      "_blank",
    );
  };
  return (
    <form className={styles.OrderForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.subFlex}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Имя
          </label>
          <input
            className={styles.inputField}
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            autoCapitalize="words"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className={styles.label}>
            Телефон
          </label>
          <input
            className={styles.inputField}
            id="phoneNumber"
            type="tel"
            required
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
      <div className={styles.subFlex}>
        <div>
          <label htmlFor="date" className={styles.label}>
            Дата праздника
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="weight" className={styles.label}>
            Вес, кг
          </label>
          <input
            className={styles.inputField}
            type="number"
            min={1}
            step={0.5}
            max={50}
            required
            name="weight"
            id="weight"
          />
        </div>
      </div>
      <label htmlFor="cake" className={styles.label}>
        Торт
      </label>
      <select
        defaultValue="suggestion"
        id="cake"
        name="cake"
        className={styles.selectField}
      >
        <option value="suggestion">Посоветуйте мне</option>
        {cakes.map((c) => (
          <option value={c.title} key={c.id}>
            {c.title}
          </option>
        ))}
      </select>
      <label htmlFor="filling" className={styles.label}>
        Начинка
      </label>
      <select
        defaultValue="suggestion"
        id="filling"
        name="filling"
        className={styles.selectField}
      >
        <option value="suggestion">Посоветуйте мне</option>
        {fillings.map((f) => (
          <option value={f.slug} key={f.slug}>
            {f.name}
          </option>
        ))}
      </select>

      <label htmlFor="wishes" className={styles.label}>
        Пожелания по оформлению
      </label>
      <textarea
        className={styles.inputField}
        name="wishes"
        id="wishes"
        placeholder="Например: надпись «С днём рождения, Маша!», розовые цветы"
      ></textarea>
      <ClickSpark
        sparkColor={["#b8414f", "#e8a0a0"]}
        shape="star"
        sparkCount={10}
        sparkRadius={40}
        duration={700}
        style={{ width: "auto", height: "auto" }}
      >
        <button type="submit" className="orderLink">
          Заказать
        </button>
      </ClickSpark>
    </form>
  );
};

export default OrderForm;

import { type FC } from "react";
import styles from "./Order.module.css";
import OrderForm from "./order-form/OrderForm";
const Order: FC = () => {
  return (
    <section id="order" className={`section`}>
      <div className="container">
        <div className={styles.orderSection}>
          <div className={styles.orderInfo}>
            <h2 className={"section-title"}>Заказать торт</h2>
            <p className="section-sub">
              Оставьте заявку, и мы напишем вам в WhatsApp, чтобы обсудить
              детали.
            </p>
            <ul className={styles.orderSteps}>
              <li>Выберите торт и начинку</li>
              <li>Согласуем дизайн и вес</li>
              <li>Вносите предоплату</li>
              <li> Забираете свежий торт в назначенный день</li>
            </ul>
          </div>
          <div className={styles.orderAction}>
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;

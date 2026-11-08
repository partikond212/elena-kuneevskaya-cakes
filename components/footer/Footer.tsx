"use client";
import { type FC } from "react";
import styles from "./Footer.module.css";
import SocialLink from "./social-link/SocialLink";
const Footer: FC = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topPartContainer}>
          <div className={styles.topPart}>
            <div className={styles.workshop}>
              <h3 className={styles.topPartTitle}>
                Кондитерская мастерская Елены Кунеевской
              </h3>
              <p>Торты и десерты на заказ с любовью.</p>
            </div>
            <div className={styles.contacts}>
              <h3 className={styles.topPartTitle}>Контакты</h3>
              <p>
                <a href="https://yandex.ru/maps/org/konditerskaya_masterskaya_yeleny_kuneyevskoy/126333163638/?ll=39.226009%2C45.221936&mode=search&sll=39.161715%2C45.051645&sspn=0.267105%2C0.183739&text=%D0%BA%D0%BE%D0%BD%D0%B4%D0%B8%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%20%D0%BA%D1%83%D0%BD%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B9&z=16">
                  Пролетарская ул., 1А, станица Динская
                </a>
                <a href="tel:89189340134">+7 (918) 934-01-34</a>
              </p>
            </div>
            <div className={styles.socials}>
              <h3 className={styles.topPartTitle}>Мы в соцсетях</h3>
              <div>
                <SocialLink
                  goTo="https://t.me/konditerskayamasterskaya"
                  text={"Telegram"}
                />
                <SocialLink
                  goTo={"https://wa.me/79189341034"}
                  text={"WhatsApp"}
                />
                <SocialLink goTo={"https://vk.com/id709724480"} text={"VK"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomPart}>
          © {date.getFullYear()} Кондитерская мастерская Елены Кунеевской
        </div>
      </div>
    </footer>
  );
};

export default Footer;

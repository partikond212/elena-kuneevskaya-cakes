import { type FC } from "react";
import styles from "./Footer.module.css";
import SocialLink from "./social-link/SocialLink";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { business } from "@/data/data";
async function getYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const Footer: FC = async () => {
  const year = await getYear();
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
              <p className={styles.contactsInfo}>
                <Link href={business.mapsUrl}>
                  Пролетарская ул., 1А, станица Динская
                </Link>
                <Link href={`tel:${business.phoneNumber}`}>
                  +7 952 851-01-61
                </Link>
              </p>
            </div>
            <div className={styles.socials}>
              <h3 className={styles.topPartTitle}>Мы в соцсетях</h3>
              <div className={styles.socialsList}>
                <SocialLink goTo={business.telegram} text={"Telegram"} />
                <SocialLink
                  goTo={`https://wa.me/${business.phoneNumber}`}
                  text={"WhatsApp"}
                />
                <SocialLink goTo={business.vk} text={"VK"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomPart}>
          © {year} Кондитерская мастерская Елены Кунеевской
        </div>
      </div>
    </footer>
  );
};

export default Footer;

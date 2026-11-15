import React, { ReactNode, type FC } from "react";

import styles from "./LegalPage.module.css";
type LegalPageProps = { title: string; updated: string; children: ReactNode };
const LegalPage: FC<LegalPageProps> = ({ title, updated, children }) => {
  return (
    <article className={`container section ${styles.legal}`}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.updated}>Редакция от {updated}</p>
      {children}
    </article>
  );
};

export default LegalPage;

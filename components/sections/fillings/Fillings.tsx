"use client";
import React, { useState, type FC } from "react";
import styles from "./Fillings.module.css";
import { Filling, fillings } from "@/data/data";
import FillingModal from "@/components/ui/filling-modal/FillingModal";
import FillingCard from "./filling-card/FillingCard";

const Fillings: FC = () => {
  const [selected, setSelected] = useState<Filling | null>(null);

  return (
    <section id="fillings" className={`section ${styles.fillings}`}>
      <div className="container">
        <h2 className="section-title">Начинки</h2>
        <p className="section-sub">
          Не знаете, что выбрать? Напишите, Елена подскажет под ваш вкус.
        </p>

        <div className={styles.fillings}>
          {fillings.map((f) => (
            <FillingCard key={f.name} filling={f} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <FillingModal
        onClose={() => setSelected(null)}
        currentFilling={selected}
      />
    </section>
  );
};

export default Fillings;

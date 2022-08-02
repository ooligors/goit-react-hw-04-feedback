import React from "react";
import css from "./Section.module.css";

export const Section = ({ title, children }) => {
    return (
        <section className={css.section} title={title}>
      <h2 className={css.h2}>{title}</h2>
      {children}
    </section>
  );
};
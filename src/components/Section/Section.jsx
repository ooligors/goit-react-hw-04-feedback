import React from "react";

export const Section = ({ title, children }) => {
  return (
    <section className='section' title={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
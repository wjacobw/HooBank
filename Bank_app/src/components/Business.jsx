import React from "react";
import { layout } from "../style";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className = {layout.sectionInfo}>
        <h2>You do the business, <br/>   We will handle the money</h2>
        <p>With the right credit card, you can improve your 
          financial life by building credit, earning rewards, and
          saving money. But with hundreds of credit cards on the market.
        </p>
      </div>
    </section>
  );
};

export default Business;

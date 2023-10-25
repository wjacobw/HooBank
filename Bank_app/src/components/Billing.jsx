import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] 
      relative z-[5]"
        ></img>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Managing your company&apos;s finances has never been easier. With our
          cutting-edge billing and invoicing solutions, you can streamline your
          financial processes, track expenses, and improve cash flow. Take
          control of your business&apos;s financial health and watch it thrive with
          our intuitive tools and services.
        </p>

        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
      </div>
    </section>
  );
};

export default Billing;

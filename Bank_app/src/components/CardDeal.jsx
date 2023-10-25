import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>
          Find a better card deal <br className="sm:block hidden"></br> in few
          easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Are you tired of high credit card interest rates? Look no further. Our
          platform makes it simple to find a better card deal in just a few easy
          steps. Say goodbye to those hefty fees and hello to savings!
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"></img>
      </div>
    </section>
  );
};

export default CardDeal;

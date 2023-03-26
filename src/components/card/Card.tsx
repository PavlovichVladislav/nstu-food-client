import s from "./Card.module.scss";
import restaurant from "../../assets/images/restaurant1.jpg";

const Card = () => {
   return (
      <div className={s.cardWrapper}>
         <img src={restaurant} alt="restaurant" />
         <h2>Под яблоком Ньютона</h2>
         <div className={s.descr}>
            <div>Проспект Карла Маркса, 20, к1 </div>
            <div>3й этаж, слева от главной лестницы </div>
         </div>
         <button>Пн-сб с 08:00 до 19:00</button>
      </div>
   );
};

export default Card;

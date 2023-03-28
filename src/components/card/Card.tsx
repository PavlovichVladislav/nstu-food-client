import s from "./Card.module.scss";
import restaurant from "../../assets/images/restaurant1.jpg";
import rate from "../../assets/icons/rate.svg";
import response from "../../assets/icons/response.svg";

const Card = () => {
   return (
      <div className={s.cardWrapper}>
         <img src={restaurant} alt="restaurant" />
         <h2>Под яблоком Ньютона</h2>
         <div className={s.descr}>
            <div>Проспект Карла Маркса, 20, к1 </div>
            <div>3й этаж, слева от главной лестницы </div>
            <div className={s.rating}>
               <div className="rate"> <img src={rate} alt="rate"/> 4,5/5</div>
               <div className="responses"> <img src={response} alt="responses"/> 20 отзывов</div>
            </div>
         </div>
         <a href="#">Пн-сб с 08:00 до 19:00</a>
      </div>
   );
};

export default Card;

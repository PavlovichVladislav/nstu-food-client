import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import { IRestuarant } from "../../models/restuarant";

import s from "./Card.module.scss";
import rateImg from "../../assets/icons/rate.svg";
import reviewImg from "../../assets/icons/response.svg";

interface CardProps {
   restaurant: IRestuarant;
}

const Card: FC<CardProps> = ({ restaurant }) => {
   const { id, address, img, location, name, rating, reviews, schedule } = restaurant;

   return (
      <div className={s.cardWrapper}>
         <Link to={`restuarant/${id}`}>
            <img src={`http://localhost:7000/${img}`} className={s.cardImage} alt="restaurant" />
         </Link>

         <h2>{name}</h2>
         <div className={s.cardInfo}>
            <div className={s.cardInfoItem}> {address} </div>
            <div className={s.cardInfoItem}> {location} </div>
            <div className={`${s.cardRating} ${s.cardInfoItem}`}>
               <div className={s.rate}>
                  <img src={rateImg} alt="rate" /> {rating}/5
               </div>
               <div className={s.reviews}>
                  <img src={reviewImg} alt="responses" /> {reviews} отзывов
               </div>
            </div>
         </div>
         <NavLink className={s.cardLink} to={`restuarant/${id}`}>
            {schedule}
         </NavLink>
      </div>
   );
};

export default Card;

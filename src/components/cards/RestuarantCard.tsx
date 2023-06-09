import { FC } from "react";
import { Link } from "react-router-dom";

import { IRestuarant } from "../../models/restuarant";
import { serverUrl } from "../../utils/constants";

import AppLink from "../appLink/AppLink";

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
            <img src={`${serverUrl}${img}`} className={s.cardImage} alt="restaurant" />
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
         <AppLink to={`restuarant/${id}`}>{schedule}</AppLink>
      </div>
   );
};

export default Card;

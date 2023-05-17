import s from "./Card.module.scss";
import { FC } from "react";
import { IMenuItem } from "../../models/menuItem";

interface CardProps {
    product: IMenuItem;
}

const FoodCard: FC<CardProps> = ({ product }) => {
   const { img, name, price } = product;

   return (
      <div className={s.cardWrapper}>
         <img src={`http://217.71.129.139:5508/${img}`} className={s.cardImage} alt="restaurant" />
         <h2>{name}</h2>
         <a href="/food:id" className={s.cardLink} >{price}/руб.</a>
      </div>
   );
};

export default FoodCard;

import s from "./Card.module.scss";
import { FC } from "react";
import { IMenuItem } from "../../models/menuItem";
import { serverUrl } from "../../utils/constants";
import AppLink from "../appLink/AppLink";

interface CardProps {
    product: IMenuItem;
}

const FoodCard: FC<CardProps> = ({ product }) => {
   const { img, name, price } = product;

   return (
      <div className={s.cardWrapper}>
         <img src={`${serverUrl}${img}`} className={s.cardImage} alt="restaurant" />
         <h2>{name}</h2>
         <AppLink to="#">{price}/руб.</AppLink>
      </div>
   );
};

export default FoodCard;

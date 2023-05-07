import React from "react";
import Skeleton from "../card/Skeleton";
import FoodCard from "../card/FoodCard";
import { IMenuItem } from "../../models/menuItem";
import ItemsEmpty from "../itemsEmpty/ItemsEmpty";

interface Props {
   isLoading: boolean;
   menu: IMenuItem[];
}

const MenuItems: React.FC<Props> = ({ isLoading, menu }) => {
   if (isLoading) {
      return (
         <div className="content__items">
            {[...new Array(8)].map((_, i) => (
               <Skeleton key={i} />
            ))}
         </div>
      );
   }

   if (menu.length) {
      return (
         <div className="content__items">
            {menu.map((menu) => (
               <FoodCard key={menu.id} product={menu} />
            ))}
         </div>
      );
   }

   return <ItemsEmpty />;
};

export default MenuItems;

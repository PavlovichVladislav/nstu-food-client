import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { restuarantsApi } from "../../api/RestuarantApi";
import { dishQueryName, itemsInPage, pageQueryName, skeletonsCount } from "../../utils/constants";

import Skeleton from "../cards/Skeleton";
import FoodCard from "../cards/FoodCard";
import ItemsEmpty from "../itemsEmpty/ItemsEmpty";

import { IMenuItem } from "../../models/menuItem";
import { useAppSelector } from "../../hooks/hooks";

interface Props {
   onLoad: (restName: string, pages: number) => void;
}

const MenuItems: React.FC<Props> = ({ onLoad }) => {
   const [menu, setMenu] = useState<IMenuItem[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [searchParams] = useSearchParams();
   const { restId } = useParams();
   const { search } = useAppSelector((state) => state.search);
   const { sortProperty } = useAppSelector((state) => state.dishes.sort);
   const page = searchParams.get(pageQueryName) || 1;

   const dishCategory = searchParams.get(dishQueryName);

   const getMenu = async (id: string) => {
      try {
         setIsLoading(true);

         const { dishes, restuarantName, count } = await restuarantsApi.getRestuarntMenu(
            id,
            sortProperty,
            dishCategory,
            search,
            +page,
            itemsInPage
         );
         setMenu(dishes);

         const pagesCount = Math.ceil(count / itemsInPage);
         onLoad(restuarantName, pagesCount);

         setIsLoading(false);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      if (restId) getMenu(restId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dishCategory, sortProperty, search, page]);

   if (isLoading) {
      return (
         <div className="content__items">
            {[...new Array(skeletonsCount)].map((_, i) => (
               <Skeleton key={i} />
            ))}
         </div>
      );
   }

   if (!isLoading && menu.length > 0) {
      return (
         <div className="content__items">
            {menu.map((menuItem) => (
               <FoodCard key={menuItem.id} product={menuItem} />
            ))}
         </div>
      );
   }

   return <ItemsEmpty />;
};

export default MenuItems;

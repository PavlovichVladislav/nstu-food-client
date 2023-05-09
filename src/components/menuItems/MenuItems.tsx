import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import RestuarantApi from "../../api/RestuarantApi";

import Skeleton from "../card/Skeleton";
import FoodCard from "../card/FoodCard";
import ItemsEmpty from "../itemsEmpty/ItemsEmpty";

import { IMenuItem } from "../../models/menuItem";

const MenuItems: React.FC = () => {
   const [menu, setMenu] = useState<IMenuItem[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const restuarantsApi = new RestuarantApi();
   const [searchParams] = useSearchParams();
   const { restId } = useParams();

   const dishCategory = searchParams.get('category');
   const sortProperty = searchParams.get('sort');

   const getMenu = async (id: string) => {
      setIsLoading(true);

      const response = await restuarantsApi.getRestuarntMenu(id, sortProperty || '');
      setMenu(response);
      setIsLoading(false);
   };

   useEffect(() => {
      if (restId) getMenu(restId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dishCategory, sortProperty]);

   if (isLoading) {
      return (
         <div className="content__items">
            {[...new Array(8)].map((_, i) => (
               <Skeleton key={i} />
            ))}
         </div>
      );
   }

   console.log(isLoading);
   console.log('pre');

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

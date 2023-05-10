import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import RestuarantApi from "../../api/RestuarantApi";

import Skeleton from "../cards/Skeleton";
import FoodCard from "../cards/FoodCard";
import ItemsEmpty from "../itemsEmpty/ItemsEmpty";

import { IMenuItem } from "../../models/menuItem";

interface Props {
   onLoad: (restName: string) => void;
}

const MenuItems: React.FC<Props> = ({ onLoad }) => {
   const [menu, setMenu] = useState<IMenuItem[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [searchParams] = useSearchParams();
   const { restId } = useParams();

   const restuarantsApi = new RestuarantApi();

   const dishCategory = searchParams.get("category");
   const sortProperty = searchParams.get("sort");

   const getMenu = async (id: string) => {
      setIsLoading(true);
      const { dishes, restuarantName } = await restuarantsApi.getRestuarntMenu(
         id,
         sortProperty || ""
      );
      setMenu(dishes);
      onLoad(restuarantName);
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

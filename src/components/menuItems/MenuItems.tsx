import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { dishQueryName, pageQueryName, skeletonsCount } from "../../utils/constants";

import { fetchMenu } from "../../redux/slices/menuSlice";

import Skeleton from "../cards/Skeleton";
import FoodCard from "../cards/FoodCard";
import ItemsEmpty from "../itemsEmpty/ItemsEmpty";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

interface Props {
   searchValue: string;
}

const MenuItems: React.FC<Props> = ({ searchValue }) => {
   const dispatch = useAppDispatch();
   const [ searchParams ] = useSearchParams();
   const { restId } = useParams();

   const { sortProperty: sort } = useAppSelector((state) => state.dishes.sort);
   const { loading, menuItems } = useAppSelector((state) => state.menu);

   const page = searchParams.get(pageQueryName) || 1;
   const dishType = searchParams.get(dishQueryName);
   
   const getMenu = async (id: string) => {
      dispatch(fetchMenu({ id, dishType, search: searchValue, sort, page: +page }));
   };

   useEffect(() => {
      if (restId) getMenu(restId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dishType, sort, searchValue, page]);
   
   if (loading === "loading") {
      return (
         <div className="content__items">
            {[...new Array(skeletonsCount)].map((_, i) => (
               <Skeleton key={i} />
            ))}
         </div>
      );
   }

   if (loading === "idle" && !menuItems.length) {
      return <ItemsEmpty />;
   }

   if (loading === "error") {
      return <div>Ошибка...</div>;
   }

   return (
      <div className="content__items">
         {menuItems.map((menuItem) => (
            <FoodCard key={menuItem.id} product={menuItem} />
         ))}
      </div>
   );
};

export default MenuItems;

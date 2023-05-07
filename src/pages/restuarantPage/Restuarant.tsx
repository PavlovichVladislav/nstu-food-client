import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RestuarantApi from "../../api/RestuarantApi";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import MenuItems from "../../components/menuItems/MenuItems";

import { setDishCategory } from "../../redux/slices/sortDishesSlice";

import { IMenuItem } from "../../models/menuItem";

const types = ["Все", "Горячие блюда", "Десерты", "Быстрый перекус", "Напитки", "Десерты"];

export default function Restuarant() {
   const [menu, setMenu] = useState<IMenuItem[]>([]);
   const [restName, setRestName] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const { restId } = useParams();

   const {
      dishCategory,
      sort: { sortProperty },
   } = useAppSelector((state) => state.dishes);

   const dispatch = useAppDispatch();

   const restuarantsApi = new RestuarantApi();

   const getMenu = async (id: string) => {
      setIsLoading(true);

      const response = await restuarantsApi.getRestuarntMenu(id, sortProperty);
      setMenu(response);
      setIsLoading(false);
   };

   useEffect(() => {
      if (restId) getMenu(restId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dishCategory, sortProperty]);

   return (
      <>
         <section className="content__categories">
            <Categories
               categories={types}
               activeCategory={dishCategory}
               onClickCategory={(dishCategory: number) => dispatch(setDishCategory(dishCategory))}
            />
         </section>
         <div className="content__top">
            <h2 className="content__title"> {restName}</h2>
            <Sort />
         </div>
         <MenuItems isLoading={isLoading} menu={menu} />
      </>
   );
}

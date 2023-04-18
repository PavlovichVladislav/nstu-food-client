import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import Skeleton from "../../components/card/Skeleton";
import RestuarantApi from "../../api/RestuarantApi";
import Sort from "../../components/sort/Sort";
import { IMenuItem } from "../../models/menuItem";
import FoodCard from "../../components/card/FoodCard";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setDishCategory } from "../../redux/slices/sortDishesSlice";

const types = ["Все", "Горячие блюда", "Десерты", "Быстрый перекус", "Напитки", "Десерты"];

export default function Home() {
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

   const getMenu = (id: string) => {
      setIsLoading(true);

      restuarantsApi.getRestuarntMenu(id, sortProperty).then(({ menu, name }) => {
         setMenu(menu);
         setRestName(name);
         setIsLoading(false);
      });
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
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
               : menu.map((menu) => <FoodCard key={menu.id} product={menu} />)}
         </div>
      </>
   );
}

import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import Skeleton from "../../components/card/Skeleton";
import RestuarantApi from "../../api/RestuarantApi";
import Sort from "../../components/sort/Sort";
import { IMenuItem } from "../../models/menuItem";
import FoodCard from "../../components/card/FoodCard";
import { useParams } from "react-router-dom";

export default function Home() {
   const types = ["Все", "Горячие блюда", "Десерты", "Быстрый перекус", "Напитки", "Десерты"];

   const [menu, setMenu] = useState<IMenuItem[]>([]);
   const [restName, setRestName] = useState("");
   const [campus, setCampus] = useState(0);
   const [sort, setSort] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const { restId } = useParams();

   const restuarantsApi = new RestuarantApi();

   const getMenu = (id: string) => {
      setIsLoading(true);

      restuarantsApi.getRestuarntMenu(id, sort).then(({ menu, name }) => {
         setMenu(menu);
         setRestName(name);
         setIsLoading(false);
      });
   };

   useEffect(() => {
      if (restId) getMenu(restId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [campus, sort]);

   return (
      <>
         <section className="content__categories">
            <Categories categories={types} campus={campus} onClickCategory={setCampus} />
         </section>
         <div className="content__top">
            <h2 className="content__title"> {restName}</h2>
            <Sort sortValue={sort} onSortClick={setSort} />
         </div>
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
               : menu.map((menu) => <FoodCard key={menu.id} product={menu} />)}
         </div>
      </>
   );
}

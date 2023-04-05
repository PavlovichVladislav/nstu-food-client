import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
// import Sort from "../../components/sort/Sort";
import Skeleton from "../../components/card/Skeleton";
import RestuarantApi from "../../api/RestuarantApi";
import Sort from "../../components/sort/Sort";
import { IMenuItem } from "../../models/menuItem";
import FoodCard from "../../components/card/FoodCard";

export default function Home() {
   const types = ["Все", "Горячие блюда", "Десерты", "Быстрый перекус", "Напитки", "Десерты"];

   const [menu, setMenu] = useState<IMenuItem[]>([]);
   const [campus, setCampus] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   
   const restuarantsApi = new RestuarantApi();

   const getMenu = (id: number) => {
      setIsLoading(true);

      restuarantsApi.getRestuarntMenu(id).then((rests) => {
         setMenu(rests);
         setIsLoading(false);
      });
   };

      useEffect(() => {
            getMenu(0);
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [campus]);

   return (
      <>
         <section className="content__categories">
            <Categories categories={types} campus={campus} onClickCategory={setCampus} />
         </section>
         <div className="content__top">
            <h2 className="content__title"> Все блюда</h2>
            <Sort />
         </div>
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
               : menu.map((menu) => <FoodCard key={menu.id} product={menu}/>)}
         </div>
      </>
   );
}

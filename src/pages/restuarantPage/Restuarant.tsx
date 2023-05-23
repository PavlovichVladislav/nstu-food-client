import { useEffect } from "react";

import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import MenuItems from "../../components/menuItems/MenuItems";
import Paging from "../../components/pagination";
import { useAppSelector } from "../../hooks/hooks";

const types = [
   { label: "Все", query: "" },
   { label: "Горячие блюда", query: "hotDishes" },
   { label: "Десерты", query: "dessert" },
   { label: "Быстрый перекус", query: "fastFood" },
   { label: "Напитки", query: "drink" },
];

export default function Restuarant() {
   const { restuarantName, pageCount } = useAppSelector((state) => state.menu);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   return (
      <>
         <section className="content__categories">
            <Categories categories={types} paramName="dishType" />
         </section>
         <div className="content__top">
            <h2 className="content__title">{restuarantName}</h2>
            <Sort />
         </div>
         <MenuItems />
         {pageCount > 1 && <Paging totalPages={pageCount} />}
      </>
   );
}

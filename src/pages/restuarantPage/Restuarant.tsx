import { useState, useEffect } from "react";

import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import MenuItems from "../../components/menuItems/MenuItems";
import Paging from "../../components/pagination";

const types = [
   { label: "Все", query: "" },
   { label: "Горячие блюда", query: "hotDishes" },
   { label: "Десерты", query: "dessert" },
   { label: "Быстрый перекус", query: "fastFood" },
   { label: "Напитки", query: "drink" },
];

export default function Restuarant() {
   const [restName, setRestName] = useState("");
   const [pages, setPages] = useState(1);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   const onLoadMenuList = (restName: string, pages: number) => {
      setRestName(restName);
      setPages(pages);
   };

   return (
      <>
         <section className="content__categories">
            <Categories categories={types} paramName="dishType" />
         </section>
         <div className="content__top">
            <h2 className="content__title">{restName}</h2>
            <Sort />
         </div>
         <MenuItems onLoad={onLoadMenuList} />
         {pages > 1 && <Paging totalPages={pages} />}
      </>
   );
}

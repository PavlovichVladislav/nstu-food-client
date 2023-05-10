import { useState } from "react";

import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import MenuItems from "../../components/menuItems/MenuItems";

const types = ["Все", "Горячие блюда", "Десерты", "Быстрый перекус", "Напитки", "Десерты"];

export default function Restuarant() {
   const [restName, setRestName] = useState("");

   return (
      <>
         <section className="content__categories">
            <Categories
               categories={types}
               categoryName="dishType"
            />
         </section>
         <div className="content__top">
            <h2 className="content__title"> {restName}</h2>
            <Sort />
         </div>
         <MenuItems />
      </>
   );
}

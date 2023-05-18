import { useState, useEffect } from "react";

import Categories from "../../components/categories/Categories";
import Paging from "../../components/pagination";
import RestuarantsList from "../../components/restuarantsList/RestuarantsList";

const categories = [{ label: "Все", query: "" }];

for (let i = 1; i <= 8; i++) {
   categories.push({ label: `Корпус ${i}`, query: `${i}` });
}

export default function Main() {
   const [pages, setPages] = useState(1);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   const onListLoad = (pages: number) => {
      setPages(pages);
   };

   return (
      <>
         <section className="content__categories">
            <Categories categories={categories} paramName={"campus"} />
         </section>
         <div className="content__top">
            <h2 className="content__title"> Наши заведения</h2>
         </div>
         <RestuarantsList onListLoad={onListLoad} />
         {pages > 1 && <Paging totalPages={pages} />}
      </>
   );
}

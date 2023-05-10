import { useState } from "react";

import Categories from "../../components/categories/Categories";
import Paging from "../../components/pagination";
import RestuarantsList from "../../components/restuarantsList/RestuarantsList";

const categories = ["Все"];

for (let i = 1; i <= 8; i++) {
   categories.push(`Корпус ${i}`);
}

export default function Main() {
   const [pages, setPages] = useState(1);

   const onListLoad = (pages: number) => {
      setPages(pages)
   }

   return (
      <>
         <section className="content__categories">
            <Categories categories={categories} categoryName={'campus'} />
         </section>
         <div className="content__top">
            <h2 className="content__title"> Наши заведения</h2>
            {/* <SearchPannel/> */}
         </div>
         <RestuarantsList onListLoad={onListLoad}/>
         {pages > 1 && <Paging totalPages={pages} />}
      </>
   );
}



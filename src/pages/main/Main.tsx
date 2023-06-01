import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import Paging from "../../components/pagination";
import RestuarantsList from "../../components/restuarantsList/RestuarantsList";
import { useAppSelector } from "../../hooks/hooks";

const categories = [{ label: "Все", query: "" }];

for (let i = 1; i <= 8; i++) {
   categories.push({ label: `Корпус ${i}`, query: `${i}` });
}

export default function Main() {
   const { pageCount } = useAppSelector(state => state.restuarants);
   const { search } = useAppSelector((state) => state.search);
   const [isInit, setIsInit] = useState(true);

   useEffect(() => {
      setIsInit(false);
   }, [])

   return (
      <>
         <section className="content__categories">
            <Categories categories={categories} paramName={"campus"} />
         </section>
         <div className="content__top">
            <h2 className="content__title"> Наши заведения</h2>
         </div>
         <RestuarantsList searchValue={isInit ? '' : search} />
         {pageCount > 1 && <Paging totalPages={pageCount} />}
      </>
   );
}

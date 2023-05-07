import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import RestuarantApi from "../../api/RestuarantApi";
import { SearchContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { setCampus } from "../../redux/slices/campusSlice";

import Categories from "../../components/categories/Categories";
import Card from "../../components/card/Card";
import Skeleton from "../../components/card/Skeleton";
import Paging from "../../components/pagination";

import { IRestuarant } from "../../models/restuarant";

const categories = ["Все"];

for (let i = 1; i <= 8; i++) {
   categories.push(`Корпус ${i}`);
}

export default function Home() {
   const [searchParams, updateSearchParams] = useSearchParams();
   const [restuarants, setRestuarants] = useState<IRestuarant[]>([]);
   const campus = useAppSelector((state) => state.filter.campus);
   const dispatch = useAppDispatch();

   const page = Number(searchParams.get("page"));

   const { search } = useContext(SearchContext);

   const [isLoading, setIsLoading] = useState(true);
   const restuarantsApi = new RestuarantApi();

   const getRestuarants = (campus?: number) => {
      setIsLoading(true);

      restuarantsApi.getRestuarants(campus, page, 8, search).then((rests) => {
         setRestuarants(rests.rows);
         setIsLoading(false);
      });
   };

   useEffect(() => {
      getRestuarants(campus);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [campus, page, search]);

   return (
      <>
         <section className="content__categories">
            <Categories categories={categories} activeCategory={campus} onClickCategory={(campusNumber: number) => dispatch(setCampus(campusNumber))} />
         </section>
         <div className="content__top">
            <h2 className="content__title"> Наши заведения</h2>
            {/* <SearchPannel/> */}
         </div>
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
               : restuarants.map((restuarant) => (
                    <Card restaurant={restuarant} key={restuarant.id} />
                 ))}
         </div>
         <Paging totalPages={2} />
      </>
   );
}



import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import Card from "../../components/card/Card";
import Skeleton from "../../components/card/Skeleton";
import RestuarantApi from "../../api/RestuarantApi";
import { IRestuarant } from "../../models/restuarant";

export default function 
Home() {
   const [restuarants, setRestuarants] = useState<IRestuarant[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const restuarantsApi = new RestuarantApi();

   useEffect(() => {
      restuarantsApi.getAll().then((rests) => {
         setRestuarants(rests);
         setIsLoading(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <section className="content__categories">
            <Categories />
         </section>
         <div className="content__top">
            <h2 className="content__title"> Наши заведения</h2>
            <Sort />
         </div>
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
               : restuarants.map((restuarant) => (
                    <Card key={restuarant.id} restaurant={restuarant} />
                 ))}
         </div>
      </>
   );
}

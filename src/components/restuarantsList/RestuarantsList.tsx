import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import RestuarantApi from "../../api/RestuarantApi";
import { SearchContext } from "../../App";

import Skeleton from "../card/Skeleton";
import Card from "../card/Card";
import RestuarantsListEmpty from "../restuarantsListEmpty/RestuarantsListEmpty";

import { IRestuarant } from "../../models/restuarant";

interface Props {
   onListLoad: (pages: number) => void;
}

const RestuarantsList: React.FC<Props> = ({ onListLoad }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [restuarants, setRestuarants] = useState<IRestuarant[]>([]);
   const [searchParams] = useSearchParams();
   const { search } = useContext(SearchContext);

   const page = searchParams.get("page") || 1;
   const campus = searchParams.get("campus");

   const restuarantsApi = new RestuarantApi();

   const getRestuarants = (campus?: number) => {
      setIsLoading(true);

      restuarantsApi.getRestuarants(campus, +page, 8, search).then((rests) => {
         setRestuarants(rests.rows);
         setIsLoading(false);

         const pageCount = Math.ceil(rests.count / 8);

         onListLoad(pageCount);
      });
   };

   useEffect(() => {
      getRestuarants(campus ? +campus : undefined);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [campus, page, search]);

   if (isLoading) {
      return (
         <div className="content__items">
            {[...new Array(8)].map((_, i) => (
               <Skeleton key={i} />
            ))}
         </div>
      );
   }

   if (restuarants.length) {
      return (
         <div className="content__items">
            {restuarants.map((restuarant) => (
               <Card restaurant={restuarant} key={restuarant.id} />
            ))}
         </div>
      );
   }

   return <RestuarantsListEmpty/>;
};

export default RestuarantsList;

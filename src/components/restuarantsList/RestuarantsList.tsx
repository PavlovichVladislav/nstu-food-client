import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import RestuarantApi from "../../api/RestuarantApi";
import { useAppSelector } from "../../hooks/hooks";
import { campusQueryName, itemsInPage, pageQueryName, skeletonsCount } from "../../utils/constants";

import Skeleton from "../cards/Skeleton";
import Card from "../cards/RestuarantCard";
import RestuarantsListEmpty from "../restuarantsListEmpty/RestuarantsListEmpty";

import { IRestuarant } from "../../models/restuarant";

interface Props {
   onListLoad: (pages: number) => void;
}

const RestuarantsList: React.FC<Props> = ({ onListLoad }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [restuarants, setRestuarants] = useState<IRestuarant[]>([]);
   const [searchParams] = useSearchParams();
   const { search } = useAppSelector((state) => state.search);

   const page = searchParams.get(pageQueryName) || 1;
   const campus = searchParams.get(campusQueryName);

   const restuarantsApi = new RestuarantApi();

   const getRestuarants = async (campus?: number) => {
      try {
         setIsLoading(true);

         const { count, rows: restuarants } = await restuarantsApi.getRestuarants(
            campus,
            +page,
            itemsInPage,
            search
         );
         setRestuarants(restuarants);

         const pageCount = Math.ceil(count / itemsInPage);
         onListLoad(pageCount);

         setIsLoading(false);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getRestuarants(campus ? +campus : undefined);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [campus, page, search]);

   if (isLoading) {
      return (
         <div className="content__items">
            {[...new Array(skeletonsCount)].map((_, i) => (
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

   return <RestuarantsListEmpty />;
};

export default RestuarantsList;

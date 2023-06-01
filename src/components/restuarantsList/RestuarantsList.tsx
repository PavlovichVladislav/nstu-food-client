import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { campusQueryName, itemsInPage, pageQueryName, skeletonsCount } from "../../utils/constants";

import { fetchRestuarants } from "../../redux/slices/restuarantSlice";

import Skeleton from "../cards/Skeleton";
import Card from "../cards/RestuarantCard";
import RestuarantsListEmpty from "../restuarantsListEmpty/RestuarantsListEmpty";

interface Props {
   searchValue: string;
}

const RestuarantsList: React.FC<Props> = ({ searchValue }) => {
   const dispatch = useAppDispatch();
   const [searchParams] = useSearchParams();

   const { restuarants, loading } = useAppSelector((state) => state.restuarants);
   
   const page = searchParams.get(pageQueryName) || 1;
   const campus = searchParams.get(campusQueryName);

   const getRestuarants = async (campus?: number) => {
      dispatch(
         fetchRestuarants({
            campus,
            page: +page,
            limit: itemsInPage,
            searchValue,
         })
      );
   };

   useEffect(() => {
      getRestuarants(campus ? +campus : undefined);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [campus, page, searchValue]);

   if (loading === "loading") {
      return (
         <div className="content__items">
            {[...new Array(skeletonsCount)].map((_, i) => (
               <Skeleton key={i} />
            ))}
         </div>
      );
   }

   if (loading === "idle" && !restuarants.length) {
      return <RestuarantsListEmpty />;
   }

   if (loading === "error") {
      return <div>Ошибка...</div>;
   }

   return (
      <div className="content__items">
         {restuarants.map((restuarant) => (
            <Card restaurant={restuarant} key={restuarant.id} />
         ))}
      </div>
   );
};

export default RestuarantsList;

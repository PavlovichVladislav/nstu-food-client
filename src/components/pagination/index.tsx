import clsx from "clsx";
import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { pageQueryName } from "../../utils/constants";

import styles from "./Pagination.module.scss";

interface PagingProps {
   totalPages: number;
   paramQueryName?: string;
}

const Paging: React.FC<PagingProps> = ({ totalPages, paramQueryName = pageQueryName }) => {
   const [searchParams, updateSearchParams] = useSearchParams();

   const currentPage = useMemo(() => {
      const candidate = searchParams.get(paramQueryName);
      return candidate ? Number(candidate) : 1;
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchParams]);

   const onChangePage = (value: number) => {
      searchParams.set(paramQueryName, value.toString());
      updateSearchParams(searchParams);
   };

   const pagingList = new Array(totalPages)
      .fill(null)
      .map((_, i) => ({ number: i + 1, isActive: currentPage === i + 1 }));

   return (
      <section className={styles.paging}>
         {pagingList.map(({ isActive, number }) => (
            <button
               key={number}
               className={clsx(styles.link, { [styles.active]: isActive })}
               onClick={() => onChangePage(number)}
            >
               {number}
            </button>
         ))}
         {currentPage < totalPages && (
            <button className={styles.next} onClick={() => onChangePage(currentPage + 1)}>
               Далее
            </button>
         )}
      </section>
   );
};

export default Paging;

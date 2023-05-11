import React, { useContext, useRef } from "react";

import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const SearchPannel = () => {
   const { search, changeSearch } = useContext(SearchContext);
   const inputRef = useRef<HTMLInputElement>(null);

   const onClear = () => {
      inputRef.current?.focus();
      changeSearch("");
   };

   return (
      <div className={styles.searchWrapper}>
         <input
            ref={inputRef}
            value={search}
            onChange={(e) => changeSearch(e.target.value)}
            className={styles.input}
            placeholder="Введите название заведения..."
         />
         <div className={styles.clearWrapper} onClick={onClear}>
            <span className={styles.clear}></span>
         </div>
      </div>
   );
};

export default SearchPannel;

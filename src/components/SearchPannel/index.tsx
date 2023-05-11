import React, { useContext, useRef, useCallback, useState } from "react";
import debounse from "lodash.debounce";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const SearchPannel = () => {
   const [localValue, setLocalValue] = useState("");
   const { changeSearch } = useContext(SearchContext);
   const inputRef = useRef<HTMLInputElement>(null);

   const onClear = () => {
      inputRef.current?.focus();
      setLocalValue("");
      changeSearch("");
   };

   const updateGlobalSearchValue = useCallback(
      debounce((value: string) => {
         changeSearch(value);
      }, 250),
      []
   );

   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    updateGlobalSearchValue(e.target.value);
   }

   return (
      <div className={styles.searchWrapper}>
         <input
            ref={inputRef}
            value={localValue}
            onChange={onChangeInput}
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

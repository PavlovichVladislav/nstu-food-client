import React, { useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../hooks/hooks";
import { setSearchValue } from "../../redux/slices/searchSlice";

import styles from "./Search.module.scss";

const SearchPannel = () => {
   const [localValue, setLocalValue] = useState("");
   const inputRef = useRef<HTMLInputElement>(null);
   const dispatch = useAppDispatch();

   const onClear = () => {
      inputRef.current?.focus();
      setLocalValue("");
      dispatch(setSearchValue(""));
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const updateGlobalSearchValue = useCallback(
      debounce((value: string) => {
         dispatch(setSearchValue(value));
      }, 250),
      []
   );

   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
      updateGlobalSearchValue(e.target.value);
   };

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

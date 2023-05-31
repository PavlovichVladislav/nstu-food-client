import React, { useRef, useCallback, useState, useEffect } from "react";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../hooks/hooks";
import { setSearchValue } from "../../redux/slices/searchSlice";

import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";
import { mainPlaceholder, restuarantPlaceholder } from "../../utils/constants";

const SearchPannel = () => {
   const [localValue, setLocalValue] = useState("");
   const inputRef = useRef<HTMLInputElement>(null);
   const { pathname } = useLocation();
   const dispatch = useAppDispatch();

   const placeholder = pathname.includes("restuarant") ? restuarantPlaceholder : mainPlaceholder;

   const visible = pathname.includes("restuarant") || pathname === "/";

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

   useEffect(() => {
      dispatch(setSearchValue(""));
      setLocalValue("");
   }, [pathname]);

   if (!visible) return null;

   return (
      <div className={styles.searchWrapper}>
         <input
            ref={inputRef}
            value={localValue}
            onChange={onChangeInput}
            className={styles.input}
            placeholder={placeholder}
         />
         {localValue.length > 0 && (
            <div className={styles.clearWrapper} onClick={onClear}>
               <span className={styles.clear}></span>
            </div>
         )}
      </div>
   );
};

export default SearchPannel;

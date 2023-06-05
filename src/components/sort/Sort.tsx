import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { SortPropertyType, setSortValue } from "../../redux/slices/sortDishesSlice";

import s from "./Sort.module.scss";

const sortValues: SortPropertyType[] = [
   { id: 1, name: "новизне", sortProperty: "" },
   { id: 2, name: "цене(возр.)", sortProperty: "asc" },
   { id: 3, name: "цене(убыв.)", sortProperty: "desc" },
];

const Sort = () => {
   const sortProperty = useAppSelector((state) => state.dishes.sort);
   const [isOpen, setIsOpen] = useState(false);
   const dispatch = useAppDispatch();
   const sortRef = useRef<HTMLDivElement>(null);

   const onSelectValue = (prop: SortPropertyType) => {
      dispatch(setSortValue(prop));
      setIsOpen((acitve) => !acitve);
   };

   useEffect(() => {
      function handleClickOutSort(e: MouseEvent) {
         if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
            setIsOpen(false);
         }
      }

      function handlePressEsqSort(e: globalThis.KeyboardEvent) {
         if (e.key === "Escape") {
            setIsOpen(false);
         }
      }

      document.body.addEventListener("click", handleClickOutSort);
      document.body.addEventListener("keyup", handlePressEsqSort);

      return function cleanUp() {
         document.body.removeEventListener("click", handleClickOutSort);
         document.body.removeEventListener("keyup", handlePressEsqSort);
      };
   }, []);

   return (
      <div ref={sortRef} className={s.sortWrapper}>
         <div
            className={s.sortLabel}
            onClick={() => setIsOpen((acitve) => !acitve)}
            tabIndex={0}
            onKeyUp={(e) => {
               if (e.key === "Enter") {
                  setIsOpen((acitve) => !acitve);
               }
            }}
         >
            Сортировка по: <span>{sortProperty.name}</span>
         </div>
         {isOpen && (
            <div className={s.sortPopup}>
               {sortValues.map((sortValue, i) => (
                  <div
                     key={i}
                     className={
                        sortValue.sortProperty === sortProperty.sortProperty ? `${s.active}` : ""
                     }
                     tabIndex={0}
                     onClick={() => onSelectValue(sortValue)}
                     onKeyUp={(e) => {
                        if (e.key === "Enter") {
                           onSelectValue(sortValue);
                        }
                     }}
                  >
                     {sortValue.name}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Sort;

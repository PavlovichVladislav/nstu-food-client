import { FC, useState } from "react";
import s from "./Sort.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { SortPropertyType, setSortValue } from "../../redux/slices/sortDishesSlice";

interface Props {
   // sortValue: number;
   // onSortClick: (valueNum: number) => void;
}
const sortValues: SortPropertyType[] = [
   { id: 1, name: "не выбрано", sortProperty: "" },
   { id: 2, name: "цене(возр.)", sortProperty: "asc" },
   { id: 3,name: "цене(убыв.)", sortProperty: "desc" },
];

// onSortClick, sortValue

const Sort: FC<Props> = () => {
   const sortProperty = useAppSelector((state) => state.dishes.sort);
   const [isOpen, setIsOpen] = useState(false);
   const dispatch = useAppDispatch();
   

   const onSelectValue = (prop: SortPropertyType) => {
      dispatch(setSortValue(prop));
      setIsOpen((acitve) => !acitve);
   };

   return (
      <div className={s.sortWrapper}>
         <div className={s.sortLabel} onClick={() => setIsOpen((acitve) => !acitve)}>
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
                     onClick={() => onSelectValue(sortValue)}
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

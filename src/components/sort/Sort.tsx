import { FC, useState } from "react";
import s from "./Sort.module.scss";

interface Props {
   sortValue: number;
   onSortClick: (valueNum: number) => void;
}

const Sort: FC<Props> = ({ onSortClick, sortValue }) => {
   const sortValues = ["популярности", "цене(возр.)", "цене(убыв.)"];
   const [isOpen, setIsOpen] = useState(false);

   const onSelectValue = (i: number) => {
      onSortClick(i);
      setIsOpen((acitve) => !acitve);
   };

   return (
      <div className={s.sortWrapper}>
         <div className={s.sortLabel} onClick={() => setIsOpen((acitve) => !acitve)}>
            Сортировка по: <span>{sortValues[sortValue]}</span>
         </div>
         {isOpen && (
            <div className={s.sortPopup}>
               {sortValues.map((value, i) => (
                  <div
                     key={i}
                     className={i === sortValue ? `${s.active}` : ""}
                     onClick={() => onSelectValue(i)}
                  >
                     {value}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Sort;

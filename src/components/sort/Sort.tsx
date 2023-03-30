import { useState } from "react";
import s from "./Sort.module.scss";

const Sort = () => {
   const sortValues = ["популярности", "цене", "алфавиту"];
   const [isOpen, setIsOpen] = useState(false);
   const [activeIndex, setActiveIndex] = useState(0);

   const onSelectValue = (i: number) => {
      setActiveIndex(i);
      setIsOpen((acitve) => !acitve);
   };

   return (
      <div className={s.sortWrapper}>
         <div className={s.sortLabel} onClick={() => setIsOpen((acitve) => !acitve)}>
            Сортировка по: <span>{sortValues[activeIndex]}</span>
         </div>
         {isOpen && (
            <div className={s.sortPopup}>
               {sortValues.map((value, i) => (
                  <div
                     key={i}
                     className={i === activeIndex ? `${s.active}` : ""}
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

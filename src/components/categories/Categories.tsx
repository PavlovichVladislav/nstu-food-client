import { FC, useState } from "react";
import s from "./Categories.module.scss";

const categories = ["Все"];

for (let i = 1; i <= 8; i++) {
   categories.push(`Корпус ${i}`);
}

interface Props {
   onClickCategory: (category: number) => void;
   campus: number;
} 

const Categories: FC<Props> = ({ onClickCategory, campus }) => {
   return (
      <div className={s.categories}>
         <ul>
            {categories.map((categoryName, i) => (
               <li
                  key={i}
                  className={campus === i ? `${s.active}` : ""}
                  onClick={() => onClickCategory(i)}
               >
                  {categoryName}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;

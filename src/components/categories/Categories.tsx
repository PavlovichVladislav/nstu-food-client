import { FC } from "react";
import s from "./Categories.module.scss";

interface Props {
   categories: string[]
   onClickCategory: (category: number) => void;
   activeCategory: number;
} 

const Categories: FC<Props> = ({ onClickCategory, activeCategory, categories }) => {
   return (
      <div className={s.categories}>
         <ul>
            {categories.map((categoryName, i) => (
               <li
                  key={i}
                  className={activeCategory === i ? `${s.active}` : ""}
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

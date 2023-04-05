import { FC } from "react";
import s from "./Categories.module.scss";

interface Props {
   categories: string[]
   onClickCategory: (category: number) => void;
   campus: number;
} 

const Categories: FC<Props> = ({ onClickCategory, campus, categories }) => {
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

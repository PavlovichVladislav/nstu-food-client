import { FC } from "react";
import s from "./Categories.module.scss";
import { useSearchParams } from "react-router-dom";

interface Props {
   categories: string[];
   categoryName: string;
}

const Categories: FC<Props> = ({ categories, categoryName }) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const categoryName1 = searchParams.get(categoryName) ? searchParams.get(categoryName) : 0;

   return (
      <div className={s.categories}>
         <ul>
            {categories.map((category, i) => (
               <li
                  key={i}
                  className={categoryName1 === i ? `${s.active}` : ""}
                  onClick={() => {
                     setSearchParams({ [categoryName]: `${i}` });
                  }}
               >
                  {category}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;

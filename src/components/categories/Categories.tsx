import { FC } from "react";
import s from "./Categories.module.scss";
import { useSearchParams } from "react-router-dom";

interface Props {
   categories: string[];
   paramName: string;
}

const Categories: FC<Props> = ({ categories, paramName }) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const categoryName = searchParams.get(paramName) ? searchParams.get(paramName) as string : 0;

   return (
      <div className={s.categories}>
         <ul>
            {categories.map((category, i) => (
               <li
                  key={i}
                  className={+categoryName === i ? `${s.active}` : ""}
                  onClick={() => {
                     setSearchParams({ [paramName]: `${i}` });
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

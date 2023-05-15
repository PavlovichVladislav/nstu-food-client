import { FC } from "react";
import s from "./Categories.module.scss";
import { useSearchParams } from "react-router-dom";

interface Props {
   categories: { label: string; query: string }[];
   paramName: string;
}

const Categories: FC<Props> = ({ categories, paramName }) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const categoryName = searchParams.get(paramName) ? (searchParams.get(paramName) as string) : 0;

   return (
      <div className={s.categories}>
         <ul>
            {categories.map(({label, query}) => (
               <li
                  key={query}
                  className={categoryName === query ? `${s.active}` : ""}
                  onClick={() => {
                     setSearchParams({ [paramName]: `${query}` });
                  }}
               >
                  {label}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;

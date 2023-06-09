import { FC } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import s from "./Categories.module.scss";

interface Props {
   categories: { label: string; query: string }[];
   paramName: string;
}

const Categories: FC<Props> = ({ categories, paramName }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { pathname } = useLocation();
   const navigate = useNavigate();

   const categoryName = searchParams.get(paramName) ? (searchParams.get(paramName) as string) : "";

   const onPrevPageClick = () => {
      navigate(-1);
   };

   return (
      <div className={s.categories}>
         <ul>
            {pathname !== "/" && <li onClick={onPrevPageClick}>На главную</li>}
            {categories.map(({ label, query }) => (
               <li
                  key={query}
                  className={categoryName === query ? `${s.active}` : ""}
                  onClick={() => {
                     setSearchParams({ [paramName]: `${query}` });
                  }}
                  onKeyUp={(e) => {
                     if (e.key === "Enter") {
                        setSearchParams({ [paramName]: `${query}` });
                     }
                  }}
                  tabIndex={0}
               >
                  {label}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;

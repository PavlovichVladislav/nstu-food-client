import { useState } from "react";
import s from "./Categories.module.scss";

const categories = ["Все"];

for (let i = 1; i <= 8; i++) {
   categories.push(`Корпус ${i}`);
}

const Categories = () => {
   const [active, setActive] = useState(0);

   return (
      <div className={s.categories}>
         <ul>
            {categories.map((categoryName, i) => (
               <li
                  key={i}
                  className={i === active ? `${s.active}` : ""}
                  onClick={() => setActive(i)}
               >
                  {categoryName}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;

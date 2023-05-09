import React from "react";

import styles from "./ItemsEmpty.module.scss";
import CustomLink from "../customLink/CustomLink";

const ItemsEmpty = () => {
   return (
      <div className={styles.itemsEmpty}>
         <div>Меню для данного заведения ещё не было добавлено на сайт..</div>
         <CustomLink path="/">Вернуться на главную.</CustomLink>
      </div>
   );
};

export default ItemsEmpty;

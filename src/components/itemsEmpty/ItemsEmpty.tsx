import React from "react";

import styles from "./ItemsEmpty.module.scss";
import AppLink from "../appLink/AppLink";

const ItemsEmpty = () => {
   return (
      <div className={styles.itemsEmpty}>
         <div>В данном разделе пока что пусто 😕</div>
         <AppLink to="/">Вернуться на главную.</AppLink>
      </div>
   );
};

export default ItemsEmpty;

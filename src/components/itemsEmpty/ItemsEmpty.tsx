import React from "react";

import styles from "./ItemsEmpty.module.scss";
import CustomLink from "../customLink/CustomLink";

const ItemsEmpty = () => {
   return (
      <div className={styles.itemsEmpty}>
         <div>В данном разделе пока что пусто 😕</div>
         <CustomLink path="/">Вернуться на главную.</CustomLink>
      </div>
   );
};

export default ItemsEmpty;

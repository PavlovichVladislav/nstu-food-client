import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import AppLink from "../../components/AppLink/AppLink";

export default function ErrorPage() {
   const error: any = useRouteError();
   console.error(error);

   return (
      <div className={styles.errorPage}>
         <h2>Ошибка: 404</h2>
         <p className={styles.descr}>
            Извините, страница по указанному адресу не была найдена. <br />
            Возможно данная страница была удалена или изменила адрес.
         </p>
         <AppLink className={styles.link} to="/">
            Вернуться на главную
         </AppLink>
      </div>
   );
}

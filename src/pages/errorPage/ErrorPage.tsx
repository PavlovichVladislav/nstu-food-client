import styles from "./ErrorPage.module.scss";
import AppLink from "../../components/appLink/AppLink";
import Spinner from "../../components/spinner/Spinner";

export default function ErrorPage() {
   return (
      <div className="content__wrapper">
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
      </div>
   );
}

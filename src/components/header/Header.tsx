import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.png";

const Header = () => {
   return (
      <header className={styles.header}>
            <a href="/">
               <div className={styles.headerLogo}>
                  <img src={logo} alt="logo" />
                  <div className={styles.headerDescr}>
                     <h1 className={styles.headerTitle}>Хрустящий кампус</h1>
                     <div className={styles.headerSubtitle}>лучшая еда для лучших студентов</div>
                  </div>
               </div>
            </a>
      </header>
   );
};

export default Header;

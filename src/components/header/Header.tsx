import s from "./Header.module.scss";
import logo from "../../assets/icons/logo.png";

const Header = () => {
   return (
      <header className={s.header}>
         <a href="/">
            <div className={s.headerLogo}>
               <img src={logo} alt="logo" />
               <div className={s.headerDescr}>
                  <h1 className={s.headerTitle}>Хрустящий кампус</h1>
                  <div className={s.headerSubtitle}>лучшая еда для лучших студентов</div>
               </div>
            </div>
         </a>
      </header>
   );
};

export default Header;

import s from "./Header.module.scss";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import SearchPannel from "../SearchPannel";

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.headerLeft}>
            <Link to="/">
               <div className={s.headerLogo}>
                  <img src={logo} alt="logo" />
                  <div className={s.headerDescr}>
                     <h1 className={s.headerTitle}>Хрустящий кампус</h1>
                     <div className={s.headerSubtitle}>лучшая еда для лучших студентов</div>
                  </div>
               </div>
            </Link>
            <SearchPannel />
         </div>
         <div className={s.headerButtons}>
            <button>Вход</button>
            <button className={s.light}>Регистрация</button>
         </div>
      </header>
   );
};

export default Header;

import s from "./Header.module.scss";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import SearchPannel from "../SearchPannel";
import { useAppDispatch } from "../../hooks/hooks";
import { setRegOpen, setAuthOpen } from "../../redux/slices/authModalsSlice";

const Header = () => {
   const dispatch = useAppDispatch();

   const openRegModal = () => {
      dispatch(setRegOpen(true));
   };

   const openAuthModal = () => {
      dispatch(setAuthOpen(true));
   }

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
            <button onClick={openAuthModal} >Вход</button>
            <button onClick={openRegModal} className={s.light}>Регистрация</button>
         </div>
      </header>
   );
};

export default Header;

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAuthOpen } from "../../redux/slices/authModalsSlice";

import Modal from "../modal/Modal";

import styles from './ModalAuth.module.scss';

const ModalAuth = () => {
   const { isAuthOpen } = useAppSelector((state) => state.authModals);
   const dispatch = useAppDispatch();
   
   return (
      <Modal
         width={450}
         onClose={() => {
            dispatch(setAuthOpen(false));
         }}
         title="Авторизация"
         isOpen={isAuthOpen}
      >
         <div className={styles.content}>
            Пока что вход/регистрация недоступны &#128530; <br /> Но вскоре они обязательно появятся
            &#129303;{" "}
         </div>
      </Modal>
   );
};

export default ModalAuth;

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setRegOpen } from "../../redux/slices/authModalsSlice";

import Modal from "../modal/Modal";

import styles from './ModalReg.module.scss';

const ModalRegistration = () => {
   const { isRegOpen } = useAppSelector((state) => state.authModals);
   const dispatch = useAppDispatch();

   return (
      <Modal
         width={450}
         onClose={() => {
            dispatch(setRegOpen(false));
         }}
         title="Регистрация"
         isOpen={isRegOpen}
      >
         <div className={styles.content}>
            Пока что вход/регистрация недоступны &#128530; <br /> Но вскоре они обязательно появятся
            &#129303;{" "}
         </div>
      </Modal>
   );
};

export default ModalRegistration;

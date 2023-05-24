import React from "react";
import { clsx } from "clsx";

import styles from "./Modal.module.scss";
import close from "../../assets/icons/close.svg";

interface Props {
   title: string;
   children: React.ReactNode;
   onClose: () => void;
   width: React.CSSProperties["width"];
   isOpen: boolean;
}

const Modal: React.FC<Props> = ({ width, title, onClose, children, isOpen }: Props) => {
   React.useEffect(() => {
      const handleEscPress = (e: KeyboardEvent) => {
         console.log('event');
         if (e.key === "Escape") onClose();
      };

      window.addEventListener("keyup", handleEscPress);
   }, []);

   React.useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
         return;
      }

      document.body.style.overflow = "visible";
   }, [isOpen]);

   return (
      <div className={clsx(styles.modal, { [styles.modalActive]: isOpen })}>
         <div className={styles.background} onClick={onClose}></div>
         <div style={{ width }} className={styles.content}>
            <header className={styles.title}>
               <h2 className={styles.titleText}>{title}</h2>
               <div onClick={onClose} className={styles.close}>
                  <img className={styles.close} src={close} alt="close" />
               </div>
            </header>
            {children}
         </div>
      </div>
   );
};

export default Modal;

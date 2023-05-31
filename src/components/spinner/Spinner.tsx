import React from "react";

import spinner from "../../assets/icons/spinner.svg";
import styles from "./Spinner.module.scss";
import clsx from "clsx";

interface Props {
   className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => {
   return (
      <div className="content__wrapper">
         <img className={clsx(styles.spinner, className)} src={spinner} alt="spinner" />
      </div>
   );
};

export default Spinner;

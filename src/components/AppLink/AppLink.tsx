import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppLink.module.scss";
import clsx from "clsx";

interface Props {
   to: string;
   children: React.ReactNode;
   className?: string;
}

const AppLink: React.FC<Props> = ({ to, children, className }) => {
   return (
      <Link className={clsx(styles.link, className)} to={to}>
         {children}
      </Link>
   );
};

export default AppLink;

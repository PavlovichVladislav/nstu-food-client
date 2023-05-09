import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import styles from './CustomLink.module.scss';

interface Props {
    path: string;
    className?: string;
    children: string;
}

const CustomLink: React.FC<Props> = ({path, className, children}) => {
    return (
        <Link to={path} className={clsx(styles.link, className)} >
            {children}
        </Link>
    );
};

export default CustomLink
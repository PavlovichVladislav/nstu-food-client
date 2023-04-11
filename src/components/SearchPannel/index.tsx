import React from 'react'

import styles from "./Search.module.scss";

const SearchPannel = () => {
    return (
        <input className={styles.input} placeholder="Введите название заведения..."/>
    );
};

export default SearchPannel;
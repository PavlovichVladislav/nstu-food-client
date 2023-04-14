import React, { useContext } from 'react'

import styles from "./Search.module.scss";
import { SearchContext } from '../../App';

const SearchPannel = () => {
    const { search, changeSearch } = useContext(SearchContext);

    return (
        <input value={search} onChange={(e) => changeSearch(e.target.value)} className={styles.input} placeholder="Введите название заведения..."/>
    );
};

export default SearchPannel;
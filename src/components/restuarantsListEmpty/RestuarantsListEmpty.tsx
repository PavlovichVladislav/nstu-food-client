import React from 'react';

import styles from './ListEmpty.module.scss';

const RestuarantsListEmpty = () => {
    return (
        <div className={styles.ListEmpty} >
            Заведения не были найдены 😕 <br/> Возможно, в данном корпусе их нет.
        </div>
    );
};

export default RestuarantsListEmpty;
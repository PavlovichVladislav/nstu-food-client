import React from 'react';

import styles from './ItemsEmpty.module.scss';

const ItemsEmpty = () => {
    return (
        <div className={styles.itemsEmpty} >
            Меню отсутсвует...
        </div>
    );
};

export default ItemsEmpty;
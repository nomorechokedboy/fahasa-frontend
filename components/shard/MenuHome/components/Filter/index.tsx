import React from 'react';
import Icon from '../../../Icon';
import styles from '../../styles.module.scss';

const FilterItem = () => (
    <a href="" className="filterItem">
        Manga
        <Icon name="chevron-right" />
    </a>
);

export default function Filter() {
    return (
        <div className={styles.homeFilter}>
            <header className={styles.filterHeader}>
                <h2>Danh Mục Sản Phẩm</h2>
            </header>
            <div className={styles.filterList}>
                {Array.from(Array(5)).map((_, i) => (
                    <FilterItem key={i} />
                ))}
            </div>
        </div>
    );
}

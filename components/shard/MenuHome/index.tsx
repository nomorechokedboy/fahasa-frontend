import React from 'react';
import styles from './styles.module.scss';
import Banner from './components/Banner';
import Filter from './components/Filter';

export default function MenuHome() {
    return (
        <div className={styles.menuHome}>
            <Filter />
            <Banner />
        </div>
    );
}

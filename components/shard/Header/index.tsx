import React from 'react';
import styles from './styles.module.scss';
import Icon from '../Icon';
import HeaderIcons from './components/HeaderIcons';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <Logo />
            <div className={styles.mobileHeaderBottom}>
                <Icon name="bars" />
                <SearchBar />
                <HeaderIcons />
            </div>
        </header>
    );
}

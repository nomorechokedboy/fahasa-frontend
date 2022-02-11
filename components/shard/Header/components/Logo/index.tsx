import React from 'react';
import styles from '../styles.module.scss';

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img
                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                alt="Page Logo"
            />
        </div>
    );
}

import React from 'react';
import styles from '../styles.module.scss';

export default function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                name="search"
                placeholder="Tìm kiếm sản phẩm mong muốn..."
            />
            <i className="fas fa-search"></i>
        </div>
    );
}

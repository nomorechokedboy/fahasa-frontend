import React from 'react';
import styles from './styles.module.scss';
import { ProductHome } from '../../types/product';
import Category from '../shard/Category';
import MenuHome from '../shard/MenuHome';
import Trending from '../shard/Trending';

interface HomeProps {
    products: ProductHome[];
}

export default function Home({ products }: HomeProps) {
    return (
        <main className={styles.container}>
            <MenuHome />
            <Trending products={products} />
            <Category products={products} />
        </main>
    );
}

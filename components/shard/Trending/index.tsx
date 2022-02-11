import React from 'react';
import { ProductHome } from '../../../types/product';
import Product from '../Product';
import styles from './styles.module.scss';

interface TrendingProps {
    products: ProductHome[];
}

export default function Trending({ products }: TrendingProps) {
    return (
        <section className={styles.trending}>
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </section>
    );
}

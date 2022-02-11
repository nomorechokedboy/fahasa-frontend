import React from 'react';
import styles from './styles.module.scss';
import RatingCount from '../RatingCount';
import { ProductHome } from '../../../types/product';

interface ProductProps {
    product: ProductHome;
    sale?: number;
}

interface ToProductProps {
    slug: string;
    children: React.ReactNode;
}

const ToProduct = ({ slug, children }: ToProductProps) => (
    <a href={`/product/${slug}`}>{children}</a>
);

export default function Product({
    product: { name, pictureUrl, price, slug },
    sale,
}: ProductProps) {
    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <ToProduct slug={slug}>
                    <img src={pictureUrl} alt="Book image" />
                </ToProduct>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productName}>
                    <h2>
                        <ToProduct slug={slug}>{name}</ToProduct>
                    </h2>
                </div>
                <div className={styles.productPrice}>
                    <div className={styles.priceContainer}>
                        <span className={styles.originPrice}>{price}đ</span>
                        {sale && (
                            <span className={styles.saleRatio}>{sale}%</span>
                        )}
                    </div>
                    <span className={styles.salePrice}>Discount</span>
                </div>
                <RatingCount />
            </div>
        </div>
    );
}

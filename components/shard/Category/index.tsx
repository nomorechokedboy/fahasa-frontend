import React from 'react';
import styles from './styles.module.scss';
import { ProductHome } from '../../../types/product';
import Product from '../Product';

interface CategoryProps {
    products: ProductHome[];
}

export default function Category({ products }: CategoryProps) {
    return (
        <section className="category">
            <h1 className="categoryTitle">Category</h1>
            <div className="categoryContent">
                <div className="categoryBanner">
                    <img
                        src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2021/Tho-Bay-Mau-350x415.jpg"
                        alt="category banner"
                    />
                </div>
                <div className="categoryProducts">
                    {products.slice(0, 4).map((product) => (
                        <Product sale={15} product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

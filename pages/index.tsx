import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/Home';
import Test from '../components/shard/Test';
import { selectCount, setCount } from '../redux/count/action';
import styles from '../styles/Home.module.css';
import { ProductHome } from '../types/product';
import { GetAllProduct } from './api';

interface IndexProps {
    products: ProductHome[];
}

const Index: NextPage = ({ products }: any) => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCount(count + 1));
    };

    return <Home products={products} />;
};

export async function getStaticProps() {
    const { data: products } = await GetAllProduct();

    return {
        props: {
            products,
        },
    };
}

export default Index;

import React from 'react';
import styles from './styles.module.scss';
import Icon from '../Icon';

interface RatingProps {
    children?: React.ReactNode;
}

export default function Rating({ children }: RatingProps) {
    return (
        <div className={styles.ratingContainer}>
            {Array.from(Array(5)).map((_, i) => (
                <Icon name="star" key={i} />
            ))}
            {children}
        </div>
    );
}

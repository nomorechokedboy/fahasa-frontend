import React from 'react';
import styles from './styles.module.scss';

interface IconProps {
    children?: React.ReactNode;
    name: string;
    type?: string;
}

export default function Icon({ children, name, type = 'fas' }: IconProps) {
    return (
        <div className="iconContainer">
            <i className={`${type} fa-${name}`}></i>
            {children && <span>{children}</span>}
        </div>
    );
}

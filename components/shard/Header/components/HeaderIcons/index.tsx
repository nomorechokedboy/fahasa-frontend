import React from 'react';
import Icon from '../../../Icon';
import styles from '../styles.module.scss';

export default function HeaderIcons() {
    const Icons = [
        {
            icon: 'bell',
            text: 'Thông báo',
        },
        {
            icon: 'shopping-cart',
            text: 'Giỏ hàng',
        },
        {
            icon: 'sign-in-alt',
            text: 'Đăng nhập',
        },
    ].map((info) => (
        <Icon name={info.icon} key={info.text}>
            {info.text}
        </Icon>
    ));

    return <div className={styles.headerIcons}>{Icons}</div>;
}

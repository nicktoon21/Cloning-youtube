import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import styles from './styles.module.scss';
// import { Container } from './styles';

type Props = {
    children: ReactNode,
    title: string;
}

const Options: React.FC<Props> = ({ children, title }: Props) => {
    return (
        <a className={styles.container}>
            <div className={styles.icon}>
                {children}
            </div>
            <p>{title}</p>
        </a>
    );
}

export default Options;
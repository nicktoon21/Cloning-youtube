import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
// import { Container } from './styles';
type Props = {
    url: string,
    name: string;
}

const Canais: React.FC<Props> = ({ url, name }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img
                    src={url}
                    alt="Profile image"
                />
            </div>
            <p>
                {name}
            </p>
        </div>
    );
}

export default Canais;
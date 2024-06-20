import { ReactNode, ButtonHTMLAttributes } from 'react';

import styles from './page.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}
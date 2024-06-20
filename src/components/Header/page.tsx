import styles from './page.module.scss'

import Button from '../Button/page'

import logo from '../../../public/logo.png'
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <nav  className={styles.menuNav}>
                <Image className={styles.logo} src={logo} alt='logo' />
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="#home">Home</a></li>
                    <li className={styles.li}><a href="#quem-somos">Quem Somos</a></li>
                    <li className={styles.li}><a href="#servicos">Serviços</a></li>
                    <li className={styles.li}><a href="#novidades">Novidades</a></li>
                    <li className={styles.li}><a href="#localizacao">Localização</a></li>
                </ul>

                <Button>
                    Entre em Contato
                </Button>
            </nav>
        </header>
    )
}
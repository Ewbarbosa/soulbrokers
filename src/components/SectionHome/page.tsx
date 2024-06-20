import styles from './page.module.scss'

import Button from '../Button/page'

export default function SectionHome() {
    return (
        <section className={styles.section}>
            <div className={styles.content1}>
                <p className={styles.p}>
                    Nossa essência é cuidar de você!
                </p>
            </div>

            <div className={styles.content2}>
                <p>
                    Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação.
                </p>

                <Button>
                    Conheça nossos serviços
                </Button>
            </div>
        </section>
    )
}
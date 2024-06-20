import styles from './page.module.scss'

import Button from '../Button/page'

export default function SectionServices() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.p}>
                        Venha tomar um café conosco!
                    </p>
                </div>

                <div className={styles.content2}>
                    <p>
                        Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação.
                    </p>

                    <Button>
                        Entre em contato
                    </Button>

                </div>
            </div>
        </section>
    )
}
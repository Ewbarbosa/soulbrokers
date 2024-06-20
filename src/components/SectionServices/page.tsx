import styles from './page.module.scss'

import frame from '../../../public/Frame_40047.png'
import icons from '../../../public/Frame_40101.png'
import Image from 'next/image'
import Button from '../Button/page'

export default function SectionServices() {

    return (
        <section className={styles.sectionMain}>
            <div className={styles.top}>
                <div className={styles.topContent}>
                    <p className={styles.p}>
                        Venha tomar um café conosco!
                    </p>
                </div>

                <div className={styles.topContent2}>
                    <p>
                        Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação.
                    </p>

                    <Button>
                        Entre em contato
                    </Button>
                </div>
            </div>

            <div className={styles.center}>
                <div className={styles.centerContent}>
                    <Image src={frame} alt='soulbrokers' />
                    <p>
                        Nosso objetivo é atender às necessidades dos clientes com produtos de qualidade. Contamos com um time experiente para oferecer Proteção sob Medida.
                    </p>
                </div>

                <div className={styles.centerContent2}>
                    <p className={styles.title}>Localização</p>
                    <p className={styles.content}>Praça Silvio Romero, 55 - Conjunto 34</p>
                </div>

                <div className={styles.centerContent2}>
                    <p className={styles.title}>Empresa</p>
                    <p>Sobre Nós</p>
                    <p>Serviços</p>
                    <p>Novidades</p>
                    <p>Localização</p>
                </div>

                <div className={styles.centerContent2}>
                <p className={styles.title}>Ajuda</p>
                    <p>Políticas de Uso</p>
                    <p>Privacidade</p>
                    <p>Termos de Uso</p>
                    <p>FAQs</p>
                </div>
            </div>

            <div className={styles.bottom}>                
                <div className={styles.bottomContent}>
                    <p>2024 Copyright - Todos os Direitos Reservados - SoulBrokers</p>
                    <Image src={frame} alt='soul brokers' />
                    <Image src={icons} alt='social media' />
                </div>
            </div>
        </section>
    )
}
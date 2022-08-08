import styles from './footer.module.css'
import social from '../../assets/social.png'

const Social = () => {
    return (
        <>
            <section className={styles.containerSocial}>
                <hr className={styles.lineTop}></hr>
                <section className={styles.containerIcon}>
                    <h2 className={styles.titleSocial}>Únase a nuestra comunidad</h2>
                    <section className={styles.iconSocial}>
                        <img src={social} alt='redes sociales' />
                    </section>
                </section>
                <hr className={styles.lineBottom}></hr>
            </section>
        </>
    )

}

export default Social
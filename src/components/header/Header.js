import styles from './header.module.css'
import banner from '../../assets/banner-header.png'
const Header = () => {
    return (
        <>
            <header className={styles.container_banner}>
                <img src={banner} className={styles.banner} alt='banner' />
                <section className={styles.container_header}>
                    <section>
                        <h2 className={styles.title_header}> AVIATUR </h2>
                        <h3 className={styles.descript_header}> Descubra nuevos destinos</h3>
                    </section>
                    <section className={styles.continer_session}>
                        <p><i className='fa-solid fa-magnifying-glass'></i></p>
                        <p><i className='fa-regular fa-user'></i></p>
                    </section>
                </section>

            </header>
        </>
    )
}

export default Header;
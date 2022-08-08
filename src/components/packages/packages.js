import styles from './packages.module.css'
import miami from '../../assets/miami.png'
import cartagena from '../../assets/cartagena.png'
import machupichu from '../../assets/machupichu.png'
import buenosaires from '../../assets/buenosaires.png'

const Packages = () => {
    return (
        <>
            <h2 className={styles.titlePackages}>Paquetes imperdibles</h2>
            <section className={styles.containerImages}>
                <img src={miami} alt='miami' />
                <p className={styles.miami}>Miami, Estados Unidos</p>
                <section className={styles.icons}>
                    <i className='fa-solid fa-plane-up'></i>
                    <i className='fa-solid fa-car-rear'></i>
                </section>
                <section className={styles.containerMedium}>
                    <img src={cartagena} alt='cartagena' />
                    <p className={styles.cartagena}>Cartagena, Colombia</p>
                    <section className={`${styles.icons} ${styles.iconCart}`}>
                        <i className='fa-solid fa-plane-up'></i>
                        <i className='fa-solid fa-car-rear'></i>
                    </section>
                    <section className={styles.containerSmall}>
                        <img src={machupichu} alt='machupichu' />
                        <p className={styles.machu}>Machu Pichu, Perú</p>
                        <section className={`${styles.icons} ${styles.iconMach}`}>
                            <i className='fa-solid fa-plane-up'></i>
                            <i className='fa-solid fa-car-rear'></i>
                        </section>
                        <img src={buenosaires} alt='buenos-aires' />
                        <p className={styles.buenos}>Buenos Aires, Argentina</p>
                        <section className={`${styles.icons} ${styles.iconBuen}`}>
                            <i className='fa-solid fa-plane-up'></i>
                            <i className='fa-solid fa-car-rear'></i>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Packages
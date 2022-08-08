import Social from './social'
import About from './about'
import styles from './footer.module.css'
import iata from '../../assets/iata.png'
import anato from '../../assets/anato.png'

const Footer = () => {
    return (
        <>
            <Social />
            <About />
            <hr className={styles.lineFooter}></hr>
            <section className={styles.containerFooter}>
                <section className={styles.text}>
                    <p> Derechos del pasajero y/o deberes del transportador - SIC -
                        www.rues.org.co - Aerocivil - Contra la pornografía infantil -
                        Denuncie situaciones que afectan a menores de 18 años
                        <br></br>
                        <br></br>
                        AVIATUR apoya el trabajo de UNICEF comprometiéndose con
                        la protección de los derechos de las niñas, niños y
                        adolescentes en Colombia y el mundo. Necesitamos también
                        su compromiso. Invierta en el poder de los niños, el valor más
                        rentable de Colombia.
                        <br></br>
                        <br></br>
                        Términos y condiciones del sitio - Política de privacidad y
                        tratamiento de los datos personales - Formulario de
                        reversión de pagos - Todos los derechos reservados
                        Derecho de retracto y desistimiento, según Resolución 1209
                        del 5/25/2015 de la UAEAC.
                        <br></br>
                        <br></br>
                        Aviatur.com 2016
                        <br></br>
                        <br></br>
                        Aviatur INC. - 6316 NW AVE DORAL, FL 33178 - 01 8000 911 555
                    </p>
                </section>
                <section className={styles.ContainerContact}>
                    <section className={styles.contact}>
                        <i className='fa-solid fa-location-dot location'></i>
                        <p> Avenida 19 No. 4 - 62, Bogotá, Colombia</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-regular fa-envelope'></i>
                        <p> cliente.com@aviatur.com.co</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-solid fa-phone'></i>
                        <p> Bogotá 3821616 - 5879640</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-brands fa-whatsapp'></i>
                        <p> +5713821616</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-regular fa-circle-question'></i>
                        <p> 018000911555</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-regular fa-file-lines'></i>
                        <p> NIT: 860.000.018-2.</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-regular fa-building'></i>
                        <p> Agencia de viajes Aviatur SAS</p>
                    </section>
                    <section className={styles.contact}>
                        <i className='fa-regular fa-circle-check'></i>
                        <p> Registro Nacional de Turismo No. 438.</p>
                    </section>
                </section>
                <section className={styles.logo}>
                    <img src={iata} alt='iata' />
                    <img src={anato} alt='anato' />
                </section>

            </section>

        </>
    )

}

export default Footer
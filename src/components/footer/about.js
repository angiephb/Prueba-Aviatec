import styles from './footer.module.css'

const About = () => {
    return (
        <>
            <section className={styles.containerAbout}>
                <section className={styles.aboutMe}>
                    <h2 className={styles.titleAbout}> Acerca de nosotros</h2>
                    <ul className={styles.listAbout}>
                        <li>FAQ</li>
                        <li>Contáctenos</li>
                        <li>Sucursales Aviatur</li>
                        <li>Organización Aviatur</li>
                        <li>Trabaje con nosotros</li>
                        <li>Premios y certificaciones</li>
                        <li>Buenas prácticas en turismo sostenible</li>
                        <li>Información útil para el viajero en Colombia</li>
                    </ul>
                </section>
                <section className={styles.service}>
                    <h2 className={styles.titleAbout}>Servicio al cliente</h2>
                    <ul className={styles.listAbout}>
                        <li>Solicite su cotización aquí</li>
                        <li>Evalúe nuestro sitio</li>
                        <li>Reclamos</li>
                        <li>Problemas técnicos</li>
                        <li>Escribale a Jean Claude Bessudo</li>
                    </ul>
                </section>
                <section className={styles.products}>
                    <h2 className={styles.titleAbout}>Otros productos</h2>
                    <ul className={styles.listAbout}>
                        <li>Viajes corporativos</li>
                        <li>Consolidador de agentes/agencias</li>
                        <li>Portal de facturación electrónica</li>
                        <li>Caso Navegante</li>
                        <li>Tiquetes baratos</li>
                        <li>Hoteles baratos</li>
                        <li>Contenidos Aviatur</li>
                        <li>Revista Horizontes</li>
                    </ul>
                </section>
                <section className={styles.otherServices}>
                    <h2 className={styles.titleAbout}>Otros servicios</h2>
                    <ul className={styles.listAbout}>
                        <li>Avia Tecnología</li>
                        <li>Avia Legal</li>
                        <li>Avia Seguros</li>
                        <li>Avia Soluciones Hoteleras</li>
                        <li>Carga y Logística</li>
                        <li>Contratos de transporte aerolíneas</li>
                        <li>Canal de contenidos RSS</li>
                        <li>Blog Aviatur</li>
                        <li>Sistmeas de crédito</li>
                        <li>Información de aerolíneas</li>
                    </ul>
                </section>
            </section>
        </>
    )
}

export default About
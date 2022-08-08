import styles from './carrusel.module.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = ({ imagenes }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <>
            <section className={styles.container_carrusel}>
                <h2 className={styles.title_carrusel}>Vuelos Recomendados</h2>
                <section className={styles.container_img}>
                    <Slider {...settings}>
                        {imagenes.map((item) => (
                            <section key={item.id} className={styles.containerCard}>
                                <section className={styles.containerName} >
                                    <img src={item.screen} alt={item.city} />
                                    <p>{item.city}</p>
                                </section>
                                <section className={styles.containerPrice}>
                                    <p>${item.price}<span>COP</span></p>
                                </section>
                            </section>
                        ))}
                    </Slider>
                </section>
            </section>
        </>
    )

}

export default Carrusel;
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Testimonials.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    imageUrl: '/images/testimonial1.jpg',
    name: 'Juan Raúl',
    text: 'Excelente servicio, mi familia y yo disfrutamos mucho de nuestras vacaciones.',
  },
  {
    imageUrl: '/images/testimonial2.jpg',
    name: 'Regina Blanco',
    text: 'Un viaje inolvidable. Todo fue perfecto, desde las reservas hasta las excursiones. Muy recomendable.',
  },
  {
    imageUrl: '/images/testimonial3.jpg',
    name: 'Luis García',
    text: 'La mejor agencia de viajes con la que he recorrido el mundo. Atención personalizada y destinos espectaculares.',
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>Comentarios de nuestros clientes</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={150} // Ajusta el tamaño de la imagen según tu diseño
                height={150}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.text}>{testimonial.text}</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
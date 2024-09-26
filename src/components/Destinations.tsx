import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Destinations.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinationImages = [
  {
    imageUrl: '/images/destino1.jpg',
    title: 'TOKYO',
  },
  {
    imageUrl: '/images/destino2.jpg',
    title: 'ROMA',
  },
  {
    imageUrl: '/images/destino3.jpg',
    title: 'PARIS',
  },
];

const Destinations: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ bottom: '10px' }}>
        <ul style={{ margin: '0px', padding: '0px', textAlign: 'center' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section id="destinations" className={styles.destinations}>
      <Slider {...settings}>
        {destinationImages.map((destination, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={destination.imageUrl}
                alt={destination.title}
                layout="responsive"
                width={800}
                height={600}
                objectFit="cover"
              />
              <div className={styles.overlay}>
                <h2 className={styles.title}>{destination.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Destinations;
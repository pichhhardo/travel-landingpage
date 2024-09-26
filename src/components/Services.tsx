import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faHotel, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Services.module.css';

const servicesData = [
  {
    icon: <FontAwesomeIcon icon={faUmbrellaBeach} className={styles.icon} />,
    title: 'Paquetes de Vacaciones',
    description: 'Explora nuestros paquetes diseñados para toda la familia, con destinos increíbles y precios accesibles.',
    image: '/images/vacaciones.jpg',
  },
  {
    icon: <FontAwesomeIcon icon={faHotel} className={styles.icon} />,
    title: 'Reservas de Hoteles',
    description: 'Ofrecemos una selección de los mejores hoteles familiares en los destinos más populares.',
    image: '/images/hoteles.jpg',
  },
  {
    icon: <FontAwesomeIcon icon={faMapSigns} className={styles.icon} />,
    title: 'Excursiones y Tours',
    description: 'Disfruta de tours y excursiones que toda la familia puede disfrutar, con guías profesionales.',
    image: '/images/excursiones.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.imageContainer}>
              <Image
                src={service.image}
                alt={service.title}
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.titleContainer}>
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
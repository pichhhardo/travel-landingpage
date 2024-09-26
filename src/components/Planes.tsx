import Image from 'next/image';
import React from 'react';
import styles from '../styles/Planes.module.css';

const plansData = [
  {
    title: 'Escapada Romántica',
    description: 'Disfruta de un fin de semana inolvidable con esa persona especial en los destinos más románticos.',
    price: 'Desde $299 USD',
    features: [
      '2 noches en hotel de lujo',
      'Desayuno incluido',
      'Tour guiado por la ciudad',
      'Cena romántica a la luz de las velas'
    ],
    imageUrl: '/images/romantic-getaway.jpg'
  },
  {
    title: 'Aventura Familiar',
    description: 'Explora el mundo con tu familia, lleno de aventuras y actividades para todas las edades.',
    price: 'Desde $499 USD',
    features: [
      '3 noches en resort familiar',
      'Actividades para niños',
      'Excursión a parque temático',
      'Transporte incluido'
    ],
    imageUrl: '/images/family-adventure.jpg'
  },
  {
    title: 'Viaje Cultural',
    description: 'Sumérgete en la cultura local con nuestros paquetes diseñados para los amantes de la historia y el arte.',
    price: 'Desde $399 USD',
    features: [
      'Visitas a museos y galerías',
      'Guía turístico experto',
      '4 noches de alojamiento',
      'Entradas a eventos culturales'
    ],
    imageUrl: '/images/cultural-trip.jpg'
  },
];

const Planes: React.FC = () => {
  return (
    <section id="planes" className={styles.planesSection}>
      <h2 className={styles.sectionTitle}>Nuestros Planes y Paquetes</h2>
      <div className={styles.plansContainer}>
        {plansData.map((plan, index) => (
          <div key={index} className={styles.planCard}>
            <div className={styles.imageContainer}>
              <Image
                src={plan.imageUrl}
                alt={plan.title}
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <p className={styles.planDescription}>{plan.description}</p>
            <p className={styles.planPrice}>{plan.price}</p>
            <ul className={styles.planFeatures}>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.planButton}>Reservar Ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planes;
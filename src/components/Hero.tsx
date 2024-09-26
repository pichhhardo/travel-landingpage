import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Explora el Mundo con Nosotros</h1>
          <p className={styles.subtitle}>Tu próxima aventura comienza aquí</p>
          <button className={styles.ctaButton}>Descubre más</button>
        </div>
      </div>
      <Image 
        src="/images/hero-bg.jpg" 
        alt="Viaje por el mundo" 
        layout="fill" 
        objectFit="cover" 
        quality={100}
        className={styles.heroImage}
      />
    </section>
  );
};

export default Hero;
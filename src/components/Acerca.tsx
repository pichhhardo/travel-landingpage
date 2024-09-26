import React from 'react';
import styles from '../styles/Acerca.module.css';

const Acerca: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Acerca de Nosotros</h2>
        <p className={styles.description}>
          En Estrategia Turística Internacional SC, nos dedicamos a ofrecer experiencias de viaje inolvidables para toda la familia. Con años de experiencia en la industria, hemos perfeccionado el arte de crear itinerarios personalizados que combinan cultura, aventura y relax.
        </p>
        <p className={styles.description}>
          Nuestro equipo de expertos está comprometido a ayudarte a descubrir los destinos más sorprendentes y a planear cada detalle de tu viaje con la máxima precisión. Desde escapadas románticas hasta vacaciones familiares, estamos aquí para hacer realidad el viaje de tus sueños.
        </p>
      </div>
    </section>
  );
};

export default Acerca;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logoText}>Estrategia Turística Internacional SC</h2>
          <p className={styles.tagline}><i>Explora el mundo con nosotros.</i></p>
        </div>
        <div className={styles.links}>
          <a href="#about">Sobre Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
          <a href="#privacy">Política de Privacidad</a>
          <a href="#terms">Términos de Servicio</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className={styles.copyright}>
        <p>&copy; 2024 Estrategia Turística Internacional SC. Todos los derechos reservados.</p>      </div>
        </div>
    </footer>
  );
};

export default Footer;
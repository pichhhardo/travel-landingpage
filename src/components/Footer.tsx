import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logoText}>Estrategia Turística Internacional SC</h2>
          <p className={styles.tagline}><i>"Explora el mundo con nosotros."</i></p>
        </div>
        <div className={styles.links}>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/services">Servicios</Link>
          <Link href="/contact">Contacto</Link>
          <Link href="/privacy">Política de Privacidad</Link>
          <Link href="/terms">Términos de Servicio</Link>
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
          <p>&copy; 2024 Estrategia Turística Internacional SC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
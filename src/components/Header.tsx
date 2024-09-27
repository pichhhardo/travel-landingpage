import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} className={styles.logo} />
        <h1 className={styles.logoText}>Estrategia Turística Internacional SC</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#services">Servicios</a>
        <a href="#reservar" className={styles.cta}>
          Reservar
          <FontAwesomeIcon icon={faPlane} className={styles.planeIcon} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
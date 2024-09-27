import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa las bibliotecas de FontAwesome
import styles from '../styles/Contact.module.css'; // Importa el archivo CSS

const Contact: React.FC = () => {
  return (
    <div className={styles['contact-container']}>
      <h2 className={styles['contact-title']}>Contact Us</h2>
      <div className={styles['contact-content']}>
        <div className={styles['contact-grid']}>
          <div className={styles['contact-item']}>
            <i className={`fas fa-phone-alt ${styles['contact-icon']}`}></i>
            <div className={styles['contact-text']}>
              <h3>Phone</h3>
              <p>+1 (800) 123-4567</p>
            </div>
          </div>
          <div className={styles['contact-item']}>
            <i className={`fas fa-envelope ${styles['contact-icon']}`}></i>
            <div className={styles['contact-text']}>
              <h3>Email</h3>
              <p>info@travelagency.com</p>
            </div>
          </div>
          <div className={styles['contact-item']}>
            <i className={`fas fa-map-marker-alt ${styles['contact-icon']}`}></i>
            <div className={styles['contact-text']}>
              <h3>Address</h3>
              <p>123 Travel Street, Suite 100<br />City, Country</p>
            </div>
          </div>
          <div className={styles['contact-item']}>
            <i className={`fas fa-clock ${styles['contact-icon']}`}></i>
            <div className={styles['contact-text']}>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
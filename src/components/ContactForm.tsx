import React from 'react';
import styles from '../styles/ContactForm.module.css';
import { useForm } from '../hooks/useForm';

const initialFormState = {
  name: '',
  email: '',
  message: ''
};

const ContactForm: React.FC = () => {
  const { formData, handleChange, resetForm } = useForm(initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    alert('Formulario enviado!');
    resetForm();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
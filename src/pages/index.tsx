import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Acerca from '../components/Acerca';
import Planes from '../components/Planes';
import Footer from '../components/Footer';
import Destinations from '../components/Destinations';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';


const HomePage: React.FC = () => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Carga dinámica del módulo solo en el cliente
        import('smooth-scroll').then(SmoothScroll => {
         new SmoothScroll.default('a[href*="#"]');
        });
      }
    }, []);
  
    return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <Acerca />
      <Planes />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
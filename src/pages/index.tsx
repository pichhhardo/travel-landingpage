import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Acerca from '../components/Acerca';
import Planes from '../components/Planes';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Destinations from '../components/Destinations';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';


const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SmoothScroll = require('smooth-scroll');
      new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
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
      <Map />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
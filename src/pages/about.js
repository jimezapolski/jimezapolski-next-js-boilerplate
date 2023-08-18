import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutContainer from '@/containers/AboutContainer';
import React from 'react';

//es la pagina de about y tenfo siempre el navbar y el footer
const AboutPage = () => {
  return (
    <> 
    <Navbar />
    <AboutContainer />
    <Footer />
  </>
  );
};

export default AboutPage;

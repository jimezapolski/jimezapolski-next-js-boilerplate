import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CardsContainer from '@/containers/CardsContainer';
import React from 'react';

//es la pagina de about y tenfo siempre el navbar y el footer
const cardsContainerPage = () => {
  return (
    <> 
    <Navbar />
    <Hero />
    <CardsContainer />
    <Footer />
  </>
  );
};

export default cardsContainerPage;

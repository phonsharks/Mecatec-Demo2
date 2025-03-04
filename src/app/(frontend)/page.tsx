import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import './styles.css'

// Metadata'yı ayrı bir dosyada tanımlayacağız
export default async function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServicesSection />
      <Footer />
    </>
  )
}

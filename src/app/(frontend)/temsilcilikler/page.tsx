'use client'

import React from 'react'
import Navbar from '@/app/(frontend)/components/Navbar'
import './temsilcilik.css'

interface PartnerCard {
  name: string
  logo: string
  description: string
  website: string
  location: string
}

const partnerData: PartnerCard[] = [
  {
    name: 'Edmund Optics',
    logo: '/images/partners/edmund-optics.png',
    description: 'Optik bileşenler ve görüntüleme sistemleri konusunda dünya lideri.',
    website: 'https://www.edmundoptics.com',
    location: 'Amerika Birleşik Devletleri',
  },
  {
    name: 'Thorlabs',
    logo: '/images/partners/thorlabs.png',
    description: 'Fotonik ürünler ve optik ekipman üretiminde öncü firma.',
    website: 'https://www.thorlabs.com',
    location: 'Amerika Birleşik Devletleri',
  },
  {
    name: 'Newport Corporation',
    logo: '/images/partners/newport.png',
    description: 'Hassas optik çözümler ve lazer sistemleri konusunda uzman.',
    website: 'https://www.newport.com',
    location: 'Amerika Birleşik Devletleri',
  },
]

const TemsilcilikPage = () => {
  return (
    <div className="temsilcilik-page">
      <Navbar />

      <section className="banner-section">
        <div className="banner-overlay">
          <h1>Temsilciliklerimiz</h1>
          <p>Dünya çapında lider firmalarla güçlü iş birliklerimiz</p>
        </div>
      </section>

      <section className="content-section">
        <div className="partners-container">
          {partnerData.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">
                <img src={partner.logo} alt={`${partner.name} logo`} />
              </div>
              <div className="partner-info">
                <h3>{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
                <p className="partner-location">
                  <i className="fas fa-map-marker-alt"></i> {partner.location}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-website"
                >
                  Web Sitesini Ziyaret Et
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TemsilcilikPage

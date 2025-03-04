'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import {
  FaRegLightbulb,
  FaBullseye,
  FaCheck,
  FaCog,
  FaMicrochip,
  FaArrowRight,
} from 'react-icons/fa'
import { MdLens } from 'react-icons/md'
import Navbar from '@/app/(frontend)/components/Navbar'
import Footer from '@/app/(frontend)/components/Footer'
import './optikler.css'
import '@/app/i18n'

const OpticsPage = () => {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    i18n.changeLanguage('tr')
  }, [i18n])

  if (!mounted) {
    return null
  }

  const features = [
    {
      icon: <MdLens size={24} />,
      title: t('optics.features.precision.title'),
      description: t('optics.features.precision.description'),
    },
    {
      icon: <FaBullseye size={24} />,
      title: t('optics.features.quality.title'),
      description: t('optics.features.quality.description'),
    },
    {
      icon: <FaRegLightbulb size={24} />,
      title: t('optics.features.innovation.title'),
      description: t('optics.features.innovation.description'),
    },
    {
      icon: <FaMicrochip size={24} />,
      title: t('optics.features.technology.title'),
      description: t('optics.features.technology.description'),
    },
  ]

  const products = [
    {
      title: t('optics.products.thermal.title'),
      description: t('optics.products.thermal.description'),
      image: '/images/6-scaled.jpg',
    },
    {
      title: t('optics.products.laser.title'),
      description: t('optics.products.laser.description'),
      image: '/images/6-scaled.jpg',
    },
    {
      title: t('optics.products.imaging.title'),
      description: t('optics.products.imaging.description'),
      image: '/images/6-scaled.jpg',
    },
  ]

  return (
    <div className="optics-wrapper">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="optics-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{t('optics.hero.title')}</h1>
              <p>{t('optics.hero.description')}</p>
              <button className="hero-button">
                {t('optics.hero.button')} <FaArrowRight className="button-icon" />
              </button>
            </div>
            <div className="hero-image">
              <Image
                src="/images/6-scaled.jpg"
                alt="Advanced Optical Systems"
                width={600}
                height={400}
                className="hero-img"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>{t('optics.features.title')}</h2>
              <p>{t('optics.features.subtitle')}</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <div className="container">
            <div className="section-header">
              <h2>{t('optics.products.title')}</h2>
              <p>{t('optics.products.subtitle')}</p>
            </div>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="product-img"
                    />
                  </div>
                  <div className="product-content">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <button className="product-button">
                      {t('optics.products.learnMore')} <FaArrowRight className="button-icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="technology-section">
          <div className="container">
            <div className="technology-content">
              <div className="technology-text">
                <h2>{t('optics.technology.title')}</h2>
                <p>{t('optics.technology.description')}</p>
                <ul className="technology-list">
                  <li>
                    <FaCheck className="check-icon" />
                    <span>{t('optics.technology.point1')}</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>{t('optics.technology.point2')}</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>{t('optics.technology.point3')}</span>
                  </li>
                </ul>
              </div>
              <div className="technology-image">
                <Image
                  src="/images/6-scaled.jpg"
                  alt="Optical Technology"
                  width={600}
                  height={400}
                  className="tech-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2>{t('optics.contact.title')}</h2>
              <p>{t('optics.contact.description')}</p>
              <button className="contact-button">
                {t('optics.contact.button')} <FaArrowRight className="button-icon" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default OpticsPage

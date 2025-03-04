'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaMicroscope, FaIndustry, FaRocket, FaCube, FaTools, FaRegLightbulb } from 'react-icons/fa'
import './ServicesSection.css'

const ServicesSection = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { t } = useTranslation()
  const cardsPerPage = 3

  const services = [
    {
      icon: <FaMicroscope size={24} />,
      title: t('services.opticalSolutions.title'),
      description: t('services.opticalSolutions.description'),
      link: '/optikler',
    },
    {
      icon: <FaCube size={24} />,
      title: t('services.compositeTech.title'),
      description: t('services.compositeTech.description'),
      link: '/kompozitler',
    },
    {
      icon: <FaIndustry size={24} />,
      title: t('services.testSystems.title'),
      description: t('services.testSystems.description'),
      link: '/test-sistemleri',
    },
    {
      icon: <FaRocket size={24} />,
      title: t('services.defense.title'),
      description: t('services.defense.description'),
      link: '/savunma-havacilik',
    },
    {
      icon: <FaTools size={24} />,
      title: t('services.engineering.title'),
      description: t('services.engineering.description'),
      link: '/muhendislik',
    },
    {
      icon: <FaRegLightbulb size={24} />,
      title: t('services.rAndD.title'),
      description: t('services.rAndD.description'),
      link: '/ar-ge',
    },
  ]

  const totalPages = Math.ceil(services.length / cardsPerPage)

  const nextPage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage((prev) => (prev + 1) % totalPages)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevPage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const visibleServices = services.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage,
  )

  useEffect(() => {
    const timer = setInterval(() => {
      nextPage()
    }, 7000)

    return () => clearInterval(timer)
  }, [currentPage])

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>{t('services.title')}</h2>
          <div className="services-navigation">
            <button
              className="nav-button prev"
              aria-label={t('common.previous')}
              onClick={prevPage}
              disabled={isTransitioning}
            >
              &#x2190;
            </button>
            <button
              className="nav-button next"
              aria-label={t('common.next')}
              onClick={nextPage}
              disabled={isTransitioning}
            >
              &#x2192;
            </button>
          </div>
        </div>
        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <Link href={service.link} key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="services-pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
              onClick={() => !isTransitioning && setCurrentPage(index)}
              disabled={isTransitioning}
              aria-label={t('common.page', { number: index + 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

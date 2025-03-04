'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import './Banner.css'

const Banner = () => {
  const { t } = useTranslation()

  return (
    <div className="banner-container">
      <div className="banner" style={{ background: '#111111' }}>
        <div className="banner-content">
          <div className="banner-text">
            <h1>{t('banner.title')}</h1>
            <p>{t('banner.description')}</p>
            <div className="banner-buttons">
              <Link href="/hakkimizda">
                <button className="banner-button primary">{t('banner.learnMore')}</button>
              </Link>
            </div>
            <div className="banner-stats">
              <div className="stat-item">
                <span className="stat-value">3+</span>
                <span className="stat-label">{t('banner.stats.expertise')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10+</span>
                <span className="stat-label">{t('banner.stats.projects')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2+</span>
                <span className="stat-label">{t('banner.stats.experience')}</span>
              </div>
            </div>
          </div>
          <div className="banner-image-container">
            <Image
              src="/images/6-scaled.jpg"
              alt="Mecatec Savunma ve Havacılık"
              width={800}
              height={500}
              className="banner-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

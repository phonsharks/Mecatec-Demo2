'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaUsers,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCheckCircle,
  FaRocket,
} from 'react-icons/fa'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './about.css'

const iconMap = {
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaUsers,
}

const socialIconMap = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  github: FaGithub,
}

const AboutPage = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: <FaUsers size={24} />,
      title: t('about.values.team.title'),
      description: t('about.values.team.description'),
    },
    {
      icon: <FaLightbulb size={24} />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: <FaRocket size={24} />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
  ]

  return (
    <>
      <Head>
        <title>Hakkımızda | Mecatec</title>
        <meta
          name="description"
          content="Mecatec olarak, yenilikçi teknoloji çözümleri ve güvenilir hizmet anlayışıyla müşterilerimizin yanındayız. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin."
        />
        <meta
          name="keywords"
          content="mecatec hakkında, misyonumuz, vizyonumuz, değerlerimiz, ekibimiz, teknoloji şirketi"
        />
        <meta property="og:title" content="Hakkımızda | Mecatec" />
        <meta
          property="og:description"
          content="Mecatec olarak, yenilikçi teknoloji çözümleri ve güvenilir hizmet anlayışıyla müşterilerimizin yanındayız."
        />
        <meta property="og:image" content="/images/about-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
      </Head>
      <Navbar />
      <main className="about-wrapper">
        <div className="about-container">
          {/* Hero Section */}
          <section className="about-hero">
            <div className="about-hero-content">
              <h1>{t('about.hero.title')}</h1>
              <p>{t('about.hero.description')}</p>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="about-mission-vision">
            <div className="mission-vision-container">
              <div className="mission-box">
                <h2>{t('about.mission.title')}</h2>
                <p>{t('about.mission.description')}</p>
              </div>
              <div className="vision-box">
                <h2>{t('about.vision.title')}</h2>
                <p>{t('about.vision.description')}</p>
              </div>
            </div>
          </section>

          {/* Company Values Section */}
          <section className="about-values">
            <h2>{t('about.values.title')}</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* History Timeline Section */}
          <section className="about-timeline">
            <h2>{t('about.timeline.title')}</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>2021</h3>
                  <p>{t('about.timeline.2021')}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>2022</h3>
                  <p>{t('about.timeline.2022')}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p>{t('about.timeline.2023')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="about-achievements">
            <div className="achievements-content">
              <div className="achievement-text">
                <h2>{t('about.achievements.title')}</h2>
                <ul className="achievement-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>{t('about.achievements.item1')}</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>{t('about.achievements.item2')}</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>{t('about.achievements.item3')}</span>
                  </li>
                </ul>
              </div>
              <div className="achievement-image">
                <Image
                  src="/images/achievements.jpg"
                  alt="Mecatec Achievements"
                  width={500}
                  height={300}
                  className="about-image"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage

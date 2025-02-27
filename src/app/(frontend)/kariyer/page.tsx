'use client'

import React, { useState } from 'react'
import Navbar from '@/app/(frontend)/components/Navbar'
import './kariyer.css'

interface JobPosition {
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

const jobPositions: JobPosition[] = [
  {
    title: 'Optik Mühendisi',
    department: 'AR-GE',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    description:
      'Optik sistemlerin tasarımı, geliştirilmesi ve test edilmesi konusunda deneyimli bir optik mühendisi arıyoruz.',
    requirements: [
      'Optik Mühendisliği veya ilgili bölümlerden mezun',
      'En az 3 yıl optik tasarım deneyimi',
      'Zemax veya Code V gibi optik tasarım yazılımlarında deneyim',
      'İyi derecede İngilizce',
      'Takım çalışmasına yatkın',
    ],
  },
  {
    title: 'Yazılım Geliştirici',
    department: 'Yazılım',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    description:
      'Optik test sistemleri için yazılım geliştirme konusunda deneyimli bir yazılım geliştirici arıyoruz.',
    requirements: [
      'Bilgisayar Mühendisliği veya ilgili bölümlerden mezun',
      'Python ve C++ dillerinde deneyim',
      'Görüntü işleme ve analiz konularında bilgi',
      'Git versiyon kontrol sistemi deneyimi',
      'Agile metodolojilere hakim',
    ],
  },
]

const KariyerPage = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)

  return (
    <div className="kariyer-page">
      <Navbar />

      <section className="banner-section">
        <div className="banner-overlay">
          <h1>Kariyer Fırsatları</h1>
          <p>Geleceğin teknolojilerini bizimle birlikte şekillendirin</p>
        </div>
      </section>

      <section className="content-section">
        <div className="intro-text">
          <h2>Neden Bizimle Çalışmalısınız?</h2>
          <p>
            Mecatec olarak, çalışanlarımıza sürekli gelişim fırsatları, rekabetçi ücret paketi ve
            dinamik bir çalışma ortamı sunuyoruz. İnovasyon ve teknoloji odaklı yaklaşımımızla,
            kariyerinizde fark yaratmanız için size destek oluyoruz.
          </p>
        </div>

        <div className="jobs-container">
          <h2>Açık Pozisyonlar</h2>
          <div className="job-cards">
            {jobPositions.map((job, index) => (
              <div key={index} className="job-card" onClick={() => setSelectedJob(job)}>
                <h3>{job.title}</h3>
                <div className="job-details">
                  <span>
                    <i className="fas fa-building"></i> {job.department}
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </span>
                  <span>
                    <i className="fas fa-clock"></i> {job.type}
                  </span>
                </div>
                <p>{job.description}</p>
                <button className="apply-button">Detayları Gör</button>
              </div>
            ))}
          </div>
        </div>

        {selectedJob && (
          <div className="job-modal-overlay" onClick={() => setSelectedJob(null)}>
            <div className="job-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedJob(null)}>
                ×
              </button>
              <h2>{selectedJob.title}</h2>
              <div className="job-modal-details">
                <span>
                  <i className="fas fa-building"></i> {selectedJob.department}
                </span>
                <span>
                  <i className="fas fa-map-marker-alt"></i> {selectedJob.location}
                </span>
                <span>
                  <i className="fas fa-clock"></i> {selectedJob.type}
                </span>
              </div>
              <div className="job-description">
                <h3>İş Tanımı</h3>
                <p>{selectedJob.description}</p>
              </div>
              <div className="job-requirements">
                <h3>Aranan Nitelikler</h3>
                <ul>
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <a href="mailto:kariyer@mecatec.com" className="apply-now-button">
                Başvur
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default KariyerPage

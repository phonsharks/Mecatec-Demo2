'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './test-sistemleri.css'

interface DropdownCardProps {
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}

const DropdownCard: React.FC<DropdownCardProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className={`dropdown-card ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={onToggle}>
        <h2>{title}</h2>
        <span className="dropdown-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="dropdown-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default function TestSistemleriPage() {
  const [openCards, setOpenCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const cardData = [
    {
      title: 'Mekanik Test Sistemleri',
      content:
        'Malzeme dayanımı, yorulma testleri, çekme-basma testleri ve daha fazlası için yüksek hassasiyetli mekanik test sistemleri sunuyoruz. Modern sensör teknolojileri ve gelişmiş veri analizi özellikleri ile donatılmış sistemlerimiz, en zorlu test gereksinimlerini karşılar.',
    },
    {
      title: 'Optik Ölçüm Sistemleri',
      content:
        'Yüksek çözünürlüklü görüntüleme sistemleri, interferometreler ve spektrometreler ile optik komponentlerin hassas ölçümlerini gerçekleştiriyoruz. Özel tasarım ölçüm çözümlerimiz, nanometre seviyesinde hassasiyet sağlar.',
    },
    {
      title: 'Kalibrasyon ve Doğrulama Sistemleri',
      content:
        'Endüstriyel ölçüm cihazları için kalibrasyon ve doğrulama sistemleri geliştiriyoruz. ISO standartlarına uygun kalibrasyon prosedürleri ve sertifikasyon hizmetleri sunuyoruz.',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="test-sistemleri-page">
        <div className="banner-section">
          <div className="banner-overlay">
            <h1>Test ve Ölçüm Sistemleri</h1>
            <p>
              Yüksek hassasiyetli test ve ölçüm çözümleri ile endüstriyel ihtiyaçlarınıza cevap
              veriyoruz
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="cards-container">
            {cardData.map((card, index) => (
              <DropdownCard
                key={index}
                title={card.title}
                content={card.content}
                isOpen={openCards.includes(index)}
                onToggle={() => toggleCard(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

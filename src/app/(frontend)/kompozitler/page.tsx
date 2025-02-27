'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './kompozit.css'

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

export default function KompozitPage() {
  const [openCards, setOpenCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const cardData = [
    {
      title: 'İleri Teknoloji Kompozit Malzemeler',
      content:
        'Yüksek performanslı karbon fiber, cam fiber ve hibrit kompozit malzemeler üretiyoruz. Hafiflik, dayanıklılık ve uzun ömür gerektiren uygulamalar için özel olarak tasarlanmış çözümler sunuyoruz.',
    },
    {
      title: 'Özel Tasarım Kompozit Yapılar',
      content:
        'Endüstriyel uygulamalar için özel tasarlanmış kompozit yapılar geliştiriyoruz. Termal yönetim, titreşim sönümleme ve yapısal dayanım gibi spesifik gereksinimlere uygun çözümler üretiyoruz.',
    },
    {
      title: 'Kompozit Malzeme Analiz ve Test',
      content:
        'Kompozit malzemelerin mekanik, termal ve yapısal özelliklerini analiz ediyor, detaylı test ve karakterizasyon hizmetleri sunuyoruz. İleri analiz yöntemleri ile malzeme performansını optimize ediyoruz.',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="kompozit-page">
        <div className="banner-section">
          <div className="banner-overlay">
            <h1>Kompozit Teknolojileri</h1>
            <p>
              Yenilikçi kompozit malzeme çözümleri ile geleceğin teknolojilerini şekillendiriyoruz
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

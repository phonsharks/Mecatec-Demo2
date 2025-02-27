'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './optik.css'

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

export default function OptikPage() {
  const [openCards, setOpenCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const cardData = [
    {
      title: 'Özel Optik Bileşenler',
      content:
        'Müşterilerimizin ihtiyaçlarına özel olarak tasarlanan ve üretilen optik bileşenler sunuyoruz. Her türlü özel gereksinim için yüksek kaliteli çözümler üretiyoruz.',
    },
    {
      title: 'Dizayn Özel Tasarım ve Üretim',
      content:
        'Modern tasarım araçları ve ileri üretim teknolojileri ile müşterilerimizin özel projelerine uygun optik sistemler geliştiriyoruz.',
    },
    {
      title: 'Yüksek hassasiyetli Optikler ve Özel Kaplamalar',
      content:
        'Nanometre seviyesinde hassasiyetle üretilen optik bileşenler ve özel kaplama çözümleri sunuyoruz. En zorlu uygulamalar için bile maksimum performans sağlıyoruz.',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="optik-page">
        <div className="banner-section">
          <div className="banner-overlay">
            <h1>Optik Çözümler</h1>
            <p>Yüksek hassasiyetli optik bileşenler ve özel tasarım çözümler</p>
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

'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '../components/Navbar'
import './cozumler.css'

interface Solution {
  id: string
  title: string
  description: string
  image: {
    url: string
  }
  category: string
}

export default function CozumlerPage() {
  const [solutions, setSolutions] = useState<Solution[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        setLoading(true)
        const query = category ? `?where[category][equals]=${category}` : ''
        const response = await fetch(`/api/solutions${query}`)
        const data = await response.json()
        setSolutions(data.docs || [])
      } catch (error) {
        console.error('Çözümler yüklenirken hata:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSolutions()
  }, [category])

  const getCategoryTitle = () => {
    switch (category) {
      case 'automation':
        return 'Endüstriyel Otomasyon Çözümlerimiz'
      case 'service':
        return 'Teknik Servis Hizmetlerimiz'
      case 'training':
        return 'Eğitim & Danışmanlık Hizmetlerimiz'
      default:
        return 'Tüm Çözümlerimiz'
    }
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>{getCategoryTitle()}</h1>

        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : solutions.length === 0 ? (
          <div className="no-results">Bu kategoride henüz çözüm bulunmamaktadır.</div>
        ) : (
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-image">
                  <img src={solution.image?.url} alt={solution.title} />
                </div>
                <div className="solution-content">
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

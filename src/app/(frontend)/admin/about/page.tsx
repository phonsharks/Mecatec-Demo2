'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaLightbulb, FaHandshake, FaAward, FaUsers } from 'react-icons/fa'
import './about-admin.css'

const AboutAdmin = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    mission: {
      title: '',
      description: '',
    },
    vision: {
      title: '',
      description: '',
    },
    stats: {
      years: { value: '', label: '' },
      clients: { value: '', label: '' },
      countries: { value: '', label: '' },
      team: { value: '', label: '' },
    },
    values: [
      {
        title: '',
        description: '',
        icon: 'FaLightbulb',
      },
      {
        title: '',
        description: '',
        icon: 'FaHandshake',
      },
      {
        title: '',
        description: '',
        icon: 'FaAward',
      },
      {
        title: '',
        description: '',
        icon: 'FaUsers',
      },
    ],
    team: [
      {
        name: '',
        position: '',
        image: '',
      },
    ],
  })

  useEffect(() => {
    fetchAboutData()
  }, [])

  const fetchAboutData = async () => {
    try {
      const response = await fetch('/api/about')
      const data = await response.json()
      if (data) {
        setFormData(data)
      }
    } catch (error) {
      console.error('Error fetching about data:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/about', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Hakkımızda sayfası başarıyla güncellendi!')
      }
    } catch (error) {
      console.error('Error updating about data:', error)
      alert('Güncelleme sırasında bir hata oluştu.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: string,
    field?: string,
  ) => {
    const { name, value } = e.target

    if (section && field) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleStatsChange = (statKey: string, type: 'value' | 'label', value: string) => {
    setFormData((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        [statKey]: {
          ...prev.stats[statKey],
          [type]: value,
        },
      },
    }))
  }

  const handleValuesChange = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      values: prev.values.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  return (
    <div className="about-admin-container">
      <h1>Hakkımızda Sayfası Düzenleme</h1>
      <form onSubmit={handleSubmit} className="about-admin-form">
        <section className="form-section">
          <h2>Ana Bölüm</h2>
          <div className="form-group">
            <label>Başlık</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Alt Başlık</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Açıklama</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className="form-section">
          <h2>Misyon & Vizyon</h2>
          <div className="form-group">
            <label>Misyon Başlığı</label>
            <input
              type="text"
              value={formData.mission.title}
              onChange={(e) => handleChange(e, 'mission', 'title')}
              required
            />
          </div>
          <div className="form-group">
            <label>Misyon Açıklaması</label>
            <textarea
              value={formData.mission.description}
              onChange={(e) => handleChange(e, 'mission', 'description')}
              required
            />
          </div>
          <div className="form-group">
            <label>Vizyon Başlığı</label>
            <input
              type="text"
              value={formData.vision.title}
              onChange={(e) => handleChange(e, 'vision', 'title')}
              required
            />
          </div>
          <div className="form-group">
            <label>Vizyon Açıklaması</label>
            <textarea
              value={formData.vision.description}
              onChange={(e) => handleChange(e, 'vision', 'description')}
              required
            />
          </div>
        </section>

        <section className="form-section">
          <h2>İstatistikler</h2>
          {Object.entries(formData.stats).map(([key, stat]) => (
            <div key={key} className="stat-group">
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <div className="form-group">
                <label>Değer</label>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => handleStatsChange(key, 'value', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Etiket</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleStatsChange(key, 'label', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
        </section>

        <section className="form-section">
          <h2>Değerlerimiz</h2>
          {formData.values.map((value, index) => (
            <div key={index} className="value-group">
              <h3>Değer {index + 1}</h3>
              <div className="form-group">
                <label>Başlık</label>
                <input
                  type="text"
                  value={value.title}
                  onChange={(e) => handleValuesChange(index, 'title', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Açıklama</label>
                <textarea
                  value={value.description}
                  onChange={(e) => handleValuesChange(index, 'description', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
        </section>

        <button type="submit" className="submit-button">
          Değişiklikleri Kaydet
        </button>
      </form>
    </div>
  )
}

export default AboutAdmin

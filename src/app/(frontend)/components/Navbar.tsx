'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setMounted(true)
    // Tarayıcıda kaydedilmiş dil varsa onu kullan
    const savedLanguage = localStorage.getItem('i18nextLng')
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('i18nextLng', lng)
    document.documentElement.lang = lng
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          Mecatec
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link href="/optikler" className="nav-link" onClick={toggleMenu}>
            {t('nav.optics')}
          </Link>
          <Link href="/test-sistemleri" className="nav-link" onClick={toggleMenu}>
            {t('nav.testSystems')}
          </Link>
          <Link href="/kompozitler" className="nav-link" onClick={toggleMenu}>
            {t('nav.composites')}
          </Link>
          <Link href="/temsilciliklerimiz" className="nav-link" onClick={toggleMenu}>
            {t('nav.representatives')}
          </Link>
          <Link href="/kariyer" className="nav-link" onClick={toggleMenu}>
            {t('nav.career')}
          </Link>
          <Link href="/iletisim" className="nav-link" onClick={toggleMenu}>
            {t('nav.contact')}
          </Link>
          <Link href="/admin" className="nav-link">
            Admin
          </Link>
          <div className="nav-right">
            <div className="language-selector">
              <button
                onClick={() => changeLanguage('tr')}
                className={i18n.language === 'tr' ? 'active' : ''}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : ''}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-actions">
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={t('nav.menu')}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

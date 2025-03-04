'use client'

import React from 'react'
import Link from 'next/link'
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaGithub,
  FaMedium,
  FaWhatsapp,
} from 'react-icons/fa6'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Mecatec</h3>
          <p>{t('footer.slogan')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.services')}</h4>
          <Link href="/kompozitler" className="footer-link">
            {t('footer.composite')}
          </Link>
          <Link href="/optikler" className="footer-link">
            {t('footer.optical')}
          </Link>
          <Link href="/test-sistemleri" className="footer-link">
            {t('footer.testSystems')}
          </Link>
        </div>

        <div className="footer-section">
          <h4>{t('footer.corporate')}</h4>
          <Link href="/about" className="footer-link">
            {t('footer.about')}
          </Link>
          <Link href="/kariyer" className="footer-link">
            {t('footer.career')}
          </Link>
          <Link href="/blog" className="footer-link">
            {t('footer.blog')}
          </Link>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <p>Ankara, Türkiye</p>
          <p>{t('footer.email')}</p>
          <p>{t('footer.phone')}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} Mecatec. {t('footer.rights')}
          </p>

          <div className="social-links">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="social-link"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="social-link"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </Link>
          </div>

          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-link">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="footer-link">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

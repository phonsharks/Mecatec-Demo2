'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <Image
            src="/mecatec.png"
            alt="Mecatec Logo"
            width={180}
            height={60}
            priority
            quality={100}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-link" onClick={toggleMenu}>
            Ana Sayfa
          </Link>
          <Link href="/optik" className="nav-link" onClick={toggleMenu}>
            Optik
          </Link>
          <Link href="/test-sistemleri" className="nav-link" onClick={toggleMenu}>
            Test Sistemleri
          </Link>
          <Link href="/kompozit" className="nav-link" onClick={toggleMenu}>
            Kompozit
          </Link>
          <Link href="/temsilcilik" className="nav-link" onClick={toggleMenu}>
            Temsilciliklerimiz
          </Link>
          <Link href="/kariyer" className="nav-link" onClick={toggleMenu}>
            Kariyer
          </Link>
          <Link href="/iletisim" className="nav-link" onClick={toggleMenu}>
            İletişim
          </Link>
          <Link href="/admin" className="nav-link" onClick={toggleMenu}>
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

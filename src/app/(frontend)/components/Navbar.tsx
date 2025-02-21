import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Logo
        </Link>
        <div className="navbar-links">
          <Link href="/" className="nav-link">
            Ana Sayfa
          </Link>
          <Link href="/optikler" className="nav-link">
            Optikler
          </Link>
          <Link href="/test-sistemleri" className="nav-link">
            Test Sistemleri
          </Link>
          <Link href="/kompozitler" className="nav-link">
            Kompozitler
          </Link>
          <Link href="/temsilcilikler" className="nav-link">
            Temsilciliklerimiz
          </Link>
          <Link href="/kariyer" className="nav-link">
            Kariyer
          </Link>
          <Link href="/iletisim" className="nav-link">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

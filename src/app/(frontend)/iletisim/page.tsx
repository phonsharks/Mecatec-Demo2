import React from 'react'
import Navbar from '../components/Navbar'
import '../styles.css'
import './iletisim.css'

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <div className="iletisim-container">
        <h1>İletişim</h1>
        <div className="iletisim-grid">
          <div className="iletisim-card">
            <h2>Merkez Ofis</h2>
            <div className="iletisim-bilgileri">
              <div className="bilgi-grup">
                <h3>Adres</h3>
                <p>
                 
                  <br />
                 
                </p>
              </div>
              <div className="bilgi-grup">
                <h3>Telefon</h3>
                <p>
                  <a href="tel:+902121234567"></a>
                </p>
              </div>
              <div className="bilgi-grup">
                <h3>E-posta</h3>
                <p>
                  <a href="mailto:info@firmaniz.com"></a>
                </p>
              </div>
            </div>
            <div className="harita">
              <iframe
                src=""
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="iletisim-form-card">
            <h2>Bize Ulaşın</h2>
            <form className="iletisim-form">
              <div className="form-grup">
                <label htmlFor="isim">İsim Soyisim</label>
                <input type="text" id="isim" name="isim" required />
              </div>
              <div className="form-grup">
                <label htmlFor="email">E-posta</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-grup">
                <label htmlFor="konu">Konu</label>
                <input type="text" id="konu" name="konu" required />
              </div>
              <div className="form-grup">
                <label htmlFor="mesaj">Mesajınız</label>
                <textarea id="mesaj" name="mesaj" rows={5} required />
              </div>
              <button type="submit" className="gonder-button">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Navbar from '../components/Navbar'
import '../styles.css'
import './temsilcilikler.css'
import { Temsilcilik } from '@/payload-types'

export default async function TemsilciliklerPage() {
  const payload = await getPayload({ config })
  const { docs: temsilcilikler } = (await payload.find({
    collection: 'temsilcilikler',
    sort: 'siraNo',
  })) as { docs: Temsilcilik[] }

  const serializeRichText = (content: any) => {
    if (!content?.root?.children) return ''
    return content.root.children.map((node: any) => node.children?.[0]?.text || '').join('')
  }

  return (
    <>
      <Navbar />
      <div className="temsilcilikler-container">
        <h1>Temsilciliklerimiz</h1>
        <div className="temsilcilikler-grid">
          {temsilcilikler.map((temsilcilik) => (
            <div key={temsilcilik.id} className="temsilcilik-card">
              {temsilcilik.logo && (
                <img
                  src={temsilcilik.logo.url}
                  alt={temsilcilik.firmaAdi}
                  className="temsilcilik-logo"
                />
              )}
              <div className="temsilcilik-content">
                <h2>{temsilcilik.firmaAdi}</h2>
                <p className="ulke">{temsilcilik.ulke}</p>
                {temsilcilik.aciklama && (
                  <div className="temsilcilik-aciklama">
                    {serializeRichText(temsilcilik.aciklama)}
                  </div>
                )}
                {temsilcilik.websitesi && (
                  <a
                    href={temsilcilik.websitesi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    Web Sitesini Ziyaret Et
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

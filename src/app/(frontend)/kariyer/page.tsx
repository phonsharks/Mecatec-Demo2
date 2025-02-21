import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Navbar from '../components/Navbar'
import '../styles.css'
import './kariyer.css'
import { KariyerIlani } from '@/payload-types'

export default async function KariyerPage() {
  const payload = await getPayload({ config })
  const { docs: ilanlar } = (await payload.find({
    collection: 'kariyer',
    where: {
      aktif: {
        equals: true,
      },
    },
  })) as { docs: KariyerIlani[] }

  const serializeRichText = (content: any) => {
    if (!content?.root?.children) return ''
    return content.root.children.map((node: any) => node.children?.[0]?.text || '').join('')
  }

  return (
    <>
      <Navbar />
      <div className="kariyer-container">
        <h1>Kariyer Fırsatları</h1>
        <div className="ilanlar-grid">
          {ilanlar.map((ilan) => (
            <div key={ilan.id} className="ilan-card">
              <h2>{ilan.pozisyon}</h2>
              <div className="departman">{ilan.departman}</div>
              <div className="ilan-aciklama">{serializeRichText(ilan.aciklama)}</div>
              {ilan.gereksinimler && ilan.gereksinimler.length > 0 && (
                <div className="gereksinimler">
                  <h3>Aranan Nitelikler</h3>
                  <ul>
                    {ilan.gereksinimler.map((gereksinim) => (
                      <li key={gereksinim.id}>{gereksinim.gereksinim}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="basvur-button">Başvur</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

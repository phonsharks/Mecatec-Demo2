import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Navbar from '../components/Navbar'
import '../styles.css'
import './optikler.css'
import { Optik } from '@/payload-types'

export default async function OptiklerPage() {
  const payload = await getPayload({ config })
  const { docs: optikler } = (await payload.find({
    collection: 'optikler',
    sort: 'siraNo',
  })) as { docs: Optik[] }

  const serializeRichText = (content: any) => {
    if (!content?.root?.children) return ''
    return content.root.children.map((node: any) => node.children?.[0]?.text || '').join('')
  }

  return (
    <>
      <Navbar />
      <div className="optikler-container">
        <h1>Optik Ürünlerimiz</h1>
        <div className="optikler-grid">
          {optikler.map((optik) => (
            <div key={optik.id} className="optik-card">
              {optik.resim && (
                <img
                  src={optik.resim.url}
                  alt={optik.resim.alt || optik.baslik}
                  className="optik-image"
                />
              )}
              <h2>{optik.baslik}</h2>
              <div className="optik-aciklama">{serializeRichText(optik.aciklama)}</div>
              {optik.teknikOzellikler && optik.teknikOzellikler.length > 0 && (
                <ul className="optik-ozellikler">
                  {optik.teknikOzellikler.map((ozellik) => (
                    <li key={ozellik.id}>{ozellik.ozellik}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Navbar from '../components/Navbar'
import '../styles.css'
import './kompozitler.css'
import { Kompozit } from '@/payload-types'

export default async function KompozitlerPage() {
  const payload = await getPayload({ config })
  const { docs: kompozitler } = (await payload.find({
    collection: 'kompozitler',
    sort: 'siraNo',
  })) as { docs: Kompozit[] }

  const serializeRichText = (content: any) => {
    if (!content?.root?.children) return ''
    return content.root.children.map((node: any) => node.children?.[0]?.text || '').join('')
  }

  return (
    <>
      <Navbar />
      <div className="kompozitler-container">
        <h1>Kompozit Ürünlerimiz</h1>
        <div className="kompozitler-grid">
          {kompozitler.map((kompozit) => (
            <div key={kompozit.id} className="kompozit-card">
              {kompozit.resim && (
                <img
                  src={kompozit.resim.url}
                  alt={kompozit.resim.alt || kompozit.baslik}
                  className="kompozit-image"
                />
              )}
              <h2>{kompozit.baslik}</h2>
              <div className="kompozit-aciklama">{serializeRichText(kompozit.aciklama)}</div>
              {kompozit.ozellikler && kompozit.ozellikler.length > 0 && (
                <ul className="kompozit-ozellikler">
                  {kompozit.ozellikler.map((ozellik) => (
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

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Navbar from '../components/Navbar'
import '../styles.css'
import './test-sistemleri.css'
import { TestSistemi } from '@/payload-types'

export default async function TestSistemleriPage() {
  const payload = await getPayload({ config })
  const { docs: sistemler } = await payload.find({
    collection: 'test-sistemleri',
    sort: 'siraNo',
  }) as { docs: TestSistemi[] }

  const serializeRichText = (content: any) => {
    if (!content?.root?.children) return ''
    return content.root.children
      .map((node: any) => node.children?.[0]?.text || '')
      .join('')
  }

  return (
    <>
      <Navbar />
      <div className="test-sistemleri-container">
        <h1>Test Sistemlerimiz</h1>
        <div className="sistemler-grid">
          {sistemler.map((sistem) => (
            <div key={sistem.id} className="sistem-card">
              {sistem.resim && (
                <img
                  src={sistem.resim.url}
                  alt={sistem.resim.alt || sistem.baslik}
                  className="sistem-image"
                />
              )}
              <h2>{sistem.baslik}</h2>
              <div className="sistem-aciklama">
                {serializeRichText(sistem.aciklama)}
              </div>
              {sistem.ozellikler && sistem.ozellikler.length > 0 && (
                <ul className="sistem-ozellikler">
                  {sistem.ozellikler.map((ozellik) => (
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
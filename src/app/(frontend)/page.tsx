import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import Navbar from './components/Navbar'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="content">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          </picture>

          {user && <h1>Hoşgeldiniz, {user.email}</h1>}
          <div className="links">
            <a
              className="admin"
              href={payloadConfig.routes.admin}
              rel="noopener noreferrer"
              target="_blank"
            >
              Admin paneline git
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

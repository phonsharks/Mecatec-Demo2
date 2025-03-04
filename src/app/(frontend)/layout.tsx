import React from 'react'
import './styles.css'
import { homeMetadata } from './metadata'

export const metadata = homeMetadata

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

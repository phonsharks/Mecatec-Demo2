'use client'

import { ReactNode, useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './config'

interface I18nProviderProps {
  children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Tarayıcı dilini al
    const browserLang = navigator.language.split('-')[0]
    // Desteklenen diller
    const supportedLangs = ['tr', 'en']
    // Varsayılan dil veya tarayıcı dili
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'tr'

    // localStorage'dan kaydedilmiş dil tercihi varsa onu kullan
    const savedLang = localStorage.getItem('i18nextLng')
    const initialLang = savedLang || defaultLang

    i18n.changeLanguage(initialLang)

    // HTML lang attribute'unu güncelle
    document.documentElement.lang = initialLang
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // veya bir loading component
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

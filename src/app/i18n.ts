import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationTR from './i18n/locales/tr/translation.json'
import translationEN from './i18n/locales/en/translation.json'

const resources = {
  tr: {
    translation: translationTR,
  },
  en: {
    translation: translationEN,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import englishTrans from './locales/en/translation.json'
import frenchTrans from './locales/fr/translation.json'
import spanishTrans from './locales/es/translation.json'
import portugueseTrans from './locales/pt/translation.json'
import { defaultLanguage, fallbackLanguage } from './i18nextConfig'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: englishTrans,
      },
      fr: {
        translation: frenchTrans,
      },
      es: {
        translation: spanishTrans,
      },
      pt: {
        translation: portugueseTrans,
      },
    },
    lng: defaultLanguage, // if you're using a language detector, do not define the lng option
    fallbackLng: fallbackLanguage,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    debug: true,
  })

export default i18n

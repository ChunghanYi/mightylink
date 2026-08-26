import { createI18n } from 'vue-i18n'
import ko from './locales/ko.js'
import en from './locales/en.js'

const STORAGE_KEY = 'mightylink-lang'
const browserLang = navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en'
const savedLang = localStorage.getItem(STORAGE_KEY)
const initialLang = savedLang === 'ko' || savedLang === 'en' ? savedLang : browserLang

export const i18n = createI18n({
  legacy: false,
  locale: initialLang,
  fallbackLocale: 'en',
  messages: { ko, en },
})

export function setLocale(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang
}

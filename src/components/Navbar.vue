<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n.js'
import logoIcon from '../assets/images/logo-icon.png'

const { t, locale } = useI18n()
const open = ref(false)

function toggleLang() {
  setLocale(locale.value === 'ko' ? 'en' : 'ko')
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" class="flex items-center gap-2">
        <img :src="logoIcon" alt="MightyLink" class="h-8 w-auto" />
        <span class="text-lg font-bold tracking-tight text-slate-900">MightyLink</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a href="#company" class="text-sm font-medium text-slate-600 hover:text-slate-900">{{ t('nav.company') }}</a>
        <a href="#mightysg" class="text-sm font-medium text-slate-600 hover:text-slate-900">{{ t('nav.mightysg') }}</a>
        <a href="#mightyconnect" class="text-sm font-medium text-slate-600 hover:text-slate-900">{{ t('nav.mightyconnect') }}</a>
        <a href="#devices" class="text-sm font-medium text-slate-600 hover:text-slate-900">{{ t('nav.devices') }}</a>
        <a href="#contact" class="text-sm font-medium text-slate-600 hover:text-slate-900">{{ t('nav.contact') }}</a>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="toggleLang"
          class="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-blue-400 hover:text-blue-600"
        >
          {{ locale === 'ko' ? 'EN' : '한국어' }}
        </button>
        <a
          href="#contact"
          class="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90 sm:inline-block"
        >
          {{ t('nav.contact') }}
        </a>
        <button
          type="button"
          class="text-slate-600 md:hidden"
          @click="open = !open"
          aria-label="menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-3 md:hidden">
      <a href="#company" class="py-2 text-sm font-medium text-slate-600" @click="open = false">{{ t('nav.company') }}</a>
      <a href="#mightysg" class="py-2 text-sm font-medium text-slate-600" @click="open = false">{{ t('nav.mightysg') }}</a>
      <a href="#mightyconnect" class="py-2 text-sm font-medium text-slate-600" @click="open = false">{{ t('nav.mightyconnect') }}</a>
      <a href="#devices" class="py-2 text-sm font-medium text-slate-600" @click="open = false">{{ t('nav.devices') }}</a>
      <a href="#contact" class="py-2 text-sm font-medium text-slate-600" @click="open = false">{{ t('nav.contact') }}</a>
    </div>
  </header>
</template>

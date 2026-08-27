<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n.js'
import { useTheme } from '../theme.js'
import logoIcon from '../assets/images/logo-icon.png'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()
const open = ref(false)

function toggleLang() {
  setLocale(locale.value === 'ko' ? 'en' : 'ko')
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur transition-colors duration-300">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" class="flex items-center gap-2.5">
        <img :src="logoIcon" alt="MightyLink" class="h-10 md:h-11 w-auto object-contain" />
        <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">MightyLink</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a href="#company" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('nav.company') }}</a>
        <a href="#mightysg" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('nav.mightysg') }}</a>
        <a href="#mightyconnect" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('nav.mightyconnect') }}</a>
        <a href="#devices" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('nav.devices') }}</a>
        <a href="#contact" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{{ t('nav.contact') }}</a>
      </div>

      <div class="flex items-center gap-2.5 sm:gap-3">
        <!-- Light / Dark Theme Toggle Button -->
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? (locale === 'ko' ? '밝은 화면(라이트 모드)으로 전환' : 'Switch to Light Mode') : (locale === 'ko' ? '어두운 화면(다크 모드)으로 전환' : 'Switch to Dark Mode')"
          class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 shadow-xs transition-all active:scale-95"
        >
          <!-- Moon icon (when in light mode) -->
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Sun icon (when in dark mode) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Language Switcher Button -->
        <button
          type="button"
          @click="toggleLang"
          class="rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 shadow-xs transition-all active:scale-95"
        >
          {{ locale === 'ko' ? 'EN' : '한국어' }}
        </button>

        <a
          href="#contact"
          class="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-sm font-semibold text-white shadow-xs hover:opacity-90 active:scale-95 sm:inline-block transition-all"
        >
          {{ t('nav.contact') }}
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white md:hidden transition-colors"
          @click="open = !open"
          aria-label="menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur px-6 py-3 md:hidden transition-colors">
      <a href="#company" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" @click="open = false">{{ t('nav.company') }}</a>
      <a href="#mightysg" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" @click="open = false">{{ t('nav.mightysg') }}</a>
      <a href="#mightyconnect" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" @click="open = false">{{ t('nav.mightyconnect') }}</a>
      <a href="#devices" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" @click="open = false">{{ t('nav.devices') }}</a>
      <a href="#contact" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" @click="open = false">{{ t('nav.contact') }}</a>
    </div>
  </header>
</template>

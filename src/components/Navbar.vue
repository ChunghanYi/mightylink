<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n.js'
import { useTheme } from '../theme.js'
import logoIcon from '../assets/images/logo-icon.png'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()
const mobileMenuOpen = ref(false)
const isProductsOpen = ref(false)
const isMobileProductsOpen = ref(true)
const dropdownRef = ref(null)
let closeTimer = null

const productItems = [
  {
    id: 'mightysg',
    nameKey: 'nav.mightysg',
    descKey: 'nav.mightysgDesc',
    href: '#mightysg',
    badge: 'AI Gateway',
    colorClasses: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-cyan-300',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    id: 'mightyconnect',
    nameKey: 'nav.mightyconnect',
    descKey: 'nav.mightyconnectDesc',
    href: '#mightyconnect',
    badge: 'P2P Network',
    colorClasses: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400',
    iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
  },
  {
    id: 'mightyxddos',
    nameKey: 'nav.mightyxddos',
    descKey: 'nav.mightyxddosDesc',
    href: '#mightyxddos',
    badge: 'DDoS Defense',
    colorClasses: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

function toggleLang() {
  setLocale(locale.value === 'ko' ? 'en' : 'ko')
}

function handleNavClick() {
  mobileMenuOpen.value = false
  isProductsOpen.value = false
}

function openDropdown() {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  isProductsOpen.value = true
}

function closeDropdown() {
  closeTimer = setTimeout(() => {
    isProductsOpen.value = false
  }, 180)
}

function toggleDropdown() {
  isProductsOpen.value = !isProductsOpen.value
}

function handleOutsideClick(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isProductsOpen.value = false
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    isProductsOpen.value = false
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleOutsideClick)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleOutsideClick)
  window.removeEventListener('keydown', handleKeydown)
  if (closeTimer) clearTimeout(closeTimer)
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur transition-colors duration-300">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" @click="handleNavClick" class="flex shrink-0 items-center gap-2.5">
        <img :src="logoIcon" alt="MightyLink Lab." class="h-10 md:h-11 w-auto object-contain" />
        <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors whitespace-nowrap">MightyLink Lab.</span>
      </a>

      <!-- Desktop Nav Links -->
      <div class="hidden items-center gap-6 lg:gap-8 md:flex">
        <a href="#company" @click="handleNavClick" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">{{ t('nav.company') }}</a>
        
        <!-- Products Dropdown (List Control) -->
        <div
          ref="dropdownRef"
          class="relative"
          @mouseenter="openDropdown"
          @mouseleave="closeDropdown"
        >
          <button
            type="button"
            @click="toggleDropdown"
            class="flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer select-none"
            :class="isProductsOpen ? 'text-blue-600 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'"
            aria-haspopup="true"
            :aria-expanded="isProductsOpen"
          >
            <span>{{ t('nav.products') }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180 text-blue-600 dark:text-cyan-400': isProductsOpen, 'text-slate-400': !isProductsOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Popover Card -->
          <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 translate-y-1 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-1 scale-95"
          >
            <div
              v-if="isProductsOpen"
              class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 sm:w-96 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-950/15 p-2 z-50"
            >
              <div class="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {{ locale === 'ko' ? '제품 라인업' : 'Product Lineup' }}
              </div>
              <div class="space-y-1">
                <a
                  v-for="item in productItems"
                  :key="item.id"
                  :href="item.href"
                  @click="handleNavClick"
                  class="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all"
                >
                  <div :class="['flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105', item.colorClasses]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="item.iconPath" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                        {{ t(item.nameKey) }}
                      </span>
                      <span class="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {{ item.badge }}
                      </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug line-clamp-1">
                      {{ t(item.descKey) }}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 mt-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </transition>
        </div>

        <a href="#devices" @click="handleNavClick" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">{{ t('nav.devices') }}</a>
        <a href="#blog" @click="handleNavClick" class="text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
          <span>{{ t('nav.blog') }}</span>
          <span class="inline-flex items-center rounded-full bg-blue-100 dark:bg-cyan-900/60 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:text-cyan-300">NEW</span>
        </a>
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
          class="rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 shadow-xs transition-all active:scale-95 whitespace-nowrap"
        >
          {{ locale === 'ko' ? 'EN' : '한국어' }}
        </button>

        <a
          href="#contact"
          class="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-sm font-semibold text-white shadow-xs hover:opacity-90 active:scale-95 sm:inline-block transition-all whitespace-nowrap"
        >
          {{ t('nav.contact') }}
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white md:hidden transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Drawer -->
    <div v-if="mobileMenuOpen" class="flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur px-6 py-3 md:hidden transition-colors">
      <a href="#company" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white whitespace-nowrap" @click="handleNavClick">{{ t('nav.company') }}</a>
      
      <!-- Mobile Products Accordion -->
      <div class="py-1">
        <button
          type="button"
          @click="isMobileProductsOpen = !isMobileProductsOpen"
          class="flex w-full items-center justify-between py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
        >
          <span class="whitespace-nowrap">{{ t('nav.products') }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 transition-transform duration-200 text-slate-400"
            :class="{ 'rotate-180': isMobileProductsOpen }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="isMobileProductsOpen" class="ml-2 mt-1 space-y-1 border-l-2 border-slate-200 dark:border-slate-800 pl-3">
          <a
            v-for="item in productItems"
            :key="item.id"
            :href="item.href"
            @click="handleNavClick"
            class="flex items-center justify-between py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            <span class="whitespace-nowrap">{{ t(item.nameKey) }}</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-normal whitespace-nowrap">{{ item.badge }}</span>
          </a>
        </div>
      </div>

      <a href="#devices" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white whitespace-nowrap" @click="handleNavClick">{{ t('nav.devices') }}</a>
      <a href="#blog" class="py-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 flex items-center justify-between whitespace-nowrap" @click="handleNavClick">
        <span>{{ t('nav.blog') }}</span>
        <span class="inline-flex items-center rounded-full bg-blue-100 dark:bg-cyan-900/60 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:text-cyan-300">NEW</span>
      </a>
      <a href="#contact" class="py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white whitespace-nowrap" @click="handleNavClick">{{ t('nav.contact') }}</a>
    </div>
  </header>
</template>

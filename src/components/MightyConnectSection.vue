<script setup>
import { useI18n } from 'vue-i18n'
import connectImg from '../assets/images/mightyconnect.png'
const { t } = useI18n()

const features = [
  {
    key: 'feat1',
    tag: 'Quantum-Safe Tunnel',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/80',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    tagBg: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200/80 dark:border-cyan-800',
  },
  {
    key: 'feat2',
    tag: 'Dual ZTNA Engine',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
    bgColor: 'bg-blue-50 dark:bg-blue-950/80',
    textColor: 'text-blue-600 dark:text-cyan-400',
    tagBg: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-cyan-300 border-blue-200/80 dark:border-blue-800',
  },
  {
    key: 'feat3',
    tag: 'NAT Hole Punching',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/80',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    tagBg: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800',
  },
  {
    key: 'feat4',
    tag: 'Zero-Knowledge Relay',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    bgColor: 'bg-sky-50 dark:bg-sky-950/80',
    textColor: 'text-sky-600 dark:text-sky-400',
    tagBg: 'bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800',
  },
  {
    key: 'feat5',
    tag: 'DPDK & VPP Vector Engine',
    icon: 'M13 5l7 7-7 7M5 5l7 7-7 7',
    bgColor: 'bg-purple-50 dark:bg-purple-950/80',
    textColor: 'text-purple-600 dark:text-purple-400',
    tagBg: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800',
  },
  {
    key: 'feat6',
    tag: 'Fine-Grained Access Rules',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgColor: 'bg-teal-50 dark:bg-teal-950/80',
    textColor: 'text-teal-600 dark:text-teal-400',
    tagBg: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800',
  },
]
</script>

<template>
  <section id="mightyconnect" class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 py-24 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Top Hero Card -->
      <div v-reveal class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 md:p-12 shadow-sm dark:shadow-black/40">
        <div class="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div class="max-w-2xl">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {{ t('mightyconnect.tag') }}
              </span>
              <span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                Mesh P2P Platform
              </span>
            </div>

            <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              <span class="text-pink-600 dark:text-pink-400">{{ t('mightyconnect.title') }}</span>
              <span class="text-slate-300 dark:text-slate-700 mx-2 font-light">/</span>
              <span>{{ t('mightyconnect.subtitle') }}</span>
            </h2>

            <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('mightyconnect.desc') }}
            </p>
          </div>

          <div class="relative shrink-0">
            <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-70"></div>
            <img
              :src="connectImg"
              alt="MightyConnect Architecture"
              class="relative h-36 w-36 rounded-2xl bg-white dark:bg-slate-800 object-contain p-4 shadow-md ring-1 ring-slate-200/80 dark:ring-slate-700 md:h-44 md:w-44"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <!-- 6 Core Feature Cards Grid -->
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, idx) in features"
          v-reveal
          :key="item.key"
          :style="{ transitionDelay: `${idx * 60}ms` }"
          class="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 shadow-xs transition-all duration-200 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/5"
        >
          <div>
            <div class="flex items-center justify-between">
              <div :class="['flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:scale-105', item.bgColor, item.textColor]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                </svg>
              </div>
              <span :class="['rounded-full border px-2.5 py-0.5 text-[11px] font-semibold', item.tagBg]">
                {{ item.tag }}
              </span>
            </div>

            <h3 class="mt-5 text-lg font-bold tracking-tight text-slate-900 dark:text-white break-keep">
              {{ t(`mightyconnect.${item.key}title`) }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t(`mightyconnect.${item.key}desc`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- MightyConnect Mesh Ecosystem Banner Card -->
      <div v-reveal class="mt-10 rounded-3xl border border-cyan-900/40 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-8 md:p-10 text-white shadow-xl">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 mb-3">
              Mesh Network Architecture
            </div>
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white break-keep">
              🌐 {{ t('mightyconnect.bannerTitle') }}
            </h3>
            <p class="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed break-keep">
              {{ t('mightyconnect.bannerDesc') }}
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <span class="rounded-full bg-cyan-500/10 border border-cyan-400/30 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-xs">
              ⚡ Auto-Provisioning
            </span>
            <span class="rounded-full bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-xs">
              🛡️ Quantum-Safe ML-KEM
            </span>
            <span class="rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-xs">
              🔗 Mesh Direct Connect
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Open Source Notice -->
      <div class="mt-8 flex items-center gap-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="break-keep">{{ t('mightyconnect.oss') }}</span>
      </div>
    </div>
  </section>
</template>

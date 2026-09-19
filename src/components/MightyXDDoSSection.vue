<script setup>
import { useI18n } from 'vue-i18n'
import xddosImg from '../assets/images/mightyxddos.png'
import scrubberImg from '../assets/images/ddos_mitigator_light_theme.png'
const { t } = useI18n()

const features = [
  {
    key: 'feat1',
    tag: 'Detection Engine',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    bgColor: 'bg-rose-50 dark:bg-rose-950/80',
    textColor: 'text-rose-600 dark:text-rose-400',
    tagBg: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800',
  },
  {
    key: 'feat2',
    tag: 'AI Learning Loop',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    bgColor: 'bg-amber-50 dark:bg-amber-950/80',
    textColor: 'text-amber-600 dark:text-amber-400',
    tagBg: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800',
  },
  {
    key: 'feat3',
    tag: 'Anti-Spoofing Challenge',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/80',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    tagBg: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800',
  },
  {
    key: 'feat4',
    tag: 'Traffic Control & Shaping',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/80',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    tagBg: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200/80 dark:border-cyan-800',
  },
  {
    key: 'feat5',
    tag: 'L2 Defense & CAM Protection',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/80',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    tagBg: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800',
  },
  {
    key: 'feat6',
    tag: 'BGP Upstream Offloading',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z',
    bgColor: 'bg-purple-50 dark:bg-purple-950/80',
    textColor: 'text-purple-600 dark:text-purple-400',
    tagBg: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800',
  },
]
</script>

<template>
  <section id="mightyxddos" class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 py-24 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Top Hero Card -->
      <div v-reveal class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 md:p-12 shadow-sm dark:shadow-black/40">
        <div class="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div class="max-w-2xl flex-1">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                {{ t('mightyxddos.tag') }}
              </span>
              <span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                Inline Security Bridge
              </span>
            </div>

            <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              <span class="text-pink-600 dark:text-pink-400">{{ t('mightyxddos.title') }}</span>
              <span class="text-slate-300 dark:text-slate-700 mx-2 font-light">/</span>
              <span>{{ t('mightyxddos.subtitle') }}</span>
            </h2>

            <div class="mt-2 text-sm font-bold text-rose-600 dark:text-rose-400 tracking-wide">
              ⚡ {{ t('mightyxddos.slogan') }}
            </div>

            <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('mightyxddos.desc') }}
            </p>
          </div>

          <!-- MightyXDDoS Visual Card (Unified Size matching AISG and Connect) -->
          <div class="relative shrink-0 w-full lg:w-72 xl:w-80">
            <div class="overflow-hidden rounded-2xl border border-rose-500/30 dark:border-rose-500/40 bg-slate-950 shadow-lg shadow-rose-900/10 group">
              <div class="relative h-44 w-full bg-white dark:bg-slate-900/90 flex items-center justify-center p-3 overflow-hidden">
                <img
                  :src="xddosImg"
                  alt="MightyXDDoS Mitigator"
                  class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="px-3.5 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <span class="font-semibold text-rose-300 flex items-center gap-1.5">
                  <span class="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                  MightyXDDoS Mitigator
                </span>
                <span class="text-[11px] text-slate-400 font-mono">VPP & XDP Bridge</span>
              </div>
            </div>
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
          class="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 shadow-xs transition-all duration-200 hover:border-rose-400 dark:hover:border-rose-500/50 hover:shadow-md hover:shadow-rose-500/5"
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
              {{ t(`mightyxddos.${item.key}title`) }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t(`mightyxddos.${item.key}desc`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- MightyXDDoS Ecosystem Architecture Banner Card -->
      <div v-reveal class="mt-10 rounded-3xl border border-rose-900/40 bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 p-8 md:p-10 text-white shadow-xl">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div class="max-w-2xl flex-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-400/30 mb-3">
              High-Performance Inline DDoS Defense Architecture
            </div>
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white break-keep">
              🛡️ {{ t('mightyxddos.bannerTitle') }}
            </h3>
            <p class="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed break-keep">
              {{ t('mightyxddos.bannerDesc') }}
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <span class="rounded-full bg-rose-500/15 border border-rose-400/30 px-3.5 py-1.5 text-xs font-semibold text-rose-300 shadow-xs">
              ⚡ FD.io VPP & eBPF XDP
            </span>
            <span class="rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-xs">
              📦 Auto Attack PCAP Capture
            </span>
            <span class="rounded-full bg-amber-500/15 border border-amber-400/30 px-3.5 py-1.5 text-xs font-semibold text-amber-300 shadow-xs">
              📊 Prometheus & CEF to SIEM
            </span>
          </div>
        </div>
      </div>

      <!-- DDoS Mitigator & Inline Traffic Scrubber Conceptual Diagram -->
      <div v-reveal class="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 sm:p-5 shadow-sm dark:shadow-black/40 transition-colors">
        <div class="relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white flex items-center justify-center p-2 sm:p-4">
          <img
            :src="scrubberImg"
            alt="DDoS Mitigator and Inline Traffic Scrubber Architecture"
            class="w-full h-auto max-h-[520px] object-contain rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <!-- Bottom Open Source Notice -->
      <div class="mt-8 flex items-center gap-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="break-keep">{{ t('mightyxddos.oss') }}</span>
      </div>
    </div>
  </section>
</template>

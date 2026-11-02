<script setup>
import { useI18n } from 'vue-i18n'
import adcImg from '../assets/images/mightyxddos_lb.png'
import adcArchImg from '../assets/images/mighty_adc_light_theme.png'

const { t } = useI18n()

const features = [
  {
    key: 'feat1',
    tag: 'Pre-ADC DDoS & SYN Guard',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgColor: 'bg-rose-50 dark:bg-rose-950/80',
    textColor: 'text-rose-600 dark:text-rose-400',
    tagBg: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800',
  },
  {
    key: 'feat2',
    tag: '6-Mode L4 & Maglev Hash',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/80',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    tagBg: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800',
  },
  {
    key: 'feat3',
    tag: 'HAProxy L7 & Auto-ACME',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    bgColor: 'bg-teal-50 dark:bg-teal-950/80',
    textColor: 'text-teal-600 dark:text-teal-400',
    tagBg: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800',
  },
  {
    key: 'feat4',
    tag: 'XDP LAN Bridge & HA',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/80',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    tagBg: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200/80 dark:border-cyan-800',
  },
  {
    key: 'feat5',
    tag: 'Multi-LLM & P2C Failover',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    bgColor: 'bg-blue-50 dark:bg-blue-950/80',
    textColor: 'text-blue-600 dark:text-cyan-400',
    tagBg: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-cyan-300 border-blue-200/80 dark:border-blue-800',
  },
  {
    key: 'feat6',
    tag: 'SHA-256 Key & Budget Quota',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/80',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    tagBg: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800',
  },
  {
    key: 'feat7',
    tag: 'DLP Presets & Guardrails',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    bgColor: 'bg-purple-50 dark:bg-purple-950/80',
    textColor: 'text-purple-600 dark:text-purple-400',
    tagBg: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800',
  },
  {
    key: 'feat8',
    tag: 'MCP · A2A & XDP Quarantine',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    bgColor: 'bg-amber-50 dark:bg-amber-950/80',
    textColor: 'text-amber-600 dark:text-amber-400',
    tagBg: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800',
  },
]
</script>

<template>
  <section id="mightyadc" class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 py-24 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Top Hero Card -->
      <div v-reveal class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 md:p-12 shadow-sm dark:shadow-black/40">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {{ t('mightyadc.tag') }}
            </span>
            <span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
              {{ t('mightyadc.badge') }}
            </span>
          </div>

          <h2 class="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl lg:whitespace-nowrap">
            <span class="text-pink-600 dark:text-pink-400">{{ t('mightyadc.title') }}</span>
            <span class="text-slate-300 dark:text-slate-700 mx-2 font-light">/</span>
            <span>{{ t('mightyadc.subtitle') }}</span>
          </h2>

          <div class="mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-wide">
            ⚡ {{ t('mightyadc.slogan') }}
          </div>
        </div>

        <div class="mt-6 flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          <div class="flex-1">
            <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('mightyadc.desc') }}
            </p>
          </div>

          <!-- MightyADC Visual Card (2/3 Compact Unified Size) -->
          <div class="relative shrink-0 w-48 sm:w-52 lg:w-48 xl:w-52">
            <div class="overflow-hidden rounded-xl border border-emerald-500/30 dark:border-emerald-500/40 bg-slate-950 shadow-md shadow-emerald-900/10 group">
              <div class="relative h-28 sm:h-30 w-full bg-white dark:bg-slate-900/90 flex items-center justify-center p-2 overflow-hidden">
                <img
                  :src="adcImg"
                  alt="MightyADC - DDoS Mitigator, L4/L7 Load Balancer & AI Gateway"
                  class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="px-2.5 py-1.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span class="font-semibold text-emerald-300 flex items-center gap-1">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  MightyADC
                </span>
                <span class="text-[10px] text-slate-400 font-mono">LB + AI GW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 8 Consolidated Core Feature Cards Grid -->
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, idx) in features"
          v-reveal
          :key="item.key"
          :style="{ transitionDelay: `${idx * 60}ms` }"
          class="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 shadow-xs transition-all duration-200 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-md hover:shadow-emerald-500/5"
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
              {{ t(`mightyadc.${item.key}title`) }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t(`mightyadc.${item.key}desc`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- MightyADC Unified Ecosystem Architecture Banner Card -->
      <div v-reveal class="mt-10 rounded-3xl border border-emerald-900/40 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 p-8 md:p-10 text-white shadow-xl">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div class="max-w-2xl flex-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3 whitespace-nowrap">
              Unified DDoS · L4/L7 LB · AI Gateway Architecture
            </div>
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white break-keep">
              🛡️ {{ t('mightyadc.bannerTitle') }}
            </h3>
            <p class="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed break-keep">
              {{ t('mightyadc.bannerDesc') }}
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <span class="rounded-full bg-rose-500/15 border border-rose-400/30 px-3.5 py-1.5 text-xs font-semibold text-rose-300 shadow-xs">
              🛡️ VIP SYN Guard & Pre-ADC DDoS
            </span>
            <span class="rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-xs">
              ⚡ 6-Mode Maglev L4 & HTTP/3 L7
            </span>
            <span class="rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-xs">
              🤖 Multi-LLM · MCP · A2A & DLP
            </span>
          </div>
        </div>
      </div>

      <!-- MightyADC Unified Conceptual Architecture Diagram (1 Unified Image) -->
      <div v-reveal class="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 sm:p-5 shadow-sm dark:shadow-black/40 transition-colors">
        <div class="relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white flex items-center justify-center p-2 sm:p-4">
          <img
            :src="adcArchImg"
            alt="MightyADC - DDoS Mitigator, L4/L7 Load Balancer & AI Gateway Architecture"
            class="w-full h-auto max-h-[520px] object-contain rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <!-- Bottom Open Source Notice -->
      <div class="mt-8 flex items-center gap-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="break-keep">{{ t('mightyadc.oss') }}</span>
      </div>
    </div>
  </section>
</template>

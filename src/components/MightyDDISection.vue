<script setup>
import { useI18n } from 'vue-i18n'
import ddiImg from '../assets/images/mightyddi.png'
import ddiArchImg from '../assets/images/mighty_ddi_light_theme.png'

const { t } = useI18n()

const features = [
  {
    key: 'feat1',
    tag: 'DHCP & IPAM Platform',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/80',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    tagBg: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800',
  },
  {
    key: 'feat2',
    tag: 'DNS Server & Sinkhole',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    bgColor: 'bg-sky-50 dark:bg-sky-950/80',
    textColor: 'text-sky-600 dark:text-sky-400',
    tagBg: 'bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800',
  },
  {
    key: 'feat3',
    tag: 'Deception Honeypot',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    bgColor: 'bg-amber-50 dark:bg-amber-950/80',
    textColor: 'text-amber-600 dark:text-amber-400',
    tagBg: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800',
  },
  {
    key: 'feat4',
    tag: 'TLS Fingerprint (Mode #1)',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
    bgColor: 'bg-purple-50 dark:bg-purple-950/80',
    textColor: 'text-purple-600 dark:text-purple-400',
    tagBg: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800',
  },
  {
    key: 'feat5',
    tag: 'DDoS Defense (Mode #2)',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgColor: 'bg-rose-50 dark:bg-rose-950/80',
    textColor: 'text-rose-600 dark:text-rose-400',
    tagBg: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800',
  },
  {
    key: 'feat6',
    tag: 'eBPF XDP ACL',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/80',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    tagBg: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800',
  },
]
</script>

<template>
  <section id="mightyddi" class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 py-24 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Top Hero Card -->
      <div v-reveal class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 md:p-12 shadow-sm dark:shadow-black/40">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {{ t('mightyddi.tag') }}
            </span>
            <span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
              {{ t('mightyddi.badge') }}
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-950/90 px-3 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700/80 shadow-2xs">
              <span class="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              {{ t('mightyddi.status') }}
            </span>
          </div>

          <h2 class="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl lg:whitespace-nowrap">
            <span class="text-pink-600 dark:text-pink-400">{{ t('mightyddi.title') }}</span>
            <span class="text-slate-300 dark:text-slate-700 mx-2 font-light">/</span>
            <span>{{ t('mightyddi.subtitle') }}</span>
          </h2>

          <div class="mt-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">
            ⚡ {{ t('mightyddi.slogan') }}
          </div>
        </div>

        <div class="mt-6 flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          <div class="flex-1 space-y-4">
            <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('mightyddi.desc') }}
            </p>

            <!-- Dual-Mode Selection Notice Pill -->
            <div class="inline-flex items-center gap-2 rounded-xl border border-indigo-200/80 dark:border-indigo-800/70 bg-indigo-50/70 dark:bg-indigo-950/50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-indigo-800 dark:text-indigo-200">
              <span class="break-keep">{{ t('mightyddi.modeNote') }}</span>
            </div>
          </div>

          <!-- MightyDDI Visual Card (2/3 Compact Unified Size) -->
          <div class="relative shrink-0 w-48 sm:w-52 lg:w-48 xl:w-52">
            <div class="overflow-hidden rounded-xl border border-indigo-500/30 dark:border-indigo-500/40 bg-slate-950 shadow-md shadow-indigo-900/10 group">
              <div class="relative h-28 sm:h-30 w-full bg-white dark:bg-slate-900/90 flex items-center justify-center p-2 overflow-hidden">
                <img
                  :src="ddiImg"
                  alt="MightyDDI - DHCP, DNS, IPAM Security Platform"
                  class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="px-2.5 py-1.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span class="font-semibold text-indigo-300 flex items-center gap-1">
                  <span class="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  MightyDDI
                </span>
                <span class="text-[10px] text-slate-400 font-mono">DDI + XDP</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Dual Operation Modes (Mode #1 & Mode #2) Box -->
        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <!-- Mode #1: Inline L2 Bridge -->
          <div class="rounded-2xl border border-indigo-200/90 dark:border-indigo-800/70 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 dark:from-indigo-950/40 dark:via-slate-900/90 dark:to-sky-950/30 p-6 shadow-2xs">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-2xs">
                {{ t('mightyddi.mode1Badge') }}
              </span>
              <span class="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                Bump-in-the-Wire
              </span>
            </div>
            <h3 class="mt-3.5 text-lg font-extrabold text-slate-900 dark:text-white break-keep">
              {{ t('mightyddi.mode1Title') }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('mightyddi.mode1Desc') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="chip in ['DHCP Server / Snooping', 'DNS Sinkhole', 'Honeypot', 'TLS Fingerprint', 'DDoS Defense', 'eBPF XDP ACL']"
                :key="chip"
                class="rounded-lg border border-indigo-200/80 dark:border-indigo-800/80 bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300"
              >
                {{ chip }}
              </span>
            </div>
          </div>

          <!-- Mode #2: Standalone Server -->
          <div class="rounded-2xl border border-purple-200/90 dark:border-purple-800/70 bg-gradient-to-br from-purple-50/60 via-white to-rose-50/40 dark:from-purple-950/40 dark:via-slate-900/90 dark:to-rose-950/30 p-6 shadow-2xs">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white shadow-2xs">
                {{ t('mightyddi.mode2Badge') }}
              </span>
              <span class="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400">
                One-Arm / Multi-VLAN
              </span>
            </div>
            <h3 class="mt-3.5 text-lg font-extrabold text-slate-900 dark:text-white break-keep">
              {{ t('mightyddi.mode2Title') }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('mightyddi.mode2Desc') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="chip in ['DHCP Server', 'DNS Server (Sinkhole)', 'Honeypot', 'AI Gateway', 'DDoS Defense', 'eBPF XDP ACL']"
                :key="chip"
                class="rounded-lg border border-purple-200/80 dark:border-purple-800/80 bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300"
              >
                {{ chip }}
              </span>
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
          class="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 shadow-xs transition-all duration-200 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/5"
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
              {{ t(`mightyddi.${item.key}title`) }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t(`mightyddi.${item.key}desc`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- MightyDDI Ecosystem Banner Card -->
      <div v-reveal class="mt-10 rounded-3xl border border-indigo-900/40 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-8 md:p-10 text-white shadow-xl">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div class="max-w-2xl flex-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mb-3">
              Dual-Mode eBPF XDP Security DDI Architecture
            </div>
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white break-keep">
              🛡️ {{ t('mightyddi.bannerTitle') }}
            </h3>
            <p class="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed break-keep">
              {{ t('mightyddi.bannerDesc') }}
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <span class="rounded-full bg-indigo-500/15 border border-indigo-400/30 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 shadow-xs">
              🌉 Mode #1: Inline L2 Bridge
            </span>
            <span class="rounded-full bg-purple-500/15 border border-purple-400/30 px-3.5 py-1.5 text-xs font-semibold text-purple-300 shadow-xs">
              🖥️ Mode #2: Standalone Server
            </span>
            <span class="rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-xs">
              ⚡ eBPF XDP Security & ACL
            </span>
          </div>
        </div>
      </div>

      <!-- MightyDDI Unified Conceptual Architecture Diagram -->
      <div v-reveal class="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 sm:p-5 shadow-sm dark:shadow-black/40 transition-colors">
        <div class="relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white flex items-center justify-center p-2 sm:p-4">
          <img
            :src="ddiArchImg"
            alt="MightyDDI - eBPF XDP Security-Enhanced DHCP, DNS & IPAM Platform Architecture"
            class="w-full h-auto max-h-[520px] object-contain rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <!-- Bottom Notice -->
      <div class="mt-8 flex items-center gap-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="break-keep">{{ t('mightyddi.oss') }}</span>
      </div>
    </div>
  </section>
</template>

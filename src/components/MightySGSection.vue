<script setup>
import { useI18n } from 'vue-i18n'
import sgImg from '../assets/images/mightyaisg.png'
const { t } = useI18n()

const features = [
  {
    key: 'feat1',
    tag: 'Quantum-Safe Tunnel',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    tagBg: 'bg-blue-50 text-blue-700 border-blue-200/80',
  },
  {
    key: 'feat2',
    tag: 'Kernel-Level ZTNA',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
  },
  {
    key: 'feat3',
    tag: 'L7 AI Guardrail',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
  },
  {
    key: 'feat4',
    tag: 'Flexible Architecture',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  },
]
</script>

<template>
  <section id="mightysg" class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 border-t border-slate-200/60">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Top Hero Card -->
      <div v-reveal class="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <div class="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div class="max-w-2xl">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                {{ t('mightysg.tag') }}
              </span>
              <span class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                Enterprise AI Gateway
              </span>
            </div>

            <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              <span class="text-pink-600">{{ t('mightysg.title') }}</span>
              <span class="text-slate-300 mx-2 font-light">/</span>
              <span class="text-slate-900">{{ t('mightysg.subtitle') }}</span>
            </h2>

            <p class="mt-4 text-base text-slate-600 leading-relaxed break-keep">
              {{ t('mightysg.desc') }}
            </p>
          </div>

          <div class="relative shrink-0">
            <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-70"></div>
            <img
              :src="sgImg"
              alt="MightyAISG Architecture"
              class="relative h-36 w-36 rounded-2xl bg-white object-contain p-4 shadow-md ring-1 ring-slate-200/80 md:h-44 md:w-44"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <!-- 4 Core Feature Cards Grid -->
      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <div
          v-for="(item, idx) in features"
          v-reveal
          :key="item.key"
          :style="{ transitionDelay: `${idx * 80}ms` }"
          class="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-200 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/5"
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

            <h3 class="mt-5 text-lg font-bold tracking-tight text-slate-900 break-keep">
              {{ t(`mightysg.${item.key}title`) }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 leading-relaxed break-keep">
              {{ t(`mightysg.${item.key}desc`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- MightyAISG AI Gateway Ecosystem Banner Card (Deep Indigo/Purple theme) -->
      <div v-reveal class="mt-10 rounded-3xl border border-indigo-900/40 bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 p-8 md:p-10 text-white shadow-xl">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mb-3">
              AI Security Gateway Architecture
            </div>
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white break-keep">
              🛡️ {{ t('mightysg.bannerTitle') }}
            </h3>
            <p class="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed break-keep">
              {{ t('mightysg.bannerDesc') }}
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <span class="rounded-full bg-pink-500/15 border border-pink-400/30 px-3.5 py-1.5 text-xs font-semibold text-pink-300 shadow-xs">
              🤖 Intelligent AI Guardrails
            </span>
            <span class="rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-xs">
              🛡️ PQC WireGuard Tunnel
            </span>
            <span class="rounded-full bg-indigo-500/15 border border-indigo-400/30 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 shadow-xs">
              ⚡ Multi-LLM / MCP Gateway
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Open Source Notice -->
      <div class="mt-8 flex items-center gap-2 rounded-xl bg-slate-100/80 border border-slate-200/70 px-4 py-3 text-xs text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="break-keep">{{ t('mightysg.oss') }}</span>
      </div>
    </div>
  </section>
</template>

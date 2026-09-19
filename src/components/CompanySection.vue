<script setup>
import { useI18n } from 'vue-i18n'
import pqcImg from '../assets/images/pqc_shield.jpg'
import companyLabImg from '../assets/images/company_lab_light_theme.png'
const { t } = useI18n()
</script>

<template>
  <section id="company" class="mx-auto max-w-6xl px-6 py-20">
    <!-- Company Mission & Philosophy Card -->
    <div v-reveal class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-blue-950/30 p-8 md:p-12 shadow-sm dark:shadow-black/40 transition-colors">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="flex-1">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-800/60">
            {{ t('company.missionTag') }}
          </span>
          <h3 class="mt-3 text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white break-keep">
            {{ t('company.missionTitle') }}
          </h3>
          <p class="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
            {{ t('company.missionDesc') }}
          </p>
        </div>

        <!-- PQC Lattice Architecture Visual Card -->
        <div class="relative shrink-0 w-full lg:w-72 xl:w-80">
          <div class="overflow-hidden rounded-2xl border border-cyan-500/30 dark:border-cyan-500/40 bg-slate-950 shadow-lg shadow-cyan-900/10 group">
            <img
              :src="pqcImg"
              alt="Post-Quantum Cryptography Architecture"
              class="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div class="px-3.5 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
              <span class="font-semibold text-cyan-300 flex items-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                MightyLink Lab.
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Competency Pillars (4 Key Strengths) -->
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Pillar 1: Fast Packet Path -->
        <div class="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm transition hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md flex flex-col justify-between">
          <div>
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h4 class="text-base font-bold text-slate-900 dark:text-white">{{ t('company.pillar1Title') }}</h4>
            <p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t('company.pillar1Desc') }}
            </p>
          </div>
        </div>

        <!-- Pillar 2: Quantum Security -->
        <div class="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm transition hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-md flex flex-col justify-between">
          <div>
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 class="text-base font-bold text-slate-900 dark:text-white">{{ t('company.pillar2Title') }}</h4>
            <p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t('company.pillar2Desc') }}
            </p>
          </div>
        </div>

        <!-- Pillar 3: AI Governance -->
        <div class="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm transition hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md flex flex-col justify-between">
          <div>
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-base font-bold text-slate-900 dark:text-white">{{ t('company.pillar3Title') }}</h4>
            <p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t('company.pillar3Desc') }}
            </p>
          </div>
        </div>

        <!-- Pillar 4: DDoS Defense -->
        <div class="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm transition hover:border-rose-300 dark:hover:border-rose-500/50 hover:shadow-md flex flex-col justify-between">
          <div>
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="text-base font-bold text-slate-900 dark:text-white">{{ t('company.pillar4Title') }}</h4>
            <p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
              {{ t('company.pillar4Desc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- MightyLink Lab Ecosystem Architecture Diagram -->
      <div class="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-2 sm:p-4 shadow-xs transition-colors">
        <div class="relative overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white flex items-center justify-center p-2 sm:p-4">
          <img
            :src="companyLabImg"
            alt="MightyLink Lab. - Zero Trust & High-Speed Network Security Ecosystem"
            class="w-full h-auto max-h-[580px] object-contain rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <!-- Bottom Trust Note -->
      <div class="mt-6 rounded-xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 px-6 py-4 text-center">
        <p class="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 break-keep">
          🚀 {{ t('company.summary') }}
        </p>
      </div>
    </div>
  </section>
</template>

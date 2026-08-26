<script setup>
import { useI18n } from 'vue-i18n'
import ztnaImg from '../assets/images/mighty_ztna.jpg'
const { t } = useI18n()
</script>

<template>
  <section id="company" class="mx-auto max-w-6xl px-6 py-24">
    <!-- Top Overview Header (Preserved Shield + Text) -->
    <div class="mx-auto max-w-3xl text-center">
      <img
        :src="ztnaImg"
        alt="MightyLink Zero Trust"
        class="mx-auto h-20 w-20 rounded-2xl object-cover shadow-lg shadow-slate-300/60"
        loading="lazy"
        decoding="async"
      />
      <h2 class="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-600">{{ t('company.title') }}</h2>
      <p class="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">{{ t('company.subtitle') }}</p>
      <p class="mt-4 text-base text-slate-600 leading-relaxed break-keep">{{ t('company.desc') }}</p>
    </div>

    <!-- Company Mission & Philosophy Card -->
    <div v-reveal class="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-8 md:p-12 shadow-sm">
      <div class="w-full">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-700 border border-blue-200/60">
          {{ t('company.missionTag') }}
        </span>
        <h3 class="mt-3 text-xl md:text-2xl font-bold tracking-tight text-slate-900 break-keep">
          {{ t('company.missionTitle') }}
        </h3>
        <p class="mt-3 text-sm md:text-base text-slate-600 leading-relaxed break-keep">
          {{ t('company.missionDesc') }}
        </p>
      </div>

      <!-- Core Competency Pillars (3 Key Strengths) -->
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <!-- Pillar 1: Kernel Native -->
        <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h4 class="text-base font-bold text-slate-900">{{ t('company.pillar1Title') }}</h4>
          <p class="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed break-keep">
            {{ t('company.pillar1Desc') }}
          </p>
        </div>

        <!-- Pillar 2: Quantum Security -->
        <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-md">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h4 class="text-base font-bold text-slate-900">{{ t('company.pillar2Title') }}</h4>
          <p class="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed break-keep">
            {{ t('company.pillar2Desc') }}
          </p>
        </div>

        <!-- Pillar 3: AI Governance -->
        <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 class="text-base font-bold text-slate-900">{{ t('company.pillar3Title') }}</h4>
          <p class="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed break-keep">
            {{ t('company.pillar3Desc') }}
          </p>
        </div>
      </div>

      <!-- Bottom Trust Note -->
      <div class="mt-8 rounded-xl bg-white/70 border border-slate-200/60 px-6 py-4 text-center">
        <p class="text-xs md:text-sm font-medium text-slate-700 break-keep">
          🚀 {{ t('company.summary') }}
        </p>
      </div>
    </div>
  </section>
</template>

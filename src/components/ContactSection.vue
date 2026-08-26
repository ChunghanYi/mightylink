<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const email = 'chunghan.yi@gmail.com'
</script>

<template>
  <section id="contact" class="bg-gradient-to-b from-slate-50 via-white to-slate-100/70 py-24 border-t border-slate-200">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80 mb-3">
          {{ t('contact.tag') }}
        </span>
        <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {{ t('contact.title') }}
        </h2>
        <p class="mt-4 text-base text-slate-600 leading-relaxed break-keep">
          {{ t('contact.desc') }}
        </p>
      </div>

      <!-- Main 2-Column Grid (Direct Inquiry + Whitepaper Resource) -->
      <div class="mt-16 grid gap-8 lg:grid-cols-12">
        <!-- 1. Left Card: Enterprise Consultation & Direct Contact (6 cols) -->
        <div
          v-reveal
          class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 md:p-10 text-white shadow-xl lg:col-span-6"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-cyan-300 ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
                ⚡ {{ t('contact.sla') }}
              </span>
            </div>

            <h3 class="mt-6 text-2xl font-bold tracking-tight text-white break-keep">
              {{ t('contact.inquiryTitle') }}
            </h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed break-keep">
              {{ t('contact.inquiryDesc') }}
            </p>

            <!-- Company Info Box -->
            <div class="mt-8 space-y-3 rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xs">
              <div class="flex items-center justify-between text-xs md:text-sm">
                <span class="text-slate-400">{{ t('contact.company') }}</span>
                <span class="font-bold text-white">{{ t('brand.name') }}</span>
              </div>
              <div class="flex items-center justify-between text-xs md:text-sm border-t border-white/10 pt-3">
                <span class="text-slate-400">{{ t('contact.email') }}</span>
                <a :href="`mailto:${email}`" class="font-bold text-cyan-300 hover:text-cyan-200 hover:underline">
                  {{ email }}
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <a
              :href="`mailto:${email}?subject=MightyLink%20Solution%20Inquiry`"
              class="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:opacity-95 active:scale-98"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {{ t('contact.sendEmail') }}
            </a>
          </div>
        </div>

        <!-- 2. Right Column: Technical Whitepapers Resource Hub (6 cols) -->
        <div
          v-reveal
          style="transition-delay: 150ms"
          class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm lg:col-span-6"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                Technical PDFs
              </span>
            </div>

            <h3 class="mt-6 text-2xl font-bold tracking-tight text-slate-900 break-keep">
              {{ t('contact.docsTitle') }}
            </h3>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed break-keep">
              {{ t('contact.docsDesc') }}
            </p>

            <!-- Whitepaper Cards -->
            <div class="mt-6 space-y-4">
              <!-- Doc 1: MightyAISG -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 hover:border-blue-300 transition">
                <div class="flex items-start gap-3.5">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 border border-pink-200 font-bold text-xs">
                    PDF
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-900">{{ t('contact.docSg') }}</h4>
                    <p class="text-xs text-slate-500 mt-0.5">{{ t('contact.docSgDesc') }}</p>
                  </div>
                </div>
                <a
                  href="./docs/Mighty_AISG_Security_Platform_v1.00.pdf"
                  download
                  class="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 shadow-xs transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {{ t('contact.downloadPdf') }}
                </a>
              </div>

              <!-- Doc 2: MightyConnect -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 hover:border-cyan-300 transition">
                <div class="flex items-start gap-3.5">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200 font-bold text-xs">
                    PDF
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-900">{{ t('contact.docConnect') }}</h4>
                    <p class="text-xs text-slate-500 mt-0.5">{{ t('contact.docConnectDesc') }}</p>
                  </div>
                </div>
                <a
                  href="./docs/Mighty_Connect_Security_Platform_v1.00.pdf"
                  download
                  class="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:border-cyan-400 hover:text-cyan-600 shadow-xs transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {{ t('contact.downloadPdf') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3-Step Adoption Process Bar -->
      <div v-reveal class="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
        <h4 class="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Fast &amp; Reliable Adoption Journey
        </h4>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="flex items-start gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-extrabold text-xs">1</span>
            <div>
              <h5 class="text-sm font-bold text-slate-900">{{ t('contact.step1Title') }}</h5>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">{{ t('contact.step1Desc') }}</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 font-extrabold text-xs">2</span>
            <div>
              <h5 class="text-sm font-bold text-slate-900">{{ t('contact.step2Title') }}</h5>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">{{ t('contact.step2Desc') }}</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs">3</span>
            <div>
              <h5 class="text-sm font-bold text-slate-900">{{ t('contact.step3Title') }}</h5>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">{{ t('contact.step3Desc') }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

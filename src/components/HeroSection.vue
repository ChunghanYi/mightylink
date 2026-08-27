<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
    <svg
      class="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g class="text-blue-400 opacity-40 dark:text-cyan-400 dark:opacity-20" stroke="currentColor" stroke-width="1.5" fill="none">
        <line class="mesh-line" x1="140" y1="120" x2="360" y2="230" style="animation-delay: 0s" />
        <line class="mesh-line" x1="360" y1="230" x2="620" y2="110" style="animation-delay: -2s" />
        <line class="mesh-line" x1="620" y1="110" x2="880" y2="240" style="animation-delay: -4s" />
        <line class="mesh-line" x1="880" y1="240" x2="1080" y2="130" style="animation-delay: -6s" />
        <line class="mesh-line" x1="360" y1="230" x2="480" y2="470" style="animation-delay: -1s" />
        <line class="mesh-line" x1="620" y1="110" x2="780" y2="430" style="animation-delay: -3s" />
        <line class="mesh-line" x1="780" y1="430" x2="480" y2="470" style="animation-delay: -5s" />
        <line class="mesh-line" x1="880" y1="240" x2="780" y2="430" style="animation-delay: -2.5s" />
        <line class="mesh-line" x1="140" y1="120" x2="480" y2="470" style="animation-delay: -4.5s" />
      </g>
      <g class="text-cyan-500 dark:text-cyan-400" fill="currentColor">
        <circle class="mesh-node" cx="140" cy="120" r="4" style="animation-delay: 0s" />
        <circle class="mesh-node" cx="360" cy="230" r="4" style="animation-delay: -1s" />
        <circle class="mesh-node" cx="620" cy="110" r="4" style="animation-delay: -2s" />
        <circle class="mesh-node" cx="880" cy="240" r="4" style="animation-delay: -3s" />
        <circle class="mesh-node" cx="1080" cy="130" r="4" style="animation-delay: -0.5s" />
        <circle class="mesh-node" cx="480" cy="470" r="4" style="animation-delay: -1.5s" />
        <circle class="mesh-node" cx="780" cy="430" r="4" style="animation-delay: -2.5s" />
      </g>
    </svg>

    <div class="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
      <span class="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/60 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:text-cyan-300">
        {{ t('hero.badge') }}
      </span>

      <h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span class="block text-slate-900 dark:text-white">{{ t('hero.title1') }}</span>
        <span class="block bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">{{ t('hero.title2') }}</span>
      </h1>

      <p class="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300 break-keep">
        {{ t('hero.desc') }}
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#mightysg" class="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 dark:shadow-blue-950 hover:opacity-90 active:scale-95 transition-all">
          {{ t('hero.ctaProducts') }}
        </a>
        <a href="#contact" class="rounded-full border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 active:scale-95 transition-all">
          {{ t('hero.ctaContact') }}
        </a>
      </div>

      <div class="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
        <a href="#mightysg" class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 text-left shadow-sm transition hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md">
          <span class="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">MightyAISG</span>
          <p class="mt-1 text-lg font-bold text-pink-600 dark:text-pink-400">{{ t('hero.sgTag') }}</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ t('hero.sgDesc') }}</p>
        </a>
        <a href="#mightyconnect" class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 text-left shadow-sm transition hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-md">
          <span class="text-xs font-bold tracking-widest text-cyan-600 dark:text-cyan-400">MightyConnect</span>
          <p class="mt-1 text-lg font-bold text-pink-600 dark:text-pink-400">{{ t('hero.connectTag') }}</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ t('hero.connectDesc') }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

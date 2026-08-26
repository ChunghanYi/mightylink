<script setup>
import { useI18n } from 'vue-i18n'
import sgImg from '../assets/images/mightyaisg.png'
const { t } = useI18n()

const features = ['feat1', 'feat2', 'feat3', 'feat4']

const icons = {
  feat1: 'M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z',
  feat2: 'M4 4h16v4H4zM4 10h10v4H4zM4 16h7v4H4z',
  feat3: 'M12 5v14M5 12h14',
  feat4: 'M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
}
</script>

<template>
  <section id="mightysg" class="bg-slate-50 py-20">
    <div class="mx-auto max-w-6xl px-6">
      <div class="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div class="max-w-2xl">
          <span class="text-xs font-bold tracking-widest text-blue-600">{{ t('mightysg.tag') }}</span>
          <h2 class="mt-2 text-3xl font-bold text-slate-900">
            <span class="text-pink-600">{{ t('mightysg.title') }}</span>
            <span class="text-slate-400">·</span>
            {{ t('mightysg.subtitle') }}
          </h2>
          <p class="mt-4 text-slate-600">{{ t('mightysg.desc') }}</p>
        </div>
        <img
          :src="sgImg"
          alt="MightyAISG"
          class="h-32 w-32 shrink-0 rounded-2xl bg-white object-contain p-3 shadow-sm ring-1 ring-slate-200 md:h-40 md:w-40"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <div
          v-for="(key, idx) in features"
          v-reveal
          :key="key"
          :style="{ transitionDelay: `${idx * 100}ms` }"
          class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="icons[key]" />
            </svg>
          </div>
          <h3 class="mt-4 font-semibold text-slate-900">{{ t(`mightysg.${key}title`) }}</h3>
          <p class="mt-2 text-sm text-slate-600">{{ t(`mightysg.${key}desc`) }}</p>
        </div>
      </div>

      <p class="mt-6 text-xs text-slate-500">{{ t('mightysg.oss') }}</p>
    </div>
  </section>
</template>

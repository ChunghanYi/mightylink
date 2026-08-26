<script setup>
import { useI18n } from 'vue-i18n'
import ztnaImg from '../assets/images/mighty_ztna.jpg'
const { t } = useI18n()

const points = ['point1', 'point2', 'point3']
</script>

<template>
  <section id="company" class="mx-auto max-w-6xl px-6 py-20">
    <div class="mx-auto max-w-2xl text-center">
      <img
        :src="ztnaImg"
        alt="MightyLink Zero Trust"
        class="mx-auto h-20 w-20 rounded-2xl object-cover shadow-lg shadow-slate-300/60"
        loading="lazy"
        decoding="async"
      />
      <h2 class="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-600">{{ t('company.title') }}</h2>
      <p class="mt-2 text-3xl font-bold text-slate-900">{{ t('company.subtitle') }}</p>
      <p class="mt-4 text-slate-600">{{ t('company.desc') }}</p>
    </div>

    <div class="mt-14 grid gap-6 sm:grid-cols-3">
      <div
        v-for="(key, idx) in points"
        v-reveal
        :key="key"
        :style="{ transitionDelay: `${idx * 100}ms` }"
        class="rounded-2xl border border-slate-200 bg-slate-50 p-6"
      >
        <h3 class="font-semibold text-slate-900">{{ t(`company.${key}`) }}</h3>
        <p class="mt-2 text-sm text-slate-600">{{ t(`company.${key}desc`) }}</p>
      </div>
    </div>
  </section>
</template>

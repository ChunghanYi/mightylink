<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

const items = tm('devices.items')
</script>

<template>
  <section id="devices" class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-slate-900">{{ t('devices.title') }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ t('devices.desc') }}</p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <div v-reveal class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16v10H4zM9 20h6M12 16v4" />
            </svg>
          </div>
          <h3 class="mt-4 font-semibold text-slate-900">{{ t('devices.applianceTitle') }}</h3>
          <p class="mt-2 text-sm text-slate-600">{{ t('devices.applianceDesc') }}</p>
        </div>

        <div v-reveal style="transition-delay: 120ms" class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="mt-4 font-semibold text-slate-900">{{ t('devices.clientsTitle') }}</h3>
          <p class="mt-2 text-sm text-slate-600">{{ t('devices.clientsDesc') }}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="(item, idx) in items"
              :key="item"
              class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700"
            >
              {{ item }}
              <span
                v-if="idx === items.length - 1"
                class="rounded-full bg-pink-50 px-1.5 py-0.5 text-[10px] font-semibold text-pink-600"
              >
                {{ t('devices.wip') }}
              </span>
            </span>
          </div>

          <p class="mt-4 text-xs text-slate-500">{{ t('devices.autoConnect') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

const items = tm('devices.items')
const itemDescs = tm('devices.itemDescs')

// Custom icons mapping for platforms
const platformIcons = [
  // 1. OpenWrt Gateway (Router / Wifi)
  `M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0`,
  // 2. Ubuntu / Linux (Server / Terminal)
  `M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`,
  // 3. Windows 11 (Monitor / Desktop)
  `M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`,
  // 4. Android (Mobile phone)
  `M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z`,
  // 5. macOS / iOS (Laptop / Apple device)
  `M3 19a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13zm0 0h18`,
]
</script>

<template>
  <section id="devices" class="bg-gradient-to-b from-white via-slate-50/60 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 py-24 transition-colors duration-300">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800 mb-3">
          {{ t('devices.tag') }}
        </span>
        <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {{ t('devices.title') }}
        </h2>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
          {{ t('devices.desc') }}
        </p>
      </div>

      <!-- Main Showcase Grid (Appliance + Clients) -->
      <div class="mt-16 grid gap-8 lg:grid-cols-12">
        <!-- 1. Left Card: Security Box Appliance (5 cols) -->
        <div
          v-reveal
          class="flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-900/90 dark:to-slate-900/70 p-8 shadow-sm dark:shadow-black/40 transition hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md lg:col-span-5"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                {{ t('devices.applianceBadge') }}
              </span>
            </div>

            <h3 class="mt-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white break-keep">
              {{ t('devices.applianceTitle') }}
            </h3>
            <p class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('devices.applianceDesc') }}
            </p>

            <!-- Appliance Key Architecture Points -->
            <div class="mt-6 space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div class="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 font-bold text-xs mt-0.5">✓</span>
                <span class="break-keep">{{ t('devices.appliancePoint1') }}</span>
              </div>
              <div class="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 font-bold text-xs mt-0.5">✓</span>
                <span class="break-keep">{{ t('devices.appliancePoint2') }}</span>
              </div>
              <div class="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 font-bold text-xs mt-0.5">✓</span>
                <span class="break-keep">{{ t('devices.appliancePoint3') }}</span>
              </div>
              <div class="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 font-bold text-xs mt-0.5">✓</span>
                <span class="break-keep">{{ t('devices.appliancePoint4') }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 p-4 text-center">
            <span class="text-xs font-semibold text-blue-800 dark:text-blue-300 tracking-wide">
              ⚡ Intel Architecture Optimized Hardware
            </span>
          </div>
        </div>

        <!-- 2. Right Card: Universal Multi-Platform Clients (7 cols) -->
        <div
          v-reveal
          style="transition-delay: 150ms"
          class="flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-900/90 dark:to-slate-900/70 p-8 shadow-sm dark:shadow-black/40 transition hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-md lg:col-span-7"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-md shadow-cyan-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="inline-flex items-center gap-1 rounded-full bg-cyan-50 dark:bg-cyan-950 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {{ t('devices.clientsBadge') }}
              </span>
            </div>

            <h3 class="mt-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white break-keep">
              {{ t('devices.clientsTitle') }}
            </h3>
            <p class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              {{ t('devices.clientsDesc') }}
            </p>

            <!-- Auto-Connection Highlight Banner -->
            <div class="mt-5 rounded-2xl border border-cyan-200/80 dark:border-cyan-900/60 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 dark:from-cyan-950/40 dark:to-blue-950/40 p-4">
              <div class="flex items-start gap-3">
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white text-xs font-bold mt-0.5">🔒</span>
                <div>
                  <h4 class="text-xs md:text-sm font-bold text-slate-900 dark:text-white">{{ t('devices.autoConnectTitle') }}</h4>
                  <p class="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed break-keep">{{ t('devices.autoConnectDesc') }}</p>
                </div>
              </div>
            </div>

            <!-- Platform Interactive List / Grid -->
            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div
                v-for="(item, idx) in items"
                :key="item"
                class="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-4 py-3 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
              >
                <div class="flex items-center gap-3">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="platformIcons[idx] || platformIcons[0]" />
                    </svg>
                  </div>
                  <div>
                    <span class="block text-xs font-bold text-slate-900 dark:text-white">{{ item }}</span>
                    <span class="block text-[11px] text-slate-400 dark:text-slate-400">{{ itemDescs[idx] }}</span>
                  </div>
                </div>

                <span
                  v-if="idx === items.length - 1"
                  class="rounded-full bg-pink-50 dark:bg-pink-950/80 px-2 py-0.5 text-[10px] font-bold text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-800"
                >
                  {{ t('devices.wip') }}
                </span>
                <span
                  v-else
                  class="rounded-full bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                >
                  {{ t('devices.ready') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

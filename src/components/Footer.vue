<script setup>
import { useI18n } from 'vue-i18n'
import logoFull from '../assets/images/logo-full.png'
const { t } = useI18n()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 transition-colors duration-300">
    <div class="mx-auto max-w-6xl px-6 text-center text-xs leading-relaxed text-slate-400 dark:text-slate-500">
      <div class="mb-4 flex flex-wrap items-center justify-center gap-3">
        <img :src="logoFull" alt="MightyLink" class="h-8 md:h-9 w-auto object-contain" />
        <span class="text-slate-600 dark:text-slate-400">&copy; {{ year }} MightyLink Lab. All rights reserved.</span>
      </div>
      <p class="mt-2">{{ t('footer.trademark') }}</p>
      <p class="mt-1">{{ t('footer.oss') }}</p>
    </div>
  </footer>
</template>

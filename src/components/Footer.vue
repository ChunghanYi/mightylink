<script setup>
import { useI18n } from 'vue-i18n'
import logoFull from '../assets/images/logo-full.png'
const { t } = useI18n()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white py-10">
    <div class="mx-auto max-w-6xl px-6 text-center text-xs leading-relaxed text-slate-400">
      <div class="mb-4 flex flex-wrap items-center justify-center gap-3">
        <img :src="logoFull" alt="MightyLink" class="h-8 md:h-9 w-auto object-contain" />
        <span>&copy; {{ year }} MightyLink. All rights reserved.</span>
      </div>
      <p class="mt-2">{{ t('footer.trademark') }}</p>
      <p class="mt-1">{{ t('footer.oss') }}</p>
    </div>
  </footer>
</template>

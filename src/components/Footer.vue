<script setup>
import { useI18n } from 'vue-i18n'
import logoFull from '../assets/images/logo-full.png'
const { t } = useI18n()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white py-10">
    <div class="mx-auto max-w-6xl px-6 text-center text-xs leading-relaxed text-slate-400">
      <img :src="logoFull" alt="MightyLink" class="mx-auto mb-4 h-10 w-auto" />
      <p>&copy; {{ year }} MightyLink. All rights reserved.</p>
      <p class="mt-2">{{ t('footer.trademark') }}</p>
      <p class="mt-1">{{ t('footer.oss') }}</p>
    </div>
  </footer>
</template>

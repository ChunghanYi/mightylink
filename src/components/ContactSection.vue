<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const email = 'chunghan.yi@gmail.com'
</script>

<template>
  <section id="contact" class="bg-slate-50 py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div v-reveal class="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-center text-white sm:p-14">
        <h2 class="text-3xl font-bold">{{ t('contact.title') }}</h2>
        <p class="mx-auto mt-3 max-w-2xl text-blue-50">{{ t('contact.desc') }}</p>

        <div class="mt-8 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-8">
          <p><span class="font-semibold">{{ t('contact.company') }}</span>: {{ t('brand.name') }}</p>
          <a :href="`mailto:${email}`" class="font-semibold underline underline-offset-4">
            {{ t('contact.email') }}: {{ email }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

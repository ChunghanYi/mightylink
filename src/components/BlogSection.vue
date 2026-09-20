<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getAllPosts } from '../data/blogPosts.js'

const { t, locale } = useI18n()

const posts = getAllPosts()
const searchQuery = ref('')

function getTitle(post) {
  if (!post) return ''
  if (typeof post.title === 'string') return post.title
  return post.title?.[locale.value] || post.title?.ko || post.title?.en || ''
}

const filteredPosts = computed(() => {
  if (!searchQuery.value.trim()) return posts
  const q = searchQuery.value.toLowerCase()
  return posts.filter(post => {
    const title = getTitle(post).toLowerCase()
    const cat = (post.category || '').toLowerCase()
    return title.includes(q) || cat.includes(q)
  })
})
</script>

<template>
  <section id="blog" class="relative py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20 transition-colors">
    <div class="mx-auto max-w-6xl px-6">
      
      <!-- Section Header (Centered) -->
      <div class="mb-14 text-center max-w-3xl mx-auto" v-reveal>
        <span class="inline-flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-cyan-500/30 bg-blue-50/80 dark:bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          {{ t('blog.tag') }}
        </span>
        <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {{ t('blog.title') }}
        </h2>

        <!-- Search Box (Centered when needed) -->
        <div v-if="posts.length > 4" class="relative max-w-xs mx-auto mt-6">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t('blog.searchPlaceholder')"
            class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-2 pl-9 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Minimalist & Sleek Title Cards Grid -->
      <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(post, index) in filteredPosts"
          :key="post.id || index"
          :href="post.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400 dark:hover:border-cyan-500/60 hover:ring-1 hover:ring-blue-400/20 dark:hover:ring-cyan-500/20 cursor-pointer"
          v-reveal
        >
          <!-- Top Row: Category / Date & External Link Arrow -->
          <div>
            <div class="flex items-center justify-between gap-3 mb-4">
              <div class="flex items-center gap-2">
                <!-- Category badge if provided -->
                <span
                  v-if="post.category"
                  class="rounded-md bg-blue-50 dark:bg-cyan-950/60 border border-blue-100 dark:border-cyan-800/50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700 dark:text-cyan-300"
                >
                  {{ post.category }}
                </span>
                <span v-if="post.date" class="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {{ post.date }}
                </span>
              </div>

              <!-- Top-right External Link Icon with hover translation -->
              <div class="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-cyan-950/60 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>

            <!-- Post Title (Focused Headline) -->
            <h3 class="text-base sm:text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {{ getTitle(post) }}
            </h3>
          </div>

          <!-- Bottom Footer: Domain link & CTA -->
          <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
            <span class="text-slate-400 dark:text-slate-500 font-medium truncate max-w-[200px]">
              {{ post.source || 'slowbootkernelhacks.blogspot.com' }}
            </span>
            <span class="font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1 group-hover:underline">
              <span>{{ t('blog.readArticle') }}</span>
              <span>→</span>
            </span>
          </div>
        </a>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
        <p class="text-slate-500 dark:text-slate-400 text-sm">
          {{ t('blog.noResults') }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const canvasRef = ref(null)

let animId = null
let onResize = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas || !canvas.parentElement) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let w = (canvas.width = canvas.parentElement.offsetWidth)
  let h = (canvas.height = canvas.parentElement.offsetHeight)

  // Configure high-speed packet tracks (horizontal lines)
  const trackCount = 6
  const tracks = []
  const setupTracks = () => {
    tracks.length = 0
    for (let i = 0; i < trackCount; i++) {
      tracks.push(Math.round((h * (i + 1)) / (trackCount + 1)))
    }
  }
  setupTracks()

  // 7 calm, elegant packet ribbons drifting smoothly
  const packetCount = 7
  const packets = []

  const colorPalette = [
    { dark: '#00f0ff', light: '#0284c7', glow: 'rgba(6, 182, 212, 0.6)' },   // Cyan
    { dark: '#38bdf8', light: '#2563eb', glow: 'rgba(59, 130, 246, 0.6)' },   // Blue
    { dark: '#818cf8', light: '#4f46e5', glow: 'rgba(99, 102, 241, 0.6)' },   // Indigo
    { dark: '#c084fc', light: '#9333ea', glow: 'rgba(192, 132, 252, 0.6)' },  // Purple
  ]

  const initPacket = (p, randomInitialX = false) => {
    const trackY = tracks[Math.floor(Math.random() * tracks.length)]
    const dir = Math.random() > 0.4 ? 1 : -1
    const col = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    const speed = 0.45 + Math.random() * 0.75 // Gentle, calm, relaxing drift
    const len = 180 + Math.random() * 220     // Long, elegant light ribbon

    p.y = trackY
    p.dir = dir
    p.speed = speed * dir
    p.len = len
    p.color = col
    p.width = 1.8 + Math.random() * 0.8
    p.x = randomInitialX
      ? Math.random() * w
      : dir === 1
      ? -len - Math.random() * 120
      : w + len + Math.random() * 120
  }

  for (let i = 0; i < packetCount; i++) {
    const p = {}
    initPacket(p, true)
    packets.push(p)
  }

  const render = () => {
    ctx.clearRect(0, 0, w, h)
    const isDark = document.documentElement.classList.contains('dark')

    // 1. Draw subtle packet track lines
    ctx.lineWidth = 1
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.05)' : 'rgba(148, 163, 184, 0.12)'
    for (const y of tracks) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }

    // 2. Draw calm, glowing light ribbons
    for (const p of packets) {
      p.x += p.speed

      // Reset when exiting screen
      if (p.dir === 1 && p.x - p.len > w) {
        initPacket(p)
      } else if (p.dir === -1 && p.x + p.len < 0) {
        initPacket(p)
      }

      const activeColor = isDark ? p.color.dark : p.color.light
      const tailX = p.x - p.dir * p.len

      // Draw soft glowing gradient tail
      const gradient = ctx.createLinearGradient(tailX, p.y, p.x, p.y)
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
      gradient.addColorStop(0.7, activeColor + '44')
      gradient.addColorStop(1, activeColor)

      ctx.save()
      ctx.shadowBlur = isDark ? 10 : 6
      ctx.shadowColor = p.color.glow
      ctx.strokeStyle = gradient
      ctx.lineWidth = p.width
      ctx.lineCap = 'round'

      ctx.beginPath()
      ctx.moveTo(tailX, p.y)
      ctx.lineTo(p.x, p.y)
      ctx.stroke()

      // Soft photon head
      ctx.fillStyle = isDark ? '#ffffff' : activeColor
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.width * 0.8, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    animId = requestAnimationFrame(render)
  }

  onResize = () => {
    if (!canvas || !canvas.parentElement) return
    w = canvas.width = canvas.parentElement.offsetWidth
    h = canvas.height = canvas.parentElement.offsetHeight
    setupTracks()
  }

  window.addEventListener('resize', onResize)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  if (onResize) window.removeEventListener('resize', onResize)
})
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
    <!-- Dynamic Cyber Grid, Ambient Aurora Glow & High-Speed Packet Streams -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <!-- 1. Ambient Aurora Glowing Orbs -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[460px] bg-gradient-to-tr from-blue-500/20 via-cyan-400/25 to-indigo-500/20 dark:from-blue-600/30 dark:via-cyan-400/25 dark:to-indigo-500/25 rounded-full blur-[100px] animate-aurora-glow"></div>
      <div class="absolute top-1/4 -left-20 w-[420px] h-[340px] bg-gradient-to-br from-cyan-400/15 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-600/15 rounded-full blur-[90px] animate-aurora-float-1"></div>
      <div class="absolute top-1/3 -right-20 w-[480px] h-[360px] bg-gradient-to-bl from-indigo-500/15 to-cyan-400/10 dark:from-indigo-600/20 dark:to-cyan-500/15 rounded-full blur-[90px] animate-aurora-float-2"></div>

      <!-- 2. Cyber Matrix Grid with Soft Radial Falloff -->
      <div class="hero-cyber-grid"></div>

      <!-- 3. High-Speed Packet Stream Canvas (Calm & Elegant Line-Rate Beams) -->
      <canvas ref="canvasRef" class="absolute inset-0 h-full w-full opacity-70 dark:opacity-85"></canvas>
    </div>

    <div class="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
      <span class="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/60 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:text-cyan-300">
        {{ t('hero.badge') }}
      </span>

      <h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span class="block text-slate-900 dark:text-white">{{ t('hero.title1') }}</span>
        <span class="block bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mt-1 sm:mt-2">{{ t('hero.title2') }}</span>
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 break-keep leading-relaxed">
        {{ t('hero.desc') }}
      </p>

      <!-- 3 Core Technological Pillars -->
      <div class="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:gap-4">
        <div class="inline-flex items-center gap-2.5 rounded-full border border-blue-200/90 dark:border-blue-900/60 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-medium shadow-2xs backdrop-blur-xs transition hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xs">
          <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white shadow-2xs">1</span>
          <span class="font-bold text-blue-600 dark:text-cyan-400">{{ t('hero.pillar1Tech') }}</span>
          <span class="text-slate-600 dark:text-slate-300">{{ t('hero.pillar1Label') }}</span>
        </div>
        <div class="inline-flex items-center gap-2.5 rounded-full border border-cyan-200/90 dark:border-cyan-900/60 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-medium shadow-2xs backdrop-blur-xs transition hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xs">
          <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-[11px] font-bold text-white shadow-2xs">2</span>
          <span>
            <span class="font-bold text-cyan-600 dark:text-cyan-400">{{ t('hero.pillar2Tech') }}</span><span class="font-medium text-slate-600 dark:text-slate-300">{{ t('hero.pillar2Label') }}</span>
          </span>
        </div>
        <div class="inline-flex items-center gap-2.5 rounded-full border border-indigo-200/90 dark:border-indigo-900/60 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-medium shadow-2xs backdrop-blur-xs transition hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-xs">
          <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white shadow-2xs">3</span>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">{{ t('hero.pillar3Tech') }}</span>
          <span class="text-slate-600 dark:text-slate-300">{{ t('hero.pillar3Label') }}</span>
        </div>
      </div>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#mightysg" class="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 dark:shadow-blue-950 hover:opacity-90 active:scale-95 transition-all">
          {{ t('hero.ctaProducts') }}
        </a>
        <a href="#contact" class="rounded-full border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 active:scale-95 transition-all">
          {{ t('hero.ctaContact') }}
        </a>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-3">
        <!-- Series 01: MightyAISG (AI Security Gateway) - Blue/Indigo theme -->
        <a
          href="#mightysg"
          class="group relative flex flex-col justify-between rounded-2xl border border-blue-200/90 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-blue-100/50 dark:from-blue-950/50 dark:via-slate-900/90 dark:to-indigo-950/40 p-6 text-left shadow-xs transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400">MightyAISG</span>
              <span class="rounded-full border border-blue-200/80 dark:border-blue-800/80 bg-blue-100/90 dark:bg-blue-950/90 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:text-blue-300">Series 01</span>
            </div>
            <p class="mt-2 text-lg font-bold text-blue-700 dark:text-blue-300">{{ t('hero.sgTag') }}</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">{{ t('hero.sgDesc') }}</p>
          </div>
          <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>{{ t('hero.viewProduct') }}</span>
            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        <!-- Series 02: MightyConnect (P2P Mesh Network) - Cyan/Teal theme -->
        <a
          href="#mightyconnect"
          class="group relative flex flex-col justify-between rounded-2xl border border-cyan-200/90 dark:border-cyan-900/60 bg-gradient-to-br from-cyan-50/90 via-teal-50/40 to-emerald-100/50 dark:from-cyan-950/50 dark:via-slate-900/90 dark:to-teal-950/40 p-6 text-left shadow-xs transition-all duration-300 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400">MightyConnect</span>
              <span class="rounded-full border border-cyan-200/80 dark:border-cyan-800/80 bg-cyan-100/90 dark:bg-cyan-950/90 px-2 py-0.5 text-[10px] font-bold text-cyan-700 dark:text-cyan-300">Series 02</span>
            </div>
            <p class="mt-2 text-lg font-bold text-teal-700 dark:text-teal-300">{{ t('hero.connectTag') }}</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">{{ t('hero.connectDesc') }}</p>
          </div>
          <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            <span>{{ t('hero.viewProduct') }}</span>
            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        <!-- Series 03: MightyXDDoS (Inline DDoS Mitigator) - Rose/Amber theme -->
        <a
          href="#mightyxddos"
          class="group relative flex flex-col justify-between rounded-2xl border border-rose-200/90 dark:border-rose-900/60 bg-gradient-to-br from-rose-50/90 via-pink-50/40 to-amber-100/50 dark:from-rose-950/50 dark:via-slate-900/90 dark:to-amber-950/40 p-6 text-left shadow-xs transition-all duration-300 hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-lg hover:shadow-rose-500/10 hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold tracking-widest text-rose-600 dark:text-rose-400">MightyXDDoS</span>
              <span class="rounded-full border border-rose-200/80 dark:border-rose-800/80 bg-rose-100/90 dark:bg-rose-950/90 px-2 py-0.5 text-[10px] font-bold text-rose-700 dark:text-rose-300">Series 03</span>
            </div>
            <p class="mt-2 text-lg font-bold text-rose-700 dark:text-rose-300">{{ t('hero.xddosTag') }}</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-keep">{{ t('hero.xddosDesc') }}</p>
          </div>
          <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400">
            <span>{{ t('hero.viewProduct') }}</span>
            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import CompanySection from './components/CompanySection.vue'
import MightySGSection from './components/MightySGSection.vue'
import MightyConnectSection from './components/MightyConnectSection.vue'
import DevicesSection from './components/DevicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
    <Navbar />
    <main>
      <HeroSection />
      <CompanySection />
      <MightySGSection />
      <MightyConnectSection />
      <DevicesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

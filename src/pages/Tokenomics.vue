<script setup>
import FAQ from "@/components/Home/FAQ.vue";
import Hero from "@/components/Tokenomics/Hero.vue";
import TokenomicsSection from "@/components/Tokenomics/TokenomicsSection.vue";
import TokenStats from "@/components/Tokenomics/TokenStats.vue";
import WhyHold from "@/components/Tokenomics/WhyHold.vue";
import { FAQCards } from "@/constants/Tokenomics/FAQCards";
</script>

<template>
  <Hero />
  <TokenStats />
  <TokenomicsSection />
  <WhyHold />
  <FAQ :faq-list="FAQCards" />
</template>

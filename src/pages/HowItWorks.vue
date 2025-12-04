<template>
  <HeroSection />
  <ProcessSection />
  <TiersSection />
  <SafetySection />
  <PreFooterCTA />
  <FAQ :faq-list="FAQCards" />
</template>

<script setup>
import FAQ from "@/components/Home/FAQ.vue";
import HeroSection from "@/components/HowItWorks/HeroSection.vue";
import PreFooterCTA from "@/components/HowItWorks/PreFooterCTA.vue";
import ProcessSection from "@/components/HowItWorks/ProcessSection.vue";
import SafetySection from "@/components/HowItWorks/SafetySection.vue";
import TiersSection from "@/components/HowItWorks/TiersSection.vue";
import { FAQCards } from "@/constants/HowItWorks/FAQCards";
</script>

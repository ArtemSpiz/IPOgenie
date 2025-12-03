<template>
  <Hero />
  <Institutional />
  <FAQ :faq-list="FAQCards" />
  <Socials />
  <HowToBuyStats />
</template>

<script setup>
import FAQ from "@/components/Home/FAQ.vue";
import Hero from "@/components/HowToBuy/Hero.vue";
import HowToBuyStats from "@/components/HowToBuy/HowToBuyStats.vue";
import Institutional from "@/components/HowToBuy/Institutional.vue";
import Socials from "@/components/HowToBuy/Socials.vue";
import { FAQCards } from "@/constants/HowToBuy/FAQcards";
</script>

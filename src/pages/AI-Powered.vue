<template>
  <HeroSection text-btn="Start Discovery" sec-btn />
  <ETFSection />
  <Motion />
  <InstitutionaSection />
  <Matters :mattersCards="MattersCards" />
  <DiscoverSection />
  <TechnologySection />
</template>

<script setup>
import DiscoverSection from "@/components/RePageComponents/DiscoverSection.vue";
import ETFSection from "@/components/RePageComponents/ETFSection.vue";
import HeroSection from "@/components/RePageComponents/HeroSection.vue";
import InstitutionaSection from "@/components/RePageComponents/InstitutionaSection.vue";
import Matters from "@/components/RePageComponents/Matters.vue";
import Motion from "@/components/RePageComponents/Motion.vue";
import TechnologySection from "@/components/RePageComponents/TechnologySection.vue";
import { MattersCards } from "@/constants/Matters";
</script>

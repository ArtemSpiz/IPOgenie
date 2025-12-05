<template>
  <HeroSection
    :heading="[
      { text: 'PO-Backed', type: 'default' },
      { text: 'Insurance', type: 'accent' },
      { text: 'Pool', type: 'default' },
    ]"
    description="Investing in private markets is risky—scams, failed projects, and rug pulls happen. IPO Genie introduces $IPO-backed insurance, giving you a built-in safety net so you can invest with confidence. Coverage is powered by crypto and traditional insurance providers, turning risk into a programmable, transparent variable."
  />
  <ETFSection
    title="Think of it as a "
    orange-text="investing"
    gray-text="but protected"
    text="Your investment is backed if a project fails, milestones aren’t met, or founders abandon the initiative."
  />
  <InstitutionaSection />
  <DiscoverSection />
  <TechnologySection />
</template>

<script setup>
import DiscoverSection from "@/components/RePageComponents/DiscoverSection.vue";
import ETFSection from "@/components/RePageComponents/ETFSection.vue";
import HeroSection from "@/components/RePageComponents/HeroSection.vue";
import InstitutionaSection from "@/components/RePageComponents/InstitutionaSection.vue";
import Matters from "@/components/RePageComponents/Matters.vue";
import TechnologySection from "@/components/RePageComponents/TechnologySection.vue";
</script>

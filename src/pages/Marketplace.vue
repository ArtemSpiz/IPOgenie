<template>
  <HeroSection
    :heading="[
      { text: 'Deal Builder', type: 'default' },
      { text: 'Marketplace', type: 'accent' },
    ]"
    description2="AI tools, community validation, and expert oversight combine to create a fast, fair, and always-on deal pipeline."
    description="IPO Genie’s Deal Builder Marketplace puts deal sourcing into the hands of the community—operators, scouts, analysts, and founders alike. By staking $IPO, contributors show real skin in the game when submitting vetted startup opportunities."
  />
  <ETFSection
    title="Think of it as a "
    orange-text="sourcing"
    gray-text="but AI Augmented"
    text="IPO Genie introduces an activity-weighted staking model that rewards users based on how they contribute to the network. Each participant earns a Reputation Score that evolves dynamically through AI and machine learning analysis of past behavior, network effects, and predictive value."
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

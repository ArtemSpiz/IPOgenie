<template>
  <HeroSection
    :heading="[
      { text: 'Behavior-Based Staking &', type: 'default' },
      { text: 'Rewards', type: 'accent' },
    ]"
    description="IPO Genie is reinventing staking by moving beyond passive holding rewards to a dynamic, behavior-driven model powered by real-time on-chain data and AI."
    description2="Instead of simply rewarding users for locking up tokens, this new system values active, meaningful participation in the ecosystem."
  />
  <ETFSection
    title="Think of it as a "
    orange-text="Staking"
    gray-text="but dynamic"
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

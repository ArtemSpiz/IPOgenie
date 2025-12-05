<template>
  <HeroSection
    :heading="[
      { text: 'White-Labeled', type: 'accent' },
      { text: 'Fund-as-a-Services', type: 'default' },
      { text: '(FaaS)', type: 'accent' },
    ]"
    description="Many DAOs, angel syndicates, and accelerators have strong communities and deal flow but lack the legal, compliance, and technical infrastructure needed to run a professional investment fund. IPO Genie’s Fund-as-a-Service (FaaS) solves this by offering a fully branded, ready-to-launch platform that lets any qualified group operate a compliant investment vehicle in weeks—not months—with every transaction secured on the $IPO network."
    description2="Think of FaaS as a launchpad—but better. Unlike traditional launchpads that mainly focus on token issuance, IPO Genie provides the entire backend infrastructure to run and manage an investment fund compliantly. It’s not just about launching; it’s about operating smoothly and transparently from day one."
  />
  <ETFSection
    title="Think of FaaS as a"
    orange-text="Launchpad"
    gray-text="but better"
    text="Unlike traditional launchpads that mainly focus on token issuance, IPO Genie provides the entire backend infrastructure to run and manage an investment fund compliantly. It’s not just about launching; it’s about operating smoothly and transparently from day one."
  />
  <InstitutionaSection />
  <Matters :matters-cards="MattersCards2" />
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
import { MattersCards2 } from "@/constants/Matters";
</script>

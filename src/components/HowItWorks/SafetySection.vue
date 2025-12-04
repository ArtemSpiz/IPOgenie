<template>
  <section
    class="max-w-[2000px] base-x-p mx-auto mt-[135px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10"
  >
    <div class="text-center flex flex-col gap-7 mb-8 max-md:gap-2">
      <h2 class="title text-black">Built for Safety</h2>
      <h1
        class="text-[60px] font-inter text-black italic leading-[80%] max-xl:text-5xl max-lg:text-3xl max-md:text-2xl"
      >
        (Audited for Trust)
      </h1>
      <p class="description text-black">
        {{ description }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-md:gap-4">
      <div
        v-for="audit in audits"
        :key="audit.name"
        class="rounded-[20px] items-start bg-black p-10 flex flex-col justify-between min-h-[300px]"
      >
        <div class="h-[46px] w-auto">
          <img :src="audit.logo" class="object-contain" />
        </div>

        <div class="flex flex-col gap-3">
          <div class="text-2xl font-inter font-extrabold leading-[80%]">
            {{ audit.title }}
          </div>
          <div class="text-sm max-w-[450px] leading-[140%]">
            {{ audit.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default: "IPO Genie operates under strict regulatory frameworks.",
  },
});

import logoPartner1 from "@/assets/img/Home/logoPartner1.png";
import logoPartner2 from "@/assets/img/Home/logoPartner2.png";

const audits = [
  {
    logo: logoPartner1,
    title: "External Smart Contract Audit by SolidProof",
    description:
      "IPO Genie's smart contracts have been fully audited by SolidProof, ensuring secure, transparent, and reliable operations throughout the crypto presale and beyond.",
  },
  {
    logo: logoPartner2,
    title: "Built to CertiK-Level Security Standards",
    description:
      "Our blockchain architecture follows the same rigorous standards used by top security firms, ensuring protection against vulnerabilities during token purchases and on-chain transactions.",
  },
];
</script>

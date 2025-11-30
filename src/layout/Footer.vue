<script setup>
import Discord from "@/assets/icons/Discord.vue";
import Linkedin from "@/assets/icons/Linkedin.vue";
import X from "@/assets/icons/X.vue";
import FooterLogo from "@/assets/img/FooterLogo.png";
import FooterLogoMob from "@/assets/img/FooterLogoMob.png";
import Logo from "@/assets/img/Logo.png";

const isMobile = window.innerWidth < 1024;

const FooterLinks = [
  {
    title: "About",
    links: [
      { link: "Roadmap" },
      { link: "How It Works" },
      { link: "How to Buy" },
    ],
  },
  {
    title: "$IPO Token",
    links: [
      { link: "Token Utility" },
      { link: "Why Buy $IPO" },
      { link: "Technology" },
      { link: "AI Deal" },
    ],
  },
  {
    title: "Legal",
    links: [{ link: "Terms of Use" }, { link: "Privacy Policy" }],
  },
];

const FooterSoc = [
  {
    icon: X,
  },
  {
    icon: Linkedin,
  },
  {
    icon: Discord,
  },
];
</script>

<template>
  <div class="px-5 pb-8 mt-[85px] max-lg:mt-16 max-md:mt-10">
    <div
      class="flex justify-between h-full relative overflow-hidden min-h-[730px] rounded-[60px] bg-[#16151A] gap-[77px] base-x-p py-[130px] max-xl:py-[100px] max-lg:flex-col-reverse max-lg:rounded-[30px] max-lg:py-14 max-md:py-9 max-md:h-full"
    >
      <div
        class="w-full pointer-events-none z-0 absolute bottom-0 right-0 h-auto max-lg:w-[100px]"
      >
        <img :src="isMobile ? FooterLogoMob : FooterLogo" />
      </div>

      <div class="flex z-10 flex-col gap-9 max-lg:gap-5 max-md:gap-3">
        <div class="w-[190px] h-auto max-md:w-[160px]">
          <img :src="Logo" />
        </div>

        <div class="flex self-stretch gap-3">
          <div
            v-for="(soc, i) in FooterSoc"
            :key="i"
            class="aspect-square w-14 rounded-lg cursor-pointer flex justify-center items-center bg-[#FF5B00] max-lg:w-10"
          >
            <component :is="soc.icon" class="max-lg:w-6 aspect-square" />
          </div>
        </div>
        <div class="text-lg leading-[160%] max-lg:text-base max-md:text-xs">
          © 2025 IPO. All Rights Reserved.
        </div>
      </div>

      <div
        class="flex z-10 gap-8 max-lg:flex-wrap max-md:flex-col max-md:gap-16"
      >
        <div
          v-for="(link, i) in FooterLinks"
          :key="i"
          class="flex flex-col gap-9 max-md:gap-5"
        >
          <div class="text-2xl font-extrabold leading-[80%]">
            {{ link.title }}
          </div>
          <div class="flex flex-col gap-5 max-md:gap-2">
            <div
              v-for="(item, index) in link.links"
              :key="index"
              class="font-inter cursor-pointer text-lg leading-[80%] max-md:text-sm"
            >
              {{ item.link }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

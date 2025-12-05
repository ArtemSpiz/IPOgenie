<script setup>
import Coinmarket from "@/assets/icons/Coinmarket.vue";
import Inst from "@/assets/icons/Inst.vue";
import TgIcon from "@/assets/icons/TgIcon.vue";
import X from "@/assets/icons/X.vue";
import FooterLogo from "@/assets/img/FooterLogo.png";
import FooterLogoMob from "@/assets/img/FooterLogoMob.png";
import Logo from "@/assets/img/Logo.png";
import logoPartner1 from "@/assets/img/Home/logoPartner1.png";
import logoPartner2 from "@/assets/img/Home/logoPartner2.png";
import CustomButton from "@/ui/CustomButton.vue";
import BtnArrow from "@/assets/icons/BtnArrow.vue";

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
  {
    title: "Newsletter",
    links: [
      { link: "Subscribe to our newsletter! " },
      { link: "We value your privacy." },
    ],
    btn: true,
  },
];

const FooterSoc = [
  {
    icon: X,
    link: "https://x.com/IPOGENIE",
  },
  {
    icon: TgIcon,
    link: "https://t.me/IPO_GENIE",
  },
  {
    icon: Inst,
    link: "",
  },
  {
    icon: Coinmarket,
    link: "",
  },
];
</script>

<template>
  <div class="px-5 pb-8 mt-[85px] max-lg:mt-16 max-md:mt-10">
    <div
      class="flex justify-between h-full relative overflow-hidden min-h-[730px] rounded-[60px] bg-[#16151A] gap-[77px] xl:!px-[100px] base-x-p py-[130px] max-xl:py-[100px] max-xl:flex-col-reverse max-lg:rounded-[30px] max-lg:py-14 max-md:py-9 max-md:h-full"
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
          <a
            v-for="(soc, i) in FooterSoc"
            :href="soc.link"
            :key="i"
            class="aspect-square w-14 rounded-lg cursor-pointer flex justify-center items-center bg-[#FF5B00] max-lg:w-10 transition-all duration-300 hover:rotate-2 hover:scale-110 hover:bg-[#e45006]"
          >
            <component :is="soc.icon" class="max-lg:w-6 aspect-square" />
          </a>
        </div>
        <div>
          <div
            class="flex z-20 gap-4 items-center max-md:flex-col mb-3 max-md:gap-[10px] max-md:hidden"
          >
            <div class="text-sm max-md:text-xs whitespace-nowrap">
              Audited by :
            </div>
            <div class="flex gap-4 items-center max-md:gap-5">
              <div class="w-[110px] h-7 max-md:w-[95px] max-md:h-auto">
                <img :src="logoPartner1" />
              </div>
              <svg
                class="max-md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="1"
                height="31"
                viewBox="0 0 1 31"
                fill="none"
              >
                <path d="M0.5 0L0.500001 31" stroke="white" />
              </svg>
              <div class="w-[103px] h-6 max-md:w-[95px] max-md:h-auto">
                <img :src="logoPartner2" />
              </div>
            </div>
          </div>
          <div
            class="text-lg whitespace-nowrap leading-[160%] max-lg:text-base max-md:text-xs"
          >
            © 2025 IPO. All Rights Reserved.
          </div>
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
          <div class="text-2xl font-bold whitespace-nowrap leading-[80%]">
            {{ link.title }}
          </div>
          <div class="flex flex-col gap-5 max-md:gap-2">
            <div
              v-for="(item, index) in link.links"
              :key="index"
              class="font-inter whitespace-nowrap cursor-pointer text-lg leading-[80%] max-md:text-sm transition-all duration-300 hover:text-[#FF5B00] hover:translate-x-1"
            >
              {{ item.link }}
            </div>
          </div>

          <div
            v-if="link.btn"
            class="flex self-stretch gap-2 items-center max-md:items-start max-md:flex-col max-md:gap-1"
          >
            <input
              placeholder="Enter your Email"
              class="py-3 px-5 max-md:p-[10px] rounded-lg placeholder:text-[#737373] placeholder:text-sm max-md:placeholder:text-[10px] bg-white text-[#737373] text-sm max-md:text-[10px]"
            />
            <div
              class="w-10 h-full cursor-pointer justify-center rounded-md group items-center flex max-md:hidden max-md:w-6 max-md:h-6"
              :style="{ background: '#FF5B00' }"
            >
              <BtnArrow
                strokeColor="#000"
                class="max-md:w-2 max-md:h-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div class="hidden max-md:flex">
              <CustomButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

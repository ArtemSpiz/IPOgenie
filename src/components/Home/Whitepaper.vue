<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import WhitepaperBg from "@/assets/img/Home/WhitepaperBg.png";
import WhitepaperImg1 from "@/assets/img/Home/WhitepaperImg1.png";
import WhitepaperBgMob from "@/assets/img/Home/WhitepaperBgMob.png";

const isMobile = window.innerWidth < 1024;
</script>

<template>
  <div
    class="px-[22px] max-w-[2000px] mx-auto mt-[80px] max-lg:mt-[60px] max-md:mt-9 max-md:px-3"
  >
    <div
      class="bg-[#16151A] py-10 relative rounded-[60px] overflow-hidden base-x-p h-[830px] flex flex-col justify-center gap-9 max-2xl:justify-start max-lg:gap-7 max-lg:rounded-[40px] max-md:gap-3 max-md:items-start max-md:h-[570px] max-md:rounded-[20px]"
    >
      <div
        class="absolute right-0 top-0 h-full w-auto max-lg:top-auto max-lg:bottom-0 max-lg:w-full max-lg:h-auto"
      >
        <img :src="isMobile ? WhitepaperBgMob : WhitepaperBg" />
      </div>

      <div
        class="absolute right-[-20px] z-0 w-[530px] top-1/2 -translate-y-1/2 h-auto max-2xl:w-[400px] max-2xl:top-auto max-2xl:-translate-y-0 max-2xl:bottom-[20px] max-md:w-[254px]"
      >
        <img :src="WhitepaperImg1" />
      </div>

      <div class="flex flex-col gap-9 z-10 max-md:gap-5">
        <div class="flex flex-col gap-5">
          <div class="text-2xl font-light max-md:hidden">
            AI Layer-1 blockchain
          </div>
          <div class="title">IPO Whitepaper</div>
        </div>

        <div class="flex flex-col gap-5 max-w-[760px]">
          <div class="description">
            Explore the whitepaper to understand how IPO Genie is building the
            world’s first AI Layer-1 blockchain for private-market investing.See
            how our technology unlocks early-stage opportunities, enhances
            crypto presale security, and powers a scalable Web3 ecosystem driven
            by intelligent automation.
          </div>
          <div class="description">
            Discover the architecture behind our AI consensus, token utility,
            deal-scoring engine, governance model, and multi-chain integrations
            - all designed to create a smarter, more accessible blockchain
            future.
          </div>
        </div>
      </div>

      <div
        class="flex items-center gap-[14px] max-md:items-start max-md:flex-col max-md:gap-3 max-md:self-stretch"
      >
        <CustomButton text="Buy $IPO Now" />
        <CustomButton
          text="View Whitepaper"
          bg-color="transparent"
          arrow-color="#000"
          border-color="#fff"
          class="!w-max gap-3"
        />
      </div>
    </div>
  </div>
</template>

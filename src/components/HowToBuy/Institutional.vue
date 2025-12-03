<script setup>
import CustomButton from "@/ui/CustomButton.vue";
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-16 base-x-p max-w-[2000px] mx-auto mt-[110px] max-lg:mt-[90px] max-md:mt-[70px] max-lg:gap-7"
  >
    <div class="flex flex-col text-black items-center gap-8 text-center">
      <div class="title max-w-[730px]">
        Institutional <span class="sectitle">Grade Retail</span> Accessible
      </div>
      <div class="description max-w-[890px]">
        You are not just swapping tokens; you are securing a position in the
        future of private equity. Our smart contracts handle the heavy
        lifting—automating compliance, verifying allocations, and securing your
        entry on the blockchain. No distinct "accredited investor" paperwork is
        required at this stage; just connect, contribute, and let the Genie
        handle the diligence.
      </div>
      <div
        class="max-w-[670px] font-inter text-[32px] font-extrabold !leading-[80%] max-lg:text-2xl"
      >
        Your allocation is recorded on-chain instantly. Your liquidity is
        secured.
      </div>
    </div>

    <CustomButton text="Buy Before its too late" class="!w-max gap-5" />
  </div>
</template>

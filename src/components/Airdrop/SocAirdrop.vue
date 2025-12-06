<template>
  <h3
    class="text-xl mt-[70px] md:text-2xl lg:text-3xl font-bold text-black text-center mb-6"
  >
    Join the real-time conversation
  </h3>

  <div class="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <SocialCard
      title="Join Telegram Chat"
      description="24/7 Live Support & Community"
      card-class="bg-[#26A4E2]"
    >
      <template #icon>
        <Telegram />
      </template>
    </SocialCard>

    <SocialCard
      title="Follow on X"
      description="Latest Announcements & Alpha"
      card-class="bg-black"
      icon-wrapper-class="w-8 h-8 flex items-center justify-center"
    >
      <template #icon>
        <X />
      </template>
    </SocialCard>
  </div>
</template>

<script setup>
import Telegram from "@/assets/icons/Telegram.vue";
import SocialCard from "./SocialCard.vue";
import X from "@/assets/icons/X.vue";
</script>

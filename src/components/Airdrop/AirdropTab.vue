<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-sm">
    <!-- Gray Bar -->
    <div class="h-4 bg-[#d9d9d9] mt-1"></div>

    <div class="md:p-10 lg:p-12 px-6 py-6">
      <!-- Next Round Loading -->
      <div class="text-center mb-10">
        <h2
          class="text-3xl font-inter md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight"
        >
          ⏸️ Next Round Loading...
        </h2>
        <p
          class="mt-6 text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed"
        >
          The snapshot for the previous epoch has been taken. We are currently
          calculating <span class="font-bold">Reputation Scores</span> for the
          next distribution phase.
        </p>
      </div>

      <!-- Email Subscription -->
      <EmailSubscription />

      <!-- Join Conversation -->
    
      <!-- Social Cards -->
      <SocAirdrop />
    </div>
  </div>
</template>

<script setup>
import EmailSubscription from "./EmailSubscription.vue";
import SocAirdrop from "./SocAirdrop.vue";
</script>

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
      <h3
        class="text-xl  md:text-2xl lg:text-3xl font-bold text-black text-center mb-6"
      >
        Join the real-time conversation
      </h3>

      <!-- Social Cards -->
      <div class="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <SocialCard
          title="Join Telegram Chat"
          description="24/7 Live Support & Community"
          card-class="bg-[#26A4E2]"
        >
          <template #icon>
            <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#5BC7FF"></circle>
              <path
                d="M33.2 14.8L29.6 33.2C29.6 33.2 29.2 34.4 27.8 33.8L20.6 28.4L17.4 27L12.2 25.2C12.2 25.2 11.4 24.8 11.4 24C11.4 23.2 12.2 22.8 12.2 22.8L31.8 14.6C31.8 14.6 33.2 13.8 33.2 14.8Z"
                fill="white"
              ></path>
            </svg>
          </template>
        </SocialCard>

        <SocialCard
          title="Follow on X"
          description="Latest Announcements & Alpha"
          card-class="bg-black"
          icon-wrapper-class="w-8 h-8 flex items-center justify-center"
        >
          <template #icon>
            <svg
              class="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              ></path>
            </svg>
          </template>
        </SocialCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailSubscription from "./EmailSubscription.vue";
import SocialCard from "./SocialCard.vue";
</script>

<template>
  <div
    class="bg-[url('@/assets/img/Airdrop/bgNext.png')] w-[80%] mx-auto bg-cover bg-bottom bg-no-repeat rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden mb-10"
  >
    <div class="relative z-10 text-center">
      <h3
        class="text-xl font-inter md:text-2xl lg:text-3xl font-bold text-white tracking-tight"
      >
        Don't let the next signal miss you.
      </h3>
      <p
        class="mt-4 text-sm md:text-base lg:text-lg text-white max-w-xl mx-auto"
      >
        High-tier rewards are time-sensitive. Join the Priority Alert list to be
        notified the second the next Quest goes live.
      </p>

      <!-- Email Input -->
      <div
        class="mt-6 md:mt-8 flex flex-col gap-3 justify-center items-center max-w-xl mx-auto"
      >
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email address"
          class="w-full md:flex-1 px-5 py-4 rounded-2xl text-gray-500 text-base outline-none"
          style="font-family: 'Poppins', sans-serif"
          @keyup.enter="handleSubmit"
        />
        <CustomButton
          @click="handleSubmit"
          text="Submit"
          text-color="#fff"
          bg-color="#16151A"
          bg-arrow="#FF5B00"
          arrow-color="#000"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import bgNext from "@/assets/img/Airdrop/bgNext.png";
import CustomButton from "@/ui/CustomButton.vue";
import { ref } from "vue";

const email = ref("");

const handleSubmit = () => {
  if (email.value) {
    console.log("Submitting email:", email.value);
    // Add your email submission logic here
    email.value = "";
  }
};
</script>

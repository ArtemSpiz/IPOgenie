<template>
  <div class="bg-[#FF5C01] py-4 sm:py-6 px-4 sm:px-8">
    <div class="flex text-white gap-x-3 sm:gap-x-8 gap-y-8 justify-center">
      <!-- Days -->
      <div class="text-center">
        <p
          class="text-[70px] leading-[80%] max-lg:text-6xl max-md:text-[52px] font-extrabold font-inter"
        >
          {{ days }}
        </p>
        <p class="text-xs sm:text-base font-extrabold font-inter">Days</p>
      </div>

      <div class="flex flex-col justify-center gap-2 sm:gap-4">
        <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
        <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
      </div>

      <!-- Hours -->
      <div class="text-center">
        <p
          class="text-[70px] leading-[80%] max-lg:text-6xl max-md:text-[52px] font-extrabold font-inter"
        >
          {{ hours }}
        </p>
        <p class="text-xs sm:text-base font-extrabold font-inter">Hours</p>
      </div>

      <div class="flex flex-col justify-center gap-2 sm:gap-4">
        <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
        <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
      </div>

      <!-- Minutes -->
      <div class="text-center">
        <p
          class="text-[70px] leading-[80%] max-lg:text-6xl max-md:text-[52px] font-extrabold font-inter"
        >
          {{ minutes }}
        </p>
        <p class="text-xs sm:text-base font-extrabold font-inter">Min</p>
      </div>
    </div>

    <div class="flex items-center justify-center gap-2 mt-3 max-md:mt-0">
      <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
      <p class="text-sm font-semibold text-white font-inter">
        Live Status: Open
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let intervalId = null;

// Створюємо дату завершення тільки 1 раз
const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);
endDate.setHours(endDate.getHours() + 12);
endDate.setMinutes(endDate.getMinutes() + 45);

const updateCountdown = () => {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    days.value = "00";
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
    clearInterval(intervalId);
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.value = String(d).padStart(2, "0");
  hours.value = String(h).padStart(2, "0");
  minutes.value = String(m).padStart(2, "0");
  seconds.value = String(s).padStart(2, "0");
};

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section class="mx-auto max-w-[2000px] mt-8 px-4">
    <div
      class="sm:px-8 lg:px-16 md:py-16 text-white bg-[#16151a] rounded-[2.5rem] pt-14 pr-4 pb-14 pl-4"
    >
      <!-- Header -->
      <div class="max-w-4xl mx-auto gap-4 text-center mb-12">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Select <span class="italic">your</span> alloy
        </h2>
        <p class="text-gray-400 text-lg max-w-[570px] mx-auto">
          Forged from aerospace-grade steel. Optimized for global commerce.
          Choose your level of access.
        </p>
      </div>

      <!-- Carousel Container -->
      <div
        class="flex flex-col lg:flex-row items-center gap-8 relative"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
      >
        <!-- Left Carousel - Card Images -->
        <div class="flex-1 w-full lg:w-auto">
          <div
            class="relative overflow-hidden md:rounded-3xl cursor-grab active:cursor-grabbing select-none"
          >
            <div
              class="flex transition-transform duration-500 ease-out"
              :style="{
                transform: `translateX(calc(-${
                  currentSlide * 55
                }% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-out',
              }"
            >
              <div
                v-for="(alloy, index) in alloys"
                :key="index"
                class="min-w-[70%] px-4"
              >
                <div
                  :class="`rounded-3xl overflow-hidden bg-gradient-to-br  flex items-center justify-center shadow-2xl`"
                >
                  <img
                    :src="alloy.image"
                    :alt="alloy.name"
                    class="w-[350px] h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Center Gradient Line -->
        <div class="hidden lg:flex my-12 relative justify-center">
          <div
            class="h-80 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
          ></div>
        </div>

        <!-- Right Carousel - Info Columns -->
        <div class="flex-1 w-full lg:w-auto">
          <div
            class="relative overflow-hidden md:rounded-3xl p-4 md:p-8 cursor-grab active:cursor-grabbing select-none"
          >
            <div
              class="flex transition-transform duration-500 ease-out"
              :style="{
                transform: `translateX(calc(-${
                  currentSlide * 100
                }% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-out',
              }"
            >
              <div
                v-for="(column, index) in infoColumns"
                :key="index"
                class="min-w-full px-4"
              >
                <div
                  class="space-y-6 text-[9px] leading-relaxed text-neutral-300"
                >
                  <p v-for="(paragraph, pIndex) in column" :key="pIndex">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(1);
const isDragging = ref(false);
const startPos = ref(0);
const dragOffset = ref(0);
import AlloyCard1 from "@/assets/img/Wallet/AlloyCard.png";
import AlloyCard2 from "@/assets/img/Wallet/AlloyCard.png";
import AlloyCard3 from "@/assets/img/Wallet/AlloyCard.png";

const alloys = [
  {
    name: "Bronze",
    image: AlloyCard1,
  },
  {
    name: "Silver",
    image: AlloyCard2,
  },
  {
    name: "Gold",
    image: AlloyCard3,
  },
];

const infoColumns = [
  [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
  [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
  [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
];

// Touch Events
const handleTouchStart = (e) => {
  isDragging.value = true;
  startPos.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  if (!isDragging.value) return;
  const currentPos = e.touches[0].clientX;
  dragOffset.value = currentPos - startPos.value;
};

const handleTouchEnd = () => {
  if (!isDragging.value) return;

  const threshold = 50;

  if (dragOffset.value < -threshold && currentSlide.value < alloys.length - 1) {
    currentSlide.value++;
  } else if (dragOffset.value > threshold && currentSlide.value > 0) {
    currentSlide.value--;
  }

  isDragging.value = false;
  dragOffset.value = 0;
};

// Mouse Events
const handleMouseDown = (e) => {
  isDragging.value = true;
  startPos.value = e.clientX;
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  const currentPos = e.clientX;
  dragOffset.value = currentPos - startPos.value;
};

const handleMouseUp = () => {
  if (!isDragging.value) return;

  const threshold = 50;

  if (dragOffset.value < -threshold && currentSlide.value < alloys.length - 1) {
    currentSlide.value++;
  } else if (dragOffset.value > threshold && currentSlide.value > 0) {
    currentSlide.value--;
  }

  isDragging.value = false;
  dragOffset.value = 0;
};
</script>

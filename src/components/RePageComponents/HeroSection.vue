<template>
  <section
    class="flex items-center max-w-[2055px] mx-auto flex-col base-x-p mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28"
  >
    <div
      class="flex flex-col mx-auto items-center text-center gap-8 max-md:gap-5"
    >
      <h1 class="title text-black max-w-[700px]">
        <template v-for="(part, i) in heading" :key="i">
          <span v-if="part.type === 'accent'" class="sectitle">
            {{ part.text }}
          </span>

          <span v-else>
            {{ part.text }}
          </span>

          {{ i < heading.length - 1 ? " " : "" }}
        </template>
      </h1>

      <div class="flex flex-col gap-3">
        <p class="max-w-[865px] text-black mx-auto description">
          {{ description }}
        </p>
        <p
          v-if="description2"
          class="max-w-[865px] text-black mx-auto description"
        >
          {{ description2 }}
        </p>
      </div>

      <div class="flex items-center gap-3">
        <CustomButton :text="textBtn" />
        <CustomButton
          v-if="secBtn"
          text="Read Whitepaper"
          bg-color="transparent"
          text-color="#000"
          border-color="#000"
          arrow-color="#fff"
          bg-arrow="#FF5B00"
          class="!w-max gap-5"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomButton from "@/ui/CustomButton.vue";

defineProps({
  heading: {
    type: Array,
    default: () => [
      { text: "AI Powered", type: "accent" },
      { text: "Deal Discovery", type: "default" },
    ],
  },
  description: {
    type: String,
    default:
      "Unlock institutional-grade AI sourcing. IPO Genie scans private markets, evaluates emerging companies, and delivers real-time signals tailored to your thesis.",
  },
  description2: {
    type: String,
  },
  textBtn: {
    type: String,
    default: "Buy $IPO Now",
  },
  secBtn: {
    type: Boolean,
    default: false,
  },
});
</script>

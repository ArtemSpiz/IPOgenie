<script setup>
import BtnArrow from "@/assets/icons/BtnArrow.vue";
import { computed } from "vue";

const props = defineProps({
  bgColor: {
    type: String,
    default: "#FF5B00",
  },
  borderColor: {
    type: String,
    default: "transparent",
  },
  arrowColor: {
    type: String,
  },
  text: {
    type: String,
    default: "Buy Now",
  },
  textColor: {
    type: String,
  },
  bgArrow: {
    type: String,
    default: "#fff",
  },
});

const styleObject = computed(() => ({
  backgroundColor: props.bgColor,
  borderColor: props.borderColor,
  color: props.textColor,
}));
</script>

<template>
  <button
    class="flex items-center z-10 w-[210px] border rounded-2xl text-base justify-between pl-[18px] pr-[11px] py-[10px] font-medium max-md:py-[5px] max-md:rounded-lg max-md:pl-3 max-md:text-[10px] max-md:pr-1 max-md:w-[125px]"
    :style="styleObject"
  >
    {{ text }}

    <div
      class="w-10 h-10 justify-center rounded-md items-center flex max-md:w-6 max-md:h-6"
      :style="{ background: bgArrow }"
    >
      <BtnArrow :strokeColor="arrowColor" class="max-md:w-2 max-md:h-2" />
    </div>
  </button>
</template>

<style scoped></style>

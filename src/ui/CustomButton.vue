<script setup>
import BtnArrow from "@/assets/icons/BtnArrow.vue";
import { computed } from "vue";

const props = defineProps({
  bgColor: { type: String, default: "#FF5B00" },
  borderColor: { type: String, default: "transparent" },
  arrowColor: { type: String },
  text: { type: String, default: "Buy Now" },
  textColor: { type: String },
  bgArrow: { type: String, default: "#fff" },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  type: { type: String, default: "button" },

  /** NEW PROPS **/
  link: { type: String, default: null }, // external link
  to: { type: [String, Object], default: null }, // router-link

  icon: { type: String, default: null },
});

const emit = defineEmits(["click"]);

const styleObject = computed(() => ({
  backgroundColor: props.bgColor,
  borderColor: props.borderColor,
  color: props.textColor,
}));

const handleClick = (event) => {
  if (!props.disabled && !props.loading && !props.link && !props.to) {
    emit("click", event);
  }
};
</script>

<template>
  <!-- If router link -->
  <router-link
    v-if="to"
    :to="to"
    class="flex items-center z-10 w-[210px] border rounded-2xl text-base justify-between pl-[18px] pr-[11px] py-[10px] font-medium max-md:py-[5px] max-md:rounded-lg max-md:pl-3 max-md:text-[10px] max-md:pr-1 max-md:w-[125px] transition-all duration-200 group hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
    :style="styleObject"
  >
    <span>{{ text }}</span>
    <div
      class="w-10 h-10 justify-center rounded-md items-center flex max-md:w-6 max-md:h-6"
      :style="{ background: bgArrow }"
    >
      <BtnArrow
        :strokeColor="arrowColor"
        class="max-md:w-2 max-md:h-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </div>
  </router-link>

  <!-- If external link -->
  <a
    v-else-if="link"
    :href="link"
    class="flex items-center z-10 w-[210px] border rounded-2xl text-base justify-between pl-[18px] pr-[11px] py-[10px] font-medium max-md:py-[5px] max-md:rounded-lg max-md:pl-3 max-md:text-[10px] max-md:pr-1 max-md:w-[125px] transition-all duration-200 group hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
    :style="styleObject"
  >
    <span>{{ text }}</span>
    <div
      class="w-10 h-10 justify-center rounded-md items-center flex max-md:w-6 max-md:h-6"
      :style="{ background: bgArrow }"
    >
      <BtnArrow
        :strokeColor="arrowColor"
        class="max-md:w-2 max-md:h-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </div>
  </a>

  <!-- Default button -->
  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :aria-label="text"
    :aria-busy="loading"
    class="flex items-center z-10 w-[210px] border rounded-2xl text-base justify-between pl-[18px] pr-[11px] py-[10px] font-medium max-md:py-[5px] max-md:rounded-lg max-md:pl-3 max-md:text-[10px] max-md:pr-1 max-md:w-[125px] transition-all duration-200 group hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
    :style="styleObject"
    @click="handleClick"
  >
    <span>{{ text }}</span>
    <div
      v-if="!icon"
      class="w-10 h-10 justify-center rounded-md items-center flex max-md:w-6 max-md:h-6"
      :style="{ background: bgArrow }"
    >
      <BtnArrow
        :strokeColor="arrowColor"
        class="max-md:w-2 max-md:h-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </div>

    <component v-if="icon" :is="icon" />
  </button>
</template>

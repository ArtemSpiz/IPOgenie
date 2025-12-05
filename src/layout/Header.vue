<script setup>
import { ref, watch } from "vue";
import Logo from "@/assets/img/Logo.png";
import LogoBlack from "@/assets/img/LogoBlack.png";
import Burger from "@/assets/icons/Burger.vue";
import Cross from "@/assets/icons/Cross.vue";
import HeaderArrow from "@/assets/icons/HeaderArrow.vue";
import { useRoute } from "vue-router";

defineProps({
  colorBg: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(false);
const openDropdownIndex = ref(null);

const HeaderLinks = [
  {
    title: "About",
    links: [
      { title: "Wallet", link: "/wallet" },
      { title: "How To Buy", link: "/how-to-buy" },
      { title: "Roadmap", link: "/roadmap" },
      { title: "Tokenomics", link: "/tokenomics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "AI Powered", link: "/ai-powered" },
      { title: "Faas", link: "/faas" },
      { title: "Index Funds", link: "/index-funds" },
      { title: "Behavior", link: "/behavior" },
      { title: "Marketplace", link: "/marketplace" },
      { title: "Insurance", link: "/insurance" },
    ],
  },
  { title: "How It Works", link: "/how-it-works" },
  { title: "Airdrop", link: "/airdrop" },
  { title: "Blogs", link: "/news" },
  { title: "Contact", link: "/contact" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const toggleLinks = (index) => {
  openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
};

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
    openDropdownIndex.value = null;
    document.body.style.overflow = "";
  }
);
</script>

<template>
  <div
    :class="[
      'absolute left-0 right-0 top-0 pt-7 z-50 flex justify-center px-4',
    ]"
  >
    <div
      :class="[
        'flex justify-between  items-center rounded-[30px] py-5 px-10 w-full max-w-7xl max-md:px-5 max-md:py-3',
        isOpen
          ? 'bg-transparent'
          : colorBg
          ? 'bg-black/5 backdrop-blur-sm'
          : 'bg-transparent',
      ]"
    >
      <router-link
        to="/"
        class="h-10 z-50 w-[190px] max-xl:h-auto max-xl:w-[115px]"
      >
        <img :src="colorBg ? LogoBlack : Logo" alt="Logo" class="z-50" />
      </router-link>

      <div class="flex gap-7 items-center">
        <div class="flex z-50 items-center gap-7 max-xl:gap-5 max-lg:hidden">
          <div
            v-for="(item, index) in HeaderLinks"
            :key="index"
            class="relative group"
          >
            <div
              class="flex items-center gap-1 cursor-pointer text-lg font-medium transition-colors duration-300"
              :class="colorBg ? 'text-black' : 'text-white'"
              @click="item.links && toggleLinks(index)"
            >
              <router-link
                v-if="!item.links"
                :to="item.link"
                :class="[
                  'relative flex gap-1 items-center text-lg font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-[0.5px] after:h-[2px] after:transition-all after:duration-300',

                  item.title === 'Airdrop'
                    ? 'text-lg italic !text-white rounded-[10px] bg-black px-3 py-1'
                    : 'hover:text-[#FF5B00] after:bg-gradient-to-r after:from-[#FF5B00] after:to-[#FFAA5B] after:w-0 hover:after:w-full',

                  colorBg ? 'text-black' : 'text-white',
                ]"
              >
                {{ item.title }}
              </router-link>

              <span
                v-else
                :class="[
                  'relative flex gap-1 items-center text-lg font-medium transition-colors duration-300 hover:text-[#FF5B00] after:absolute after:left-0 after:bottom-[0.5px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FF5B00] after:to-[#FFAA5B] after:transition-all after:duration-300 hover:after:w-full',
                  colorBg ? 'text-black' : 'text-white',
                ]"
              >
                {{ item.title }}
              </span>

              <div
                v-if="item.links"
                class="transition-all duration-300 ease-in-out"
                :class="openDropdownIndex === index ? 'rotate-180' : ''"
              >
                <HeaderArrow
                  class="transition-colors duration-300 group-hover:[&>path]:stroke-[#FF5B00]"
                />
              </div>
            </div>

            <transition name="fade">
              <div
                v-if="openDropdownIndex === index && item.links"
                :class="[
                  'absolute left-0 top-full mt-2 rounded-xl shadow-lg py-3 px-5 flex flex-col gap-2 min-w-[160px] z-50 transition-all duration-300',
                  colorBg
                    ? 'bg-black text-white'
                    : 'bg-white text-black backdrop-blur-md',
                ]"
              >
                <router-link
                  v-for="sub in item.links"
                  :key="sub.title"
                  :to="sub.link"
                  class="text-base hover:text-[#FF5B00] transition-colors duration-300"
                  @click="isOpen = false"
                >
                  {{ sub.title }}
                </router-link>
              </div>
            </transition>
          </div>
        </div>

        <div class="flex z-50 items-center gap-4">
          <button
            class="py-[18px] px-[67px] rounded-2xl bg-[#FF5B00] text-base font-medium max-xl:px-[27px] max-lg:py-[9px] max-xl:text-xs max-md:text-[10px] max-lg:min-w-[100px] max-lg:rounded-[8px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,91,0,0.5)]"
          >
            Join Now
          </button>

          <div
            class="w-6 h-6 flex max-lg:flex lg:hidden cursor-pointer"
            @click="toggleMenu"
          >
            <component
              :is="isOpen ? Cross : Burger"
              :fill-color="colorBg ? '#000' : '#fff'"
            />
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        :class="colorBg ? 'text-black bg-white' : 'text-white'"
        class="absolute h-screen pt-[100px] top-[0px] backdrop-blur-md left-0 right-0 shadow-lg rounded-b-2xl py-5 flex flex-col items-start px-10 gap-4 z-40"
      >
        <div v-for="(item, index) in HeaderLinks" :key="index" class="w-full">
          <div
            class="flex justify-between items-center text-lg font-medium cursor-pointer mb-2"
            @click="item.links ? toggleLinks(index) : (isOpen = false)"
          >
            <router-link
              :to="item.link"
              :class="[
                'transition-colors duration-300',
                item.title === 'Airdrop'
                  ? [
                      'text-lg italic rounded-[10px] px-3 py-1',
                      colorBg ? 'bg-black text-white' : 'bg-white text-black',
                    ]
                  : 'hover:text-[#FF5B00]',
              ]"
            >
              {{ item.title }}
            </router-link>

            <HeaderArrow
              v-if="item.links"
              class="transition-all duration-300"
              :class="openDropdownIndex === index ? 'rotate-180' : ''"
            />
          </div>

          <transition name="fade">
            <div
              v-if="openDropdownIndex === index && item.links"
              class="flex flex-col gap-2 ml-3"
            >
              <router-link
                v-for="sub in item.links"
                :key="sub.title"
                :to="sub.link"
                class="text-base hover:text-[#FF5B00] transition-colors duration-300"
                @click="isOpen = false"
              >
                {{ sub.title }}
              </router-link>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

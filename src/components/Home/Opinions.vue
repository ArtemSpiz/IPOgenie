<script setup>
import MainVideo from "@/assets/img/Home/OpinionsImg1.png";
import Logo from "@/assets/img/Home/OpinionsLogo.png";
import Video1 from "@/assets/img/Home/OpinionsImg2.png";
import Video2 from "@/assets/img/Home/OpinionsImg3.png";
import Video3 from "@/assets/img/Home/OpinionsImg4.png";
import Video4 from "@/assets/img/Home/OpinionsImg5.png";

const OpinionsVideos = [
  {
    image: Video1,
  },
  {
    image: Video2,
  },
  {
    image: Video3,
  },
  {
    image: Video4,
  },
];
</script>

<template>
  <div
    class="flex flex-col base-x-p justify-center items-center gap-3 mt-[138px]"
  >
    <div class="flex text-black flex-col gap-2 text-center items-center">
      <div class="title">
        Key <span class="sectitle">Opinions</span> on IPO Genie
      </div>
      <div class="description max-w-[690px]">
        Gain a deeper look into how various industry minds perceive IPO Genie’s
        approach to investment discovery—highlighting its precision, automation,
        and ability to surface high-quality opportunities.
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <div class="w-full max-w-[860px] h-auto">
        <img :src="MainVideo" />
      </div>

      <div class="flex items-start justify-between">
        <div class="flex items-center gap-[10px]">
          <div class="w-12 aspect-square">
            <img :src="Logo" />
          </div>
          <div class="flex flex-col gap-2">
            <div class="text-black text-2xl font-bold leading-[80%]">
              The Crypto Hassi
            </div>
            <div class="text-[#989898] text-base font-medium leading-[80%]">
              1.03M Subscribers
            </div>
          </div>
        </div>
        <div class="text-[#989898] text-base font-medium leading-[80%]">
          2 Weeks ago
        </div>
      </div>

      <div class="flex gap-3">
        <div
          v-for="(video, i) in OpinionsVideos"
          :key="i"
          class="w-[210px] overflow-hidden h-auto rounded-[15px]"
        >
          <img :src="video.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

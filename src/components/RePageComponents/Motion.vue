<script setup>
import MotionImage1 from "@/assets/img/RePages/MotionImage1.png";
import MotionImage2 from "@/assets/img/RePages/MotionImage2.png";
import MotionImage3 from "@/assets/img/RePages/MotionImage3.png";
import MotionImage4 from "@/assets/img/RePages/MotionImage4.png";

const MotionCards = [
  {
    title: "Total Data Ingestion",
    text: "We don't just read the news. Our engine connects to the raw pulse of the market—ingesting git commits, hiring logs, and funding wires in real-time to build a living profile of every startup.",
    image: MotionImage1,
  },
  {
    title: "Multi-Vector Scoring",
    text: "Rigorous 50-point inspection pipeline covering code quality, founder history, and velocity.",
    image: MotionImage2,
  },
  {
    title: "Precision Matching",
    text: "The AI acts as your gatekeeper. It filters out noise based on your specific thesis and sector focus.",
    image: MotionImage3,
  },
  {
    title: "Real-Time Pulse",
    text: "Stop chasing deals. Our Sentient Signal Agents monitor the ecosystem 24/7, notifying you instantly when a target hits your KPIs or when a hidden risk emerges.",
    image: MotionImage4,
    color: true,
  },
];
</script>

<template>
  <section
    class="mt-[110px] mx-auto max-w-[2000px] flex flex-col items-center justify-center base-x-p max-lg:mt-20 max-md:mt-[50px]"
  >
    <div class="title text-center text-black">
      Intelligence in <span class="sectitle">Motion</span>
    </div>
    <div
      class="description text-center mt-8 text-black max-w-[760px] mx-auto max-md:mt-3"
    >
      From chaos to clarity. See how IPO Genie transforms millions of raw data
      points into your next best investment.
    </div>

    <div
      class="grid mt-[90px] max-lg:mt-12 max-md:mt-8 grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,330px)] gap-x-3 gap-y-4 max-xl:grid-cols-[repeat(2,1fr)] max-md:grid-rows-[repeat(3,150px)]"
    >
      <div
        v-for="(card, i) in MotionCards"
        :key="i"
        :class="[
          'rounded-[20px] flex justify-between p-9 max-md:px-2 max-md:py-3 ',
          card.color
            ? 'bg-[linear-gradient(124deg,#FF5B00_16.64%,#DA132C_151.5%)] text-white'
            : 'bg-white text-black',
          i === 1 && 'flex-col',
          i === 2 && 'flex-col-reverse max-md:flex-col',
          i === 3 && 'flex-col max-md:flex-row max-md:items-center',

          i === 0 && 'col-[1/3] row-[1/2] max-xl:col-[1/3] max-xl:row-[1/2]',
          i === 1 && 'col-[3/4] row-[1/2] max-xl:col-[1/2] max-xl:row-[2/3]',
          i === 2 && 'col-[1/2] row-[2/3] max-xl:col-[2/3] max-xl:row-[2/3]',
          i === 3 && 'col-[2/4] row-[2/3] max-xl:col-[1/3] max-xl:row-[3/4]',
        ]"
      >
        <div class="flex flex-col gap-3 max-md:gap-1">
          <div
            class="font-inter whitespace-nowrap text-2xl font-extrabold leading-[85%] max-md:text-base"
          >
            {{ card.title }}
          </div>
          <div
            class="text-lg max-w-[510px] leading-[140%] max-md:text-[10px] max-md:max-w-[245px]"
          >
            {{ card.text }}
          </div>
        </div>

        <div :class="[{ 'w-full items-end flex justify-end ': i === 3 }]">
          <div
            :class="[
              { 'h-full w-auto': i === 0 },
              { 'w-full h-auto max-md:w-auto max-md:h-[53px]': i === 1 },
              { 'w-[293px] h-auto max-md:h-12 max-md:w-auto': i === 2 },
              { 'w-auto h-[126px]  max-md:h-[73px]': i === 3 },
            ]"
          >
            <img :src="card.image" class="object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 284px);
}

@media (max-width: 768px) {
  .parent {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 125px);
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 3;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div4 {
    grid-area: 3 / 1 / 4 / 3;
  }
}

.div1 {
  grid-area: 1 / 1 / 2 / 3;
}
.div2 {
  grid-area: 1 / 3 / 2 / 4;
}
.div3 {
  grid-area: 2 / 1 / 3 / 2;
}
.div4 {
  grid-area: 2 / 2 / 3 / 4;
}
</style>

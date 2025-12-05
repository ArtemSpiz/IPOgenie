<script setup>
import { ref } from "vue";

const hoveredSegment = ref(null);

const TokenomicsCards = [
  {
    percents: "50%",
    name: "Presale",
    text: "Available for crypto presale participants with stage-based pricing.",
    value: 50,
    color: "#FF5B00",
  },
  {
    percents: "20%",
    name: "Liquidity & Exchanges",
    text: "Allocated to DEX/CEX liquidity to support smooth trading and stability.",
    value: 20,
    color: "#FF7C33",
  },
  {
    percents: "18%",
    name: "Community Rewards",
    text: "Released gradually based on ecosystem growth, activity, and milestones.",
    value: 18,
    color: "#FF9D66",
  },
  {
    percents: "7%",
    name: "Staking Rewards",
    text: "Released gradually based on ecosystem growth, activity, and milestones.",
    value: 7,
    color: "#FFBD99",
  },
  {
    percents: "5%",
    name: "Team",
    text: "Released gradually based on ecosystem growth, activity, and milestones.",
    value: 5,
    color: "#FFDECC",
  },
];

const TokenomicsPoints = [
  { title: "437B", subtitle: "Maximum amount of Coins", line: true },
  { title: "ERC-20", subtitle: "Token Standard", line: true },
  { title: "2 years", subtitle: "Team Vesting Time" },
];

const createDonutSegment = (startAngle, endAngle, index) => {
  const innerRadius = 100;
  const outerRadius = 180;
  const center = 250;
  const gap = 2; // Зазор між сегментами

  // Додаємо невеликі зазори між сегментами
  const adjustedStartAngle = startAngle + gap;
  const adjustedEndAngle = endAngle - gap;

  const startAngleRad = ((adjustedStartAngle - 90) * Math.PI) / 180;
  const endAngleRad = ((adjustedEndAngle - 90) * Math.PI) / 180;

  // Радіус заокруглення для кінців
  const cornerRadius = 8;

  const x1 = center + innerRadius * Math.cos(startAngleRad);
  const y1 = center + innerRadius * Math.sin(startAngleRad);
  const x2 = center + outerRadius * Math.cos(startAngleRad);
  const y2 = center + outerRadius * Math.sin(startAngleRad);
  const x3 = center + outerRadius * Math.cos(endAngleRad);
  const y3 = center + outerRadius * Math.sin(endAngleRad);
  const x4 = center + innerRadius * Math.cos(endAngleRad);
  const y4 = center + innerRadius * Math.sin(endAngleRad);

  const largeArcFlag = adjustedEndAngle - adjustedStartAngle > 180 ? 1 : 0;

  // Обчислюємо точки для заокруглених кутів
  const startOuterAngle = startAngleRad + cornerRadius / outerRadius;
  const startInnerAngle = startAngleRad + cornerRadius / innerRadius;
  const endOuterAngle = endAngleRad - cornerRadius / outerRadius;
  const endInnerAngle = endAngleRad - cornerRadius / innerRadius;

  return [
    `M ${center + innerRadius * Math.cos(startInnerAngle)} ${
      center + innerRadius * Math.sin(startInnerAngle)
    }`,
    `A ${innerRadius} ${innerRadius} 0 0 1 ${x1} ${y1}`,
    `Q ${x1} ${y1} ${
      center + (innerRadius + cornerRadius) * Math.cos(startAngleRad)
    } ${center + (innerRadius + cornerRadius) * Math.sin(startAngleRad)}`,
    `L ${center + (outerRadius - cornerRadius) * Math.cos(startAngleRad)} ${
      center + (outerRadius - cornerRadius) * Math.sin(startAngleRad)
    }`,
    `Q ${x2} ${y2} ${center + outerRadius * Math.cos(startOuterAngle)} ${
      center + outerRadius * Math.sin(startOuterAngle)
    }`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${
      center + outerRadius * Math.cos(endOuterAngle)
    } ${center + outerRadius * Math.sin(endOuterAngle)}`,
    `Q ${x3} ${y3} ${
      center + (outerRadius - cornerRadius) * Math.cos(endAngleRad)
    } ${center + (outerRadius - cornerRadius) * Math.sin(endAngleRad)}`,
    `L ${center + (innerRadius + cornerRadius) * Math.cos(endAngleRad)} ${
      center + (innerRadius + cornerRadius) * Math.sin(endAngleRad)
    }`,
    `Q ${x4} ${y4} ${center + innerRadius * Math.cos(endInnerAngle)} ${
      center + innerRadius * Math.sin(endInnerAngle)
    }`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${
      center + innerRadius * Math.cos(startInnerAngle)
    } ${center + innerRadius * Math.sin(startInnerAngle)}`,
    "Z",
  ].join(" ");
};

const getLabelPosition = (startAngle, endAngle, index) => {
  const midAngle = (startAngle + endAngle) / 2;
  let radius = 245;

  const center = 250;
  const angleRad = ((midAngle - 90) * Math.PI) / 180;

  return {
    x: center + radius * Math.cos(angleRad),
    y: center + radius * Math.sin(angleRad),
  };
};

const segments = (() => {
  let currentAngle = 0;
  return TokenomicsCards.map((card, index) => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + (card.value / 100) * 360;
    currentAngle = endAngle;
    return { startAngle, endAngle, index };
  });
})();
</script>

<template>
  <div
    class="w-full flex justify-between relative max-lg:flex-col max-lg:gap-8 max-md:rounded-[20px]"
  >
    <div class="w-full flex justify-between max-lg:flex-col-reverse gap-10">
      <div class="flex gap-6 flex-col max-2xl:max-w-[50%] max-lg:max-w-full">
        <div
          class="font-inter text-black flex leading-[80%] text-[32px] font-extrabold max-lg:text-2xl max-lg:w-full max-lg:justify-center"
        >
          Global Token Distribution
        </div>
        <div class="flex flex-col gap-[10px] max-lg:gap-[5px]">
          <div
            v-for="(card, i) in TokenomicsCards"
            :key="i"
            class="flex flex-col cursor-pointer gap-2"
            @mouseenter="hoveredSegment = i"
            @mouseleave="hoveredSegment = null"
          >
            <div
              class="text-lg w-max rounded-lg font-extrabold px-3 py-1 flex whitespace-nowrap flex-nowrap transition-all duration-300"
              :style="{
                backgroundColor: hoveredSegment === i ? card.color : '#16151A',
                transform: hoveredSegment === i ? 'md:scale(1.05)' : 'scale(1)',
              }"
            >
              {{ card.percents }} - {{ card.name }}
            </div>
            <div class="text-black text-sm leading-[140%]">
              {{ card.text }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="2xl:h-[350px] 2xl:my-auto 2xl:min-w-[490px] flex relative justify-center items-center max-2xl:absolute max-2xl:right-[-50px] max-2xl:top-1/2 max-2xl:-translate-y-1/2 max-lg:static max-lg:w-max max-lg:mx-auto max-lg:translate-y-0 max-lg:mt-8"
      >
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          class="max-w-full w-[530px] h-[350px] max-lg:w-[400px] max-md:h-[280px] max-md:w-[280px]"
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
              <feOffset dx="0" dy="6" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.25" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            v-for="segment in segments"
            :key="`segment-${segment.index}`"
            @mouseenter="hoveredSegment = segment.index"
            @mouseleave="hoveredSegment = null"
            :style="{
              transformOrigin: '250px 250px',
              transition: 'transform 0.3s ease, filter 0.3s ease',
            }"
          >
            <path
              :d="
                createDonutSegment(
                  segment.startAngle,
                  segment.endAngle,
                  segment.index
                )
              "
              :fill="TokenomicsCards[segment.index].color"
              class="cursor-pointer"
              :style="{
                transform:
                  hoveredSegment === segment.index ? 'scale(1.06)' : 'scale(1)',
                transformOrigin: '250px 250px',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                filter:
                  hoveredSegment === segment.index
                    ? 'url(#shadow) brightness(1.05)'
                    : 'none',
              }"
            />
          </g>

          <circle cx="250" cy="250" r="95" fill="white" />
        </svg>

        <div
          v-for="(card, i) in TokenomicsCards"
          :key="i"
          :class="[
            'absolute ',
            {
              '2xl:right-[40px] right-[70px] top-1/2 -translate-y-1/2  max-lg:right-[0px] max-lg:top-[65%] max-md:right-[-20px]':
                i === 0,
            },
            {
              'left-[110px] bottom-[-5px] max-2xl:left-[120px] max-lg:left-[70px] max-md:left-[40px] max-md:bottom-[-10px]':
                i === 1,
            },
            {
              'left-[15px] top-[52%] -translate-y-1/2 max-lg:left-[-30px] max-md:left-[-25px] max-md:top-[70%] ':
                i === 2,
            },
            {
              'left-[130px] top-[0px] max-lg:left-[80px] max-md:left-[30px]':
                i === 3,
            },
            {
              'right-[55%] top-[-15px] translate-x-1/2 max-md:top-[-10px] max-md:right-[60%]':
                i === 4,
            },
          ]"
        >
          <div
            class="text-black text-sm font-medium max-w-[80px] max-md:text-xs"
          >
            {{ card.name }}
          </div>
          <div
            :class="[
              'text-sm w-max font-medium py-1 px-3 rounded-lg max-md:text-xs',
              { 'bg-[#FF5B00]': i === 0 },
              { 'bg-[#FF7C33]': i === 1 },
              { 'bg-[#FF9D66]': i === 2 },
              { 'bg-[#FFBD99]': i === 3 },
              { 'bg-[#FFDECC]': i === 4 },
            ]"
          >
            {{ card.percents }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

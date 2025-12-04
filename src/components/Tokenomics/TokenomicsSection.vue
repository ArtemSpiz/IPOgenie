<template>
  <section
    class="mt-10 base-x-p text-center justify-center max-w-[2000px] mx-auto"
  >
    <h2 class="title mb-10 text-black">
      Fair Launch <span class="sectitle">Tokenomics</span>
    </h2>
    <h3
      class="text-2xl md:text-4xl font-semibold tracking-tight text-black mb-5"
    >
      A Community-First Economy
    </h3>
    <p
      class="description max-w-[865px] mx-auto mb-[100px] text-black max-lg:mb-10"
    >
      We believe in putting the power back in the hands of the investors. That's
      why 50% of our total supply is reserved strictly for the presale. No
      hidden whales. No rug pulls. Just a community-driven launch. $IPO is a
      Deflationary Utility Token built for long-term value.
    </p>
    <div
      class="flex relative flex-col-reverse lg:flex-row gap-12 gap-x-12 gap-y-12"
    >
      <!-- Allocation Table -->
      <div class="w-full max-w-[60%] max-lg:max-w-full">
        <div class="flex items-center gap-4 max-md:gap-2">
          <div
            class="bg-[#FF5B00] whitespace-nowrap text-white max-md:text-sm font-medium py-4 px-10 rounded-[10px] text-center max-lg:px-5 max-lg:py-2"
          >
            Allocation
          </div>
          <div
            class="bg-[#FF5B00] whitespace-nowrap text-white max-md:text-sm font-medium py-4 px-10 rounded-[10px] text-center max-lg:px-5 max-lg:py-2"
          >
            % of Supply
          </div>
          <div
            class="bg-[#FF5B00] whitespace-nowrap text-white max-md:text-sm font-medium py-4 px-10 rounded-[10px] text-center max-lg:px-5 max-lg:py-2"
          >
            Strategy
          </div>
        </div>
        <div class="rounded-[10px] mt-3 flex flex-col border border-black">
          <div
            v-for="(allocation, index) in TokenomicsCards"
            :key="index"
            class="flex flex-col"
          >
            <div
              :class="[
                'h-px w-full bg-black',
                index === TokenomicsCards.length ? 'hidden' : 'flex',
              ]"
            ></div>
            <div class="grid grid-cols-3 gap-0 items-center">
              <div class="py-4 px-6 font-medium text-black">
                {{ allocation.name }}
              </div>
              <div class="py-4 px-6 font-bold text-black text-center">
                {{ allocation.percentage }}
              </div>
              <div class="py-4 px-6 text-black text-start text-sm">
                {{ allocation.strategy }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Donut Chart (dynamic from file 1) -->
      <div
        class="flex right-0 top-1/2 -translate-y-1/2 absolute justify-center items-center max-lg:relative max-lg:translate-y-0 max-2xl:w-[430px] max-2xl:h-[450px] max-lg:h-auto max-lg:mx-auto max-md:max-w-[430px] max-md:w-full"
      >
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          class="max-w-full h-auto max-2xl:w-[430px] max-2xl:h-[450px] max-lg:h-auto"
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
        </svg>

        <div
          v-for="(card, index) in TokenomicsCards"
          :class="[
            'absolute pointer-events-none text-3xl font-bold max-md:text-2xl',
            {
              'right-[50px] top-1/2 -translate-y-1/2 max-[450px]:right-[12%]':
                index === 0,
            },
            {
              'bottom-[110px] left-[110px] max-[450px]:bottom-[20%] max-[450px]:left-[25%]':
                index === 1,
            },
            { 'top-[43%] left-[60px] max-[450px]:left-[13%]': index === 2 },
            {
              'top-[110px] left-[110px] max-[450px]:top-[20%] max-[450px]:left-[25%]':
                index === 3,
            },
            {
              'top-[70px] left-[160px] max-[450px]:top-[15%] max-[450px]:left-[38%]':
                index === 4,
            },
          ]"
        >
          {{ card.percentage }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const hoveredSegment = ref(null);

const TokenomicsCards = [
  {
    name: "Presale",
    percentage: "50%",
    strategy: "Immediately available. The engine of the ecosystem.",
    value: 50,
    color: "#FF5B00",
  },
  {
    name: "Liquidity",
    percentage: "20%",
    strategy: "Reserved for DEX/CEX listings to ensure smooth trading.",
    value: 20,
    color: "#FF8A47",
  },
  {
    name: "Rewards",
    percentage: "18%",
    strategy: "Released based on milestones. We pay you to participate.",
    value: 14,
    color: "#FFB391",
  },
  {
    name: "Staking",
    percentage: "7%",
    strategy: "Distributed to long-term holders via our staking pools.",
    value: 9,
    color: "#FFD4BA",
  },
  {
    name: "Team",
    percentage: "5%",
    strategy: "100% Locked for 2 Years. We are in this for the long haul.",
    value: 7,
    color: "#FFE5D6",
  },
];

const createDonutSegment = (startAngle, endAngle, index) => {
  const innerRadius = 100;
  const outerRadius = 200;
  const center = 250;
  const gap = 2;

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

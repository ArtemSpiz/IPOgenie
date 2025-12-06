<template>
  <div class="flex flex-col gap-3">
    <EventCard
      v-for="event in events"
      :key="event.title"
      :title="event.title"
      :status="event.status"
      :outcome-label="event.outcomeLabel"
      :outcome="event.outcome"
      :description="event.description"
      :details="event.details"
      :status-type="event.statusType"
      :status-message="event.statusMessage"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import EventCard from "./EventCard.vue";

const events = ref([
  {
    title: "Black Friday Protocol Boost",
    status: "Ended — Dec 01",
    outcomeLabel: "OUTCOME",
    outcome: "+30% Bonus Distributed",
    description:
      "A strategic liquidity event rewarding decisive action during the holiday market window. Participants who secured their allocation received an automatic multiplier.",
    details: [
      {
        label: "Incentive",
        value: "+30% Bonus Token Allocation",
      },
      {
        label: "Eligibility",
        value: "Presale contributions made Nov 21 — Dec 01.",
      },
    ],
    statusType: "completed",
    statusMessage: "Bonus tokens added to vesting contract. View on Dashboard.",
  },
  {
    title: "November Community Grant",
    status: "Ended — Nov 30",
    outcomeLabel: "TOTAL POOL",
    outcome: "$50,000 in $IPO",
    description:
      "Our inaugural community incentives program designed to reward our most active early supporters based on social metrics.",
    details: [
      {
        label: "Winners",
        value: "40 Select Wallets",
      },
      {
        label: "Criteria",
        value: "High-impact social engagement.",
      },
    ],
    statusType: "pending",
    statusMessage: "Winners notified. Distribution at TGE.",
  },
]);
</script>

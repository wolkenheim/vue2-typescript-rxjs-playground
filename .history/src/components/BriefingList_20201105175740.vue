<template>
  <div class="briefing-list">
    <h1>{{ msg }}</h1>

    <div v-for="(briefing, index) in briefingList" :key="index">
      <router-link
        :to="{ name: 'BriefingDetail', params: { briefingId: briefing.id } }"
      >
        {{ briefing.id }} - {{ briefing.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { BriefingEntity } from "../briefing/briefing.entity";
import {
  briefingsService,
  briefingsServiceReactive,
} from "../services/briefings-service.module";

@Component
export default class BriefingList extends Vue {
  @Prop() private msg!: string;
  briefingList: BriefingEntity[] = [];

  created(): void {
    briefingsServiceReactive.state$.subscribe((list) => {
      console.log("subscribe", list);
    });

    //this.fetchAllBriefings();
  }

  fetchAllBriefings(): void {
    this.briefingList = [];
    briefingsService.getBriefings().then(() => {
      this.briefingList = briefingsService.getBriefingList();
    });
  }
}
</script>


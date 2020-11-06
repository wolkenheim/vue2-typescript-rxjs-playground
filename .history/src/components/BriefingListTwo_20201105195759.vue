<template>
  <div class="briefing-list">
    <h1>Two</h1>

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
import { Subscription } from "rxjs";
import { Component, Prop, Vue } from "vue-property-decorator";

import { BriefingEntity } from "../briefing/briefing.entity";
import {
  briefingsService,
  briefingsServiceReactive,
} from "../services/briefings-service.module";

@Component
export default class BriefingListTwo extends Vue {
  briefingList: BriefingEntity[] = [];
  private briefingListHandle: Subscription = {} as Subscription;

  created(): void {
    this.fetchAllBriefingsReactive();
  }

  fetchAllBriefingsReactive() {
    this.briefingListHandle = briefingsServiceReactive.state$.subscribe(
      (briefingList) => {
        this.briefingList = briefingList;
      }
    );

    briefingsServiceReactive.getBriefings();
  }

  beforeDestroy() {
    this.briefingListHandle.unsubscribe();
  }
}
</script>


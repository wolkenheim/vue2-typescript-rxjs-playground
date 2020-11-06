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
import { Subscription } from "rxjs";
import { Component, Prop, Vue } from "vue-property-decorator";
import { BriefingEntity } from "../domain/briefing/briefing.entity";

import {
  reactiveServiceFactory,
  BriefingsServiceReactive,
} from "@/repository/reactive-service-factory";
import { ReactiveService } from "@/repository/reactive-service";

const briefingsService: BriefingsServiceReactive = reactiveServiceFactory.get(
  "briefings"
);

@Component
export default class BriefingList extends Vue {
  @Prop() private msg!: string;
  briefingList: BriefingEntity[] = [];
  private briefingListHandle: Subscription = {} as Subscription;

  created(): void {
    this.fetchAllBriefingsReactive();
  }

  fetchAllBriefingsReactive() {
    this.briefingListHandle = briefingsService.state$.subscribe(
      (briefingList) => {
        console.log("Briefing One got briefings", briefingList);
        this.briefingList = briefingList;
      }
    );

    briefingsService.fetchBriefings();
  }

  fetchAllBriefings(): void {
    this.briefingList = [];
    briefingsService.getBriefings().then(() => {
      this.briefingList = briefingsService.getBriefingList();
    });
  }

  beforeDestroy() {
    this.briefingListHandle.unsubscribe();
  }
}
</script>


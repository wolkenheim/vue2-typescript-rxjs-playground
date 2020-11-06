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
import { briefingsServiceReactive } from "../domain/briefing/briefings-service-reactive";

import {
  reactiveServiceFactory,
  BriefingsServiceReactive,
} from "@/repository/reactive-service-factory";

@Component
export default class BriefingList extends Vue {
  @Prop() private msg!: string;
  briefingList: BriefingEntity[] = [];
  private briefingListHandle: Subscription = {} as Subscription;

  created(): void {
    this.briefingsSubscribe();
    briefingsServiceReactive.fetchBriefings();
  }

  briefingsSubscribe(): void {
    this.briefingListHandle = briefingsServiceReactive.state$.subscribe(
      (briefingList) => {
        this.briefingList = briefingList;
      }
    );
  }

  beforeDestroy() {
    this.briefingListHandle.unsubscribe();
  }
}
</script>


<template>
  <div v-if="error">{{ error }}</div>
  <div v-else class="briefing-list">
    <h1>Detail</h1>
    <div>{{ briefing.id }} - {{ briefing.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BriefingEntity } from "../briefing/briefing.entity";

import { reactiveServiceFactory } from "@/repository/reactive-service-factory";
import { ReactiveService } from "@/repository/reactive-service";
import { UserEntity } from "@/domain/user/user.entity";
import { BriefingsRepository } from "@/domain/briefing/briefings-repository";
const briefingsRepository = new BriefingsRepository();

const userService: ReactiveService<UserEntity> = reactiveServiceFactory.get(
  "user"
);

@Component
export default class BriefingDetail extends Vue {
  @Prop() private briefingId!: number;
  briefing: BriefingEntity = {} as BriefingEntity;
  error = "";

  created(): void {
    this.fetchBriefing();
    this.userSub();
  }

  userSub() {
    userService.state$.subscribe((user) => {
      console.log("got user data", user);
    });
  }

  // fetching data async, in a non - reactive way
  // this is totally fine to handle local state
  async fetchBriefing(): Promise<void> {
    this.error = "";
    try {
      const result = await briefingsRepository.getBriefingById(this.briefingId);
      this.briefing = result.data;
    } catch (error) {
      this.error = "An error occured" + error.message;
    }
  }
}
</script>


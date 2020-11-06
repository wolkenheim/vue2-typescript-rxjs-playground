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

  async fetchBriefing(): Promise<void> {
    this.error = "";
    try {
      this.briefing = await briefingsService.getBriefingById(this.briefingId);
    } catch (error) {
      this.error = "An error occured" + error.message;
    }
  }
}
</script>


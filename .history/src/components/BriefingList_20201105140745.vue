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
import { Options, Vue } from "vue-class-component";
import { BriefingEntity } from "../briefing/briefing.entity";
import { briefingsService } from "../services/briefings-service.module";

@Options({
  props: {
    msg: String,
  },
})
export default class BriefingList extends Vue {
  msg!: string;
  briefingList: BriefingEntity[] = [];

  created() {
    console.log("list created");

    this.fetchAllBriefings();
  }

  fetchAllBriefings() {
    this.briefingList = [];
    briefingsService.getBriefings().then(() => {
      this.briefingList = briefingsService.getBriefingList();
    });
  }

  unmounted() {
    this.briefingList = [];
  }
}
</script>


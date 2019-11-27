<template>
  <div>
    <TheTitle name="Palestras &amp; Lives" />

    <section class="section">
      <div class="container">
        <TalksFilters @filter="filterTalks" />
        <TalksList />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import TheTitle from "@/components/TheTitle";
import TalksFilters from "./TalksFilters";
import TalksList from "./TalksList";

export default {
  name: "Talks",
  components: {
    TheTitle,
    TalksFilters,
    TalksList
  },
  methods: {
    ...mapActions("talks", ["loadTalks"]),
    filterTalks(filters) {
      this.loadTalks(filters);
    }
  },
  async created() {
    await this.loadTalks();
  }
};
</script>

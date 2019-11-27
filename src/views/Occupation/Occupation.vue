<template>
  <div>
    <TheTitle :name="occupation.name" />

    <section class="section">
      <div class="container">
        <div class="content">
          <OccupationInfo />
          <OccupationJobMarket />
          <OccupationTalks />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import TheTitle from "@/components/TheTitle";

import OccupationInfo from "./OccupationInfo";
import OccupationJobMarket from "./OccupationJobMarket";
import OccupationTalks from "./OccupationTalks";

export default {
  name: "Occupation",
  components: {
    TheTitle,
    OccupationInfo,
    OccupationJobMarket,
    OccupationTalks
  },
  computed: {
    ...mapState("occupations", ["occupation"])
  },
  methods: {
    ...mapActions("occupations", ["loadOccupation"])
  },
  async created() {
    this.loadOccupation(this.$route.params.slug);
  }
};
</script>

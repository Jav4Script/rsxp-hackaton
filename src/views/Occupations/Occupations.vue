<template>
  <div>
    <TheTitle name="Profissões" />
    <OccupationsList />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import TheTitle from "@/components/TheTitle";
import OccupationsList from "./OccupationsList";

export default {
  name: "Occupations",
  components: {
    TheTitle,
    OccupationsList
  },
  methods: {
    ...mapActions("occupations", ["loadOccupations"])
  },
  async created() {
    await this.loadOccupations();
  }
};
</script>

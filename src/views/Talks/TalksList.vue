<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="talk in talks" :key="talk.id">
        <TalksItem :talk.sync="talk" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TalksItem from "./TalksItem";

export default {
  name: "TalksList",
  components: {
    TalksItem
  },
  computed: {
    ...mapGetters("talks", { talks: "getTalks" })
  }
};
</script>

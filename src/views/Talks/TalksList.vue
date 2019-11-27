<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="talk in talks" :key="talk.id">
        <TalksItem :talk="talk" />
      </div>
    </div>
  </div>
</template>

<script>
import TalksItem from "./TalksItem";

import talks from "@/store/talks";

export default {
  name: "TalksList",
  components: {
    TalksItem
  },
  data() {
    return {
      talks
    };
  }
};
</script>

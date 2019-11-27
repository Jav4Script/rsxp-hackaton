<template>
  <div class="container">
    <h2 class="subtitle">Participantes</h2>
    <div class="columns is-multiline">
      <div
        class="column is-one-fifth"
        v-for="attendant in attendants"
        :key="attendant.id"
      >
        <TalkAttendant :attendant="attendant" />
      </div>
    </div>
  </div>
</template>

<script>
import TalkAttendant from "./TalkAttendant";

export default {
  name: "TalkSidebar",
  components: {
    TalkAttendant
  },
  props: {
    attendants: Array
  }
};
</script>

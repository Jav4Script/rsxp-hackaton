<template>
  <div class="container">
    <h2 class="subtitle">Participantes</h2>
    <div class="columns is-multiline">
      <div class="column is-one-fifth" v-for="attendant in attendants" :key="attendant.id">
        <CourseAttendant :attendant="attendant" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseAttendant from "./CourseAttendant";

export default {
  name: "TalkSidebar",
  components: {
    CourseAttendant
  },
  props: {
    attendants: Array
  }
};
</script>

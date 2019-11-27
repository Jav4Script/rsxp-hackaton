<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="talk in talks" :key="talk.id">
        <CourseItem :talk="talk" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseItem from "./CourseItem";

import talks from "@/store/courses";

export default {
  name: "CourseList",
  components: {
    CourseItem
  },
  data() {
    return {
      talks
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="columns is-multiline">
      <div
        class="column is-one-quarter"
        v-for="course in courses"
        :key="course.id"
      >
        <CourseItem :course="course" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseItem from "./CourseItem";

import courses from "@/store/courses";

export default {
  name: "CourseList",
  components: {
    CourseItem
  },
  data() {
    return {
      courses
    };
  }
};
</script>

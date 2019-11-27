<template>
  <div>
    <TheTitle name="Cursos" />

    <section class="section">
      <div class="container">
        <CourseFilters />
        <CourseList />
      </div>
    </section>
  </div>
</template>

<script>
import TheTitle from "@/components/TheTitle";
import CourseFilters from "./CourseFilters";
import CourseList from "./CourseList";

export default {
  name: "Cursos",
  components: {
    TheTitle,
    CourseFilters,
    CourseList
  }
};
</script>

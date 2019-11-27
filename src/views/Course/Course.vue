<template>
  <div>
    <TheTitle :name="talk.name" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="content">{{ talk.description }}</div>
            <CourseAttendants class="talk-attendants" :attendants="talk.spots.attendants" />
          </div>
          <CourseSidebar />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheTitle from "@/components/TheTitle";
import CourseSidebar from "./CourseSidebar";
import CourseAttendants from "./CourseAttendants";

import talks from "@/store/courses";

export default {
  name: "Palestra",
  components: {
    TheTitle,
    CourseSidebar,
    CourseAttendants
  },
  data() {
    const talk = {
      id: 0,
      slug: "",
      name: "",
      image: "",
      description: "",
      author: {
        id: 0,
        name: ""
      },
      date: "",
      spots: {
        available: 0,
        total: 0
      },
      status: {
        id: 0,
        name: ""
      },
      category: {
        id: 0,
        name: ""
      }
    };

    return { talk };
  },
  mounted() {
    this.talk = talks.find(
      element => element.id === Number(this.$route.params.id)
    );
  }
};
</script>

<style lang="scss" scoped>
.hero-body {
  background-image: url(https://media.istockphoto.com/photos/big-data-futuristic-visualization-abstract-illustration-picture-id869356832);
}

.talk-attendants {
  margin-top: 30px;
}
</style>

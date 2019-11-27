<template>
  <div>
    <TheTitle :name="talk.name" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="content">{{ talk.description }}</div>
            <TalkAttendants class="talk-attendants" :attendants="talk.spots.attendants" />
          </div>
          <TalkSidebar />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheTitle from "@/components/TheTitle";
import TalkSidebar from "./TalkSidebar";
import TalkAttendants from "./TalkAttendants";

import talks from "@/store/talks";

export default {
  name: "Palestra",
  components: {
    TheTitle,
    TalkSidebar,
    TalkAttendants
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

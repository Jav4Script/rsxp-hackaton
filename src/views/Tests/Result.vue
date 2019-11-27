<template>
  <div>
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Parabéns!</h1>
          <h2 class="subtitle">Te recomendamos a área de: {{occupation.name}}</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="subtitle">Mas o que é {{occupation.name}} afinal?</h2>
        <p>{{occupation.description}}</p>
      </div>
      <div class="is-flex result-occupation">
        <router-link
          class="button is-primary"
          :to="{ name: 'occupation', params: { slug: occupation.slug } }"
        >Saber mais</router-link>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title">Explore mais esta area!</h2>
        <TalksList />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TalksList from "../Talks/TalksList";

export default {
  name: "Results",
  components: { TalksList },
  data() {
    return { index: Math.floor(Math.random() * 4) };
  },
  computed: {
    ...mapState("occupations", ["occupations"]),
    ...mapState("talks", ["talks"]),
    occupation() {
      return this.occupations[this.index];
    },
    talks() {
      return this.talks;
    }
  },
  methods: {
    ...mapActions("occupations", ["loadOccupations"]),
    ...mapActions("talks", ["loadTalks"])
  },
  async created() {
    await this.loadOccupations();
    await this.loadTalks();
  }
};
</script>

<style  scoped>
.result-occupation {
  margin-top: 20px;
  justify-content: center;
}
</style>

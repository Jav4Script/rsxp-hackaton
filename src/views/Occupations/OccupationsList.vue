<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="occupation in occupations"
          :key="occupation.id"
        >
          <OccupationsItem :occupation="occupation" />
        </div>
      </div>

      <div class="space-top-3">
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Conheça o Teste Vocacional voltado para a Tecnologia
              </h1>

              <b-button
                @click.prevent.stop="goTests()"
                class="botoes-hero"
                type="is-primary"
                inverted
                outlined
              >
                Fazer o Teste
              </b-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import OccupationsItem from "./OccupationsItem";

export default {
  name: "OccupationsList",
  components: {
    OccupationsItem
  },
  computed: {
    ...mapState("occupations", ["occupations"])
  },
  methods: {
    goTests() {
      this.$router.push({ name: "tests" });
    }
  }
};
</script>

<style lang="scss" scoped>
.space-top-3 {
  margin-top: 3rem;
}
</style>

<template>
  <div>
    <TheTitle name="Teste" />

    <section class="section">
      <div class="container">
        <div class="container">
          <h2 class="title is-4">
            {{ currentTest.id }} - {{ currentTest.question }}
          </h2>
          <b-field class="field">
            <b-radio
              v-model="radio"
              :native-value="option.id"
              name="optionTest"
              v-for="option in currentTest.options"
              :key="option.id"
              >{{ option.description }}</b-radio
            >
          </b-field>
        </div>
        <hr />
        <b-pagination
          :total="total"
          :current.sync="current"
          :range-before="rangeBefore"
          :range-after="rangeAfter"
          :order="order"
          :size="size"
          :simple="isSimple"
          :rounded="isRounded"
          :per-page="perPage"
          :icon-prev="prevIcon"
          :icon-next="nextIcon"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        ></b-pagination>
        <br />
        <div v-if="currentTest.id === 4 && radio > 12">
          <router-link
            class="button is-block is-primary"
            :to="{ name: 'results' }"
            >Finalizar</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheTitle from "@/components/TheTitle";
import tests from "@/store/test";

export default {
  name: "Tests",
  components: {
    TheTitle
  },
  data() {
    const test = {
      id: 0,
      question: "",
      options: []
    };

    const radio = "";

    return {
      total: 4,
      current: 1,
      perPage: 1,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: true,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      tests,
      test,
      radio
    };
  },
  computed: {
    currentTest() {
      return tests[this.current - 1];
    }
  }
};
</script>

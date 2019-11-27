<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <b-field grouped>
          <b-field label="Profissões">
            <b-select
              placeholder="Selecione a profissão"
              v-model="filters.occupation"
              @input="filtersTalks"
            >
              <option value="all">Todas</option>
              <option
                v-for="occupation in occupations"
                :value="occupation.id"
                :key="occupation.id"
              >
                {{ occupation.name }}
              </option>
            </b-select>
          </b-field>
        </b-field>
      </div>
      <div class="level-item">
        <b-field grouped>
          <b-field label="Data">
            <b-field>
              <b-datepicker editable placeholder="Selecione uma data">
                <button class="button is-primary">
                  <b-icon icon="calendar-today" />
                  <span>Hoje</span>
                </button>
              </b-datepicker>
            </b-field>
          </b-field>
        </b-field>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TalksFilters",
  data() {
    const filters = {
      occupation: "all"
    };

    return {
      filters
    };
  },
  computed: {
    ...mapState("occupations", ["occupations"])
  },
  methods: {
    ...mapActions("occupations", ["loadOccupations"]),
    filtersTalks() {
      this.$emit("filter", this.filters);
    }
  },
  async created() {
    await this.loadOccupations();
  }
};
</script>

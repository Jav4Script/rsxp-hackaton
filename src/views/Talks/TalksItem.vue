<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <span class="talk-date">
            <strong class="subtitle is-6 has-text-primary">
              {{ talk.date | formatDate }}
            </strong>
          </span>
          <br />
          <span class="title is-4">
            <router-link :to="{ name: 'talk', params: { id: talk.id } }">{{
              talk.name
            }}</router-link>
          </span>
          <br />
          <small>{{ talk.author.name }}</small>
          <br />
        </div>
      </div>

      <div class="content">{{ talk.description }}</div>

      <button
        class="button talks-item-subscribe is-primary"
        @click.prevent.stop="subscribe()"
      >
        {{ subscribed ? "Inscrito!" : "Inscrever-me" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TalksItem",
  props: {
    talk: Object
  },
  data() {
    return {
      name: "Hayaa Crain"
    };
  },
  filters: {
    formatDate(date) {
      const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      return date && dateTimeFormat.format(new Date(date));
    }
  },
  computed: {
    subscribed() {
      window.console.log(this.talk.spots.attendants);
      return this.talk.spots.attendants.find(
        element => element.name === this.name
      );
    }
  },
  methods: {
    ...mapActions("talks", ["subscribeTalk"]),
    async subscribe() {
      await this.subscribeTalk({
        talkId: this.talk.id,
        attendant: {
          image: "https://bulma.io/images/placeholders/96x96.png",
          name: this.name
        }
      });
    }
  }
};
</script>

<style scoped>
.talk-date {
  margin-bottom: 10px;
}

.talks-item-subscribe {
  width: 100%;
}
</style>

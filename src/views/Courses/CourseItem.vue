<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <span class="talk-date">
            <strong class="subtitle is-6 has-text-primary">
              {{
              talk.date | formatDate
              }}
            </strong>
          </span>
          <br />
          <span class="title is-4">
            <router-link :to="{ name: 'course', params: { id: talk.id } }">{{ talk.name }}</router-link>
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
      >{{subscribed ? 'Inscrito!' : 'Inscrever-me'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    talk: Object
  },
  data() {
    const subscribed = false;

    return { subscribed };
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
  methods: {
    subscribe() {
      return (this.subscribed = !this.subscribed);
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

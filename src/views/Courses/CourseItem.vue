<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <span class="title is-4">
            <router-link :to="{ name: 'course', params: { id: course.id } }">{{
              course.name
            }}</router-link>
          </span>
          <br />
          <small>{{ course.author.name }}</small>
          <br />
        </div>
      </div>

      <div class="content">{{ course.description }}</div>

      <button
        class="button courses-item-subscribe is-primary"
        @click.prevent.stop="subscribe()"
      >
        {{ subscribed ? "Inscrito!" : "Inscrever-me" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    course: Object
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
.courses-item-subscribe {
  width: 100%;
}
</style>

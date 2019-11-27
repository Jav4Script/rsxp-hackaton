<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a>@bulmaio</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
        </div>
      </div>
    </div>
    <div class="column">
      <button
        class="button talk-subscribe is-primary"
        @click.prevent.stop="subscribe()"
      >{{subscribed ? 'Inscrito!' : 'Inscrever-me'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkSidebar",
  components: {},
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
  data() {
    const subscribed = false;

    return { subscribed };
  },
  methods: {
    subscribe() {
      return (this.subscribed = !this.subscribed);
    }
  }
};
</script>

<style scoped>
.talk-subscribe {
  width: 100%;
}

.talk-date {
  margin-bottom: 10px;
}
</style>

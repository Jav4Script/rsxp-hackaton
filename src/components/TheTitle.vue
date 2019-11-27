<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ name }}</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TheTitle",
  props: {
    name: String
  }
};
</script>

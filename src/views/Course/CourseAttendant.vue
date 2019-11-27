<template>
  <div class="media talk-attendent">
    <div class="media-left">
      <figure class="image is-48x48">
        <img class="is-rounded" :src="attendant.image" alt="attendant.name" />
      </figure>
    </div>
    <div class="media-content">
      <p class="is-4">{{ attendant.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkAttendant",
  props: {
    attendant: Object
  }
};
</script>

<style scoped>
.talk-attendent {
  align-items: center;
}
</style>

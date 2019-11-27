<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="occupation.image" :alt="occupation.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <router-link
              :to="{ name: 'occupation', params: { slug: occupation.slug } }"
              >{{ occupation.name }}</router-link
            >
          </p>
        </div>
      </div>

      <div class="content">{{ occupation.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OccupationItem",
  props: {
    occupation: Object
  }
};
</script>

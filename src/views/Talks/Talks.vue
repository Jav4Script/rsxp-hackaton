<template>
  <div>
    <TheTitle name="Palestras &amp; Lives" />

    <section class="section">
      <div class="container">
        <TalksFilters />
        <TalksList />
      </div>
    </section>
  </div>
</template>

<script>
import TheTitle from "@/components/TheTitle";
import TalksFilters from "./TalksFilters";
import TalksList from "./TalksList";

export default {
  name: "Palestras",
  components: {
    TheTitle,
    TalksFilters,
    TalksList
  }
};
</script>

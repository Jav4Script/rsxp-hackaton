<template>
  <div>
    <TheHeader />
    <main>
      <router-view :key="$route.path" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

import TheFooter from "@/components/TheFooter";

export default {
  name: "TheDefault",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

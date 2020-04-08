<template>
<LinkPage :section="section" />
</template>

<script>
import LinkPage from "../components/linkPage.vue";
export default {
  name: "viewSection",
  components: {
    LinkPage,
  },
  computed: {
    section() {
      return this.$root.$data.section;
    }
  }
}
</script>

<style lang="css" scoped>
</style>

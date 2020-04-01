<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#f2e35a" />
  <h1>Other Links!</h1>

  <div class="buttonLinks">
    <!-- Here's the loop that will go through all links in the array once I can get data to be permanent-->
    <OuterLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />
  </div>
  <InnerLink text="Create New Link" link="/createLink" color="#f2e35a" />
</div>
</template>

<script>
import InnerLink from "../components/innerLink.vue"
import OuterLink from "../components/outerLink.vue"
export default {
  name: 'Other',
  components: {
    InnerLink,
    OuterLink
  },
  computed: {
    links() {
      return this.$root.$data.otherLinks;
    }
  }
}
</script>

<style scoped>
</style>

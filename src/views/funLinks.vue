<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#5ff6a6" />
  <h1>Fun Links!</h1>

  <div class="buttonLinks">
    <OuterLink text="YouTube" link="https://youtube.com" color="#ff5722" />
    <OuterLink text="Facebook" link="https://facebook.com" color="#2196f3" />
    <OuterLink text="Instagram" link="https://instagram.com" color="#f2e35a" />
    <OuterLink text="Gmail" link="https://mail.google.com" color="#ff5722" />
    <OuterLink text="Amazon" link="https://amazon.com" color="#f2e35a" />
    <!-- Here's the loop that will go through all links in the array once I can get data to be permanent-->
    <OuterLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />
  </div>
  <InnerLink text="Create New Link" link="/createLink" color="#5ff6a6" />
</div>
</template>

<script>
import InnerLink from "../components/innerLink.vue"
import OuterLink from "../components/outerLink.vue"
export default {
  name: 'Fun',
  components: {
    InnerLink,
    OuterLink
  },
  computed: {
    links() {
      return this.$root.$data.funLinks;
    }
  }
}
</script>

<style scoped>
</style>

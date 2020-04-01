<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#2196f3" />
  <h1>School Links!</h1>

  <div class="buttonLinks">
    <OuterLink text="BYU" link="https://byu.edu" color="#2196f3" />
    <OuterLink text="My BYU" link="https://my.byu.edu" color="#f2e35a" />
    <OuterLink text="Learning Suite" link="https://learningsuite.byu.edu" color="#5ff6a6" />
    <OuterLink text="Canvas" link="https://canvas.byu.edu" color="#ff5722" />
    <!-- Here's the loop that will go through all links in the array once I can get data to be permanent-->
    <OuterLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />
  </div>
  <InnerLink text="Create New Link" link="/createLink" color="#2196f3" />
</div>
</template>

<script>
import InnerLink from "../components/innerLink.vue"
import OuterLink from "../components/outerLink.vue"
export default {
  name: 'School',
  components: {
    InnerLink,
    OuterLink
  },
  computed: {
    links() {
      return this.$root.$data.schoolLinks;
    }
  }
}
</script>

<style scoped>
</style>

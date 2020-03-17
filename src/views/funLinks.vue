<template>
<div class="linkPage">
  <ButtonLink text="Home" link="/" color="#5ff6a6" />
  <h1>Fun Links!</h1>

  <div class="buttonLinks">
    <ButtonLink text="YouTube" link="https://youtube.com" color="#ff5722" />
    <ButtonLink text="Facebook" link="https://facebook.com" color="#2196f3" />
    <ButtonLink text="Instagram" link="https://instagram.com" color="#f2e35a" />
    <ButtonLink text="Gmail" link="https://mail.google.com" color="#ff5722" />
    <ButtonLink text="Amazon" link="https://amazon.com" color="#f2e35a" />
  </div>
  <ButtonLink text="Create New Link" link="/createLink" color="#5ff6a6" />
</div>
</template>

<script>
import ButtonLink from "../components/buttonLink.vue"
export default {
  name: 'Fun',
  components: {
    ButtonLink,
  },
}
</script>

<style scoped>
</style>

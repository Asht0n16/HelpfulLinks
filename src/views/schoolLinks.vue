<template>
<div class="linkPage">
  <ButtonLink text="Home" link="/" color="#2196f3" />
  <h1>School Links!</h1>

  <div class="buttonLinks">
    <ButtonLink text="BYU" link="https://byu.edu" color="#2196f3" />
    <ButtonLink text="My BYU" link="https://my.byu.edu" color="#f2e35a" />
    <ButtonLink text="Learning Suite" link="https://learningsuite.byu.edu" color="#5ff6a6" />
    <ButtonLink text="Canvas" link="https://canvas.byu.edu" color="#ff5722" />
  </div>
  <ButtonLink text="Create New Link" link="/createLink" color="#2196f3" />
</div>
</template>

<script>
import ButtonLink from "../components/buttonLink.vue"
export default {
  name: 'School',
  components: {
    ButtonLink,
  },
}
</script>

<style scoped>
</style>

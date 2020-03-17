<template>
<div class="linkPage">
  <ButtonLink text="Home" link="/" color="#f2e35a" />
  <h1>Other Links!</h1>

  <div class="buttonLinks">

  </div>
  <ButtonLink text="Create New Link" link="/createLink" color="#f2e35a" />
</div>
</template>

<script>
import ButtonLink from "../components/buttonLink.vue"
export default {
  name: 'Other',
  components: {
    ButtonLink,
  },
}
</script>

<style scoped>
</style>

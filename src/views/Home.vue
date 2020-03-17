<template>
<div class="home">
  <p>Browser Bookmarks are extremely helpful. But it's a huge bummer when
    the whole bar is filled with bookmarks. And who wants a bunch of ugly
    folder icons perpetually at the top of your browser when you try to
    organize your links? Well, fret no longer, Hammond Cheese Sandwiches
    is here to save the day!</p>
  <p>Here we have various links for the different aspects of Ashton's life
    all in one convenient place! And it looks pretty! Maybe someday he'll learn how to make this available and customizeable
    to the world, but for now, only he gets to enjoy it. Stay tuned!</p>

  <div class="buttonLinks">
    <ButtonLink text="Fun" link="/funLinks" color="#5ff6a6" />
    <ButtonLink text="Work" link="/workLinks" color="#ff5722" />
    <ButtonLink text="School" link="/schoolLinks" color="#2196f3" />
    <ButtonLink text="Other" link="/otherLinks" color="#f2e35a" />
  </div>
</div>
</template>

<script>
import ButtonLink from "../components/buttonLink.vue"
export default {
  name: 'Home',
  components: {
    ButtonLink,
  },
}
</script>

<style scoped>
.home {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}

p {
  text-align: left;
}
</style>

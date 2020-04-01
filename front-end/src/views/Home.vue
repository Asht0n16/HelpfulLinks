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
    <InnerLink text="Fun" link="/funLinks" color="#5ff6a6" />
    <InnerLink text="Work" link="/workLinks" color="#ff5722" />
    <InnerLink text="School" link="/schoolLinks" color="#2196f3" />
    <InnerLink text="Other" link="/otherLinks" color="#f2e35a" />
  </div>
  <div class="filler">
  </div>
</div>
</template>

<script>
import InnerLink from "../components/innerLink.vue"
export default {
  name: 'Home',
  components: {
    InnerLink,
  },
}
</script>

<style scoped>
.filler {
  height: 50px;
}

p {
  text-align: left;
}
</style>

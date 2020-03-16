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
    <router-link to="/funLinks" class="linkButton" id="funButt">Fun</router-link>
    <router-link to="/workLinks" class="linkButton" id="workButt">Work</router-link>
    <router-link to="/schoolLinks" class="linkButton" id="schoolButt">School</router-link>
    <router-link to="/???" class="linkButton" id="otherButt">Other</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
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

.buttonLinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.linkButton {
  width: 30%;
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
  padding: .75rem;
  margin: 1rem 1.5rem 0 1.5rem;
  border: 3px outset;
  border-radius: 9px;
}

.linkButton:active {
  color: blue;
}

.linkButton:visited {
  text-decoration: none;
  color: #000;
}

#funButt {
  background-color: #5ff6a6;
}

#workButt {
  background-color: #ff5722;
}

#schoolButt {
  background-color: #2196f3;
}

#otherButt {
  background-color: #f2e35a;
}
</style>

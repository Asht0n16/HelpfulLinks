<template>
<div id="app">
  <div class="header">
    <h1 v-if="user">{{user.firstName}}'s Helpful Links</h1>
    <h1 v-else>Ashton's Helpful Links</h1>
  </div>
  <router-view />
  <div class="footer">
    <a href="https://github.com/Asht0n16/CS260-CP3" target="_blank">GitHub Repo</a>
  </div>
</div>
</template>

<script>
//import axios from 'axios';
export default {
  name: "App",
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
}
</script>

<style>
body {
  margin-top: 10px;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.buttonLinks {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media only screen and (max-width: 560px) {
  .buttonLinks {
    flex-flow: column nowrap;
    align-items: center;
  }
}

.header {
  margin: auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header button {
  height: 35px;
}

.home {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.linkPage {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  height: 50px;
  padding: 0 20px 0 20px;
  width: 100%;
  background-color: #dcdcdc;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer a {
  text-decoration: none;
  font-size: 1.5rem;
}
</style>

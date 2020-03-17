<template>
<div id="app">
  <h1>Ashton's Helpful Links!</h1>
  <router-view />
  <div class="footer">
    <a href="https://github.com/Asht0n16/CS260-CP3" target="_blank">GitHub Repo</a>
  </div>
</div>
</template>

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

.linkPage {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 50px;
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

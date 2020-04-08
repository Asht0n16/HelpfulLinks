<template>
<div class="home">
  <div v-if="user">
    <button class="pure-button pure-button-primary" @click.prevent="logout">Logout</button>
    <p></p>
    <hr />
    <div class="buttonLinks">
      <InnerLink text="Fun" link="/funLinks" color="#5ff6a6" />
      <InnerLink text="Work" link="/workLinks" color="#ff5722" />
      <InnerLink text="School" link="/schoolLinks" color="#2196f3" />

      <InnerLink v-for="section in sections" :key="section._id" :text="section.name" link="/viewSection" :color="section.color" />
    </div>
  </div>
  <!--Log In Page-->
  <div v-else>
    <LoginPage />
  </div>

  <div class="filler">
  </div>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
import LoginPage from "../components/loginPage.vue";
export default {
  name: 'Home',
  components: {
    InnerLink,
    LoginPage,
  },

  computed: {
    user() {
      return this.$root.$data.user;
    },
    async sections() {
      try {
        let response = await axios.get('/api/sections');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
        console.log(error);
      }
    },
  }
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

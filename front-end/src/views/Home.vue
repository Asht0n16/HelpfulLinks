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
      <InnerLink text="Other" link="/otherLinks" color="#f2e35a" />

      <!--<InnerLink v-for="section in sections" :key="section._id"
      :text="section.name" link="/viewSection" :color="section.color" />-->
    </div>
  </div>
  <!--Log In Page-->
  <div v-else>
    <p>Browser Bookmarks are extremely helpful. But it's a huge bummer when
      the whole bar is filled with bookmarks. And who wants a bunch of ugly
      folder icons perpetually at the top of your browser when you try to
      organize your links? Well, fret no longer, Hammond Cheese Sandwiches
      is here to save the day!</p>
    <div class="formWrapper">
      <form class="pure-form" id="logIn">
        <h2>Create New Account</h2>
        <fieldset>
          <input placeholder="First Name" v-model="firstName">
          <input placeholder="Last Name" v-model="lastName">
        </fieldset>
        <fieldset>
          <input placeholder="Username" v-model="username">
          <input type="password" placeholder="Password" v-model="password">
        </fieldset>
        <fieldset>
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="createAccount">Create Account</button>
        </fieldset>
      </form>
      <p v-if="error">{{error}}</p>
      <form class="pure-form">
        <fieldset>
          <h2>Login</h2>
          <input placeholder="username" v-model="loginUsername">
          <input type="password" placeholder="password" v-model="loginPassword">
        </fieldset>
        <fieldset>
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
        </fieldset>
      </form>
      <p v-if="errorLogin">{{errorLogin}}</p>
    </div>
  </div>

  <div class="filler">
  </div>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
export default {
  name: 'Home',
  components: {
    InnerLink,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      loginUsername: '',
      loginPassword: '',
      error: '',
      errorLogin: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
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
    async createAccount() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password) {
        this.error = "Missing Information. Try again.";
        return;
      }
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.password = '';
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },

    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.loginUsername || !this.loginPassword) {
        this.errorLogin = "Missing Information. Try again."
        return;
      }
      try {
        let response = await axios.post('/api/users/login', {
          username: this.loginUsername,
          password: this.loginPassword,
        });
        this.loginUsername = '';
        this.loginPassword = '';
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },

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

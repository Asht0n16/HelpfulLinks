<template>
<div>
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
</template>

<script>
import axios from 'axios';
export default {
  name: "loginPage",
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
    }
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
        this.$emit('resetUser');
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
        this.$emit('resetUser');
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  },
}
</script>

<style lang="css" scoped>
</style>

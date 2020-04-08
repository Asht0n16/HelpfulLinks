<template>
<div class="create">
  <InnerLink text="Back" link="/" color="#5ff6a6" />
  <h1>Create a New Section</h1>
  <div class="formContainer">
    <form class="pure-form pure-form-stacked" id="newSection" @submit.prevent="createSection()">
      <label for="newName">Insert a name for the new section.</label>
      <input id="newName" placeholder="New Name" v-model="newName">

      <label for="newColor">Choose a color for the new section.</label>
      <select id="newColor" v-model="newColor">
        <option id="greenO">Green</option>
        <option id="redO">Red</option>
        <option id="blueO">Blue</option>
        <option id="yellowO">Yellow</option>
      </select>

      <button>Create</button>
    </form>
  </div>
  <div v-if="added">
    <DisabledLink :text="added.name" :color="added.color" />
    <p>Section added!</p>
  </div>
  <h2 v-if="error">{{error}}</h2>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
import DisabledLink from "../components/disabledLink.vue";
export default {
  name: "CreateSection",
  components: {
    InnerLink,
    DisabledLink,
  },
  data() {
    return {
      newName: '',
      newColor: '',
      added: null,
      error: '',
    }
  },
  methods: {
    async createSection() {
      // ensure all required fields are given
      if (this.newName === '' || this.newColor === '') {
        this.error = "Missing required information. Please fill each box.";
        return;
      }

      // Get color hex
      let newColor = '';
      if (this.newColor === 'Green') {
        newColor = '#5ff6a6';
      } else if (this.newColor === 'Red') {
        newColor = '#ff5722';
      } else if (this.newColor === 'Blue') {
        newColor = '#2196f3';
      } else if (this.newColor === 'Yellow') {
        newColor = "#f2e35a";
      }

      // Create new link object
      let newSection = {
        name: this.newName,
        color: newColor,
        user: this.$root.$data.user,
      };
      try {
        // send link to correct collection
        let r = await axios.post('/api/sections', newSection);
        this.added = r.data;
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    }
  }
}
</script>

<style scoped>
.formContainer {
  margin: 0 auto;
  width: 70%;
  text-align: left;
}

#greenO {
  background-color: #5ff6a6;
}

#redO {
  background-color: #ff5722;
}

#blueO {
  background-color: #2196f3;
}

#yellowO {
  background-color: #f2e35a;
}
</style>

<template>
<div class="create">
  <InnerLink text="Back" link="/" color="#5ff6a6" />
  <h1>Create a New Link</h1>
  <div class="formContainer">
    <form class="pure-form pure-form-stacked" id="newLink" @submit.prevent="createLink()">
      <label for="section">Select a section to insert the new link into.</label>
      <select id="section" v-model="newSection">
        <option>Fun</option>
        <option>Work</option>
        <option>School</option>

        <option v-for="section in sections" :key="section._id">{{section.name}}</option>
      </select>

      <label for="newText">Insert the text to be on the new link.</label>
      <input id="newText" placeholder="New Text" v-model="newText">

      <label for="newLink">Insert the web address for the new link. <i>(Be sure to include the "http[s]://")</i></label>
      <input id="newLink" placeholder="New Address" v-model="newAddress">

      <label for="newColor">Choose a color for the new link.</label>
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
    <DisabledLink :text="added.text" :color="added.color" />
    <p>Link added to {{newSection}} links.</p>
  </div>
  <h2 v-if="error">{{error}}</h2>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
import DisabledLink from "../components/disabledLink.vue";
export default {
  name: "CreateLink",
  components: {
    InnerLink,
    DisabledLink,
  },
  data() {
    return {
      newSection: '',
      newText: '',
      newAddress: '',
      newColor: '',
      added: null,
      error: '',
      sections: [],
    }
  },
  created() {
    this.getSections();
  },
  methods: {
    async getSections() {
      try {
        let response = await axios.get('/api/sections');
        this.sections = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async createLink() {
      // ensure all required fields are given
      if (this.newSection === '' || this.newText === '' || this.newAddress === '' || this.newColor === '') {
        this.added = null;
        this.error = "Missing required information. Please fill each box.";
        return;
      }
      if (this.newAddress.search('http') === -1) {
        this.added = null;
        this.error = "New address is missing http[s]://";
        return;
      }
      // Clear error code
      this.error = '';

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
      let newLink = {
        text: this.newText,
        link: this.newAddress,
        color: newColor,
        user: this.$root.$data.user,
        section: this.newSection,
      };
      try {
        // send link to correct collection
        let r = await axios.post('/api/links', newLink);
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

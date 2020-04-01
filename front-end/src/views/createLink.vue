<template>
<div class="create">
  <InnerLink text="Home" link="/" color="#5ff6a6" />
  <h1>Create a New Link</h1>
  <div class="formContainer">
    <form class="pure-form pure-form-stacked" id="newLink" @submit.prevent="createLink()">
      <label for="section">Select a section to insert the new link into.</label>
      <select id="section" v-model="newSection">
        <option>Fun</option>
        <option>Work</option>
        <option>School</option>
        <option>Other</option>
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

      <label for="newPic">Insert a Picture for the new link.<i>(For now, dummy images are used)</i></label>
      <input disabled id="newPic" placeholder="Future place to add pics.">

      <button>Create</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
export default {
  name: "Create",
  components: {
    InnerLink,
  },
  data() {
    return {
      newSection: '',
      newText: '',
      newAddress: '',
      newColor: '',
      added: null
    }
  },
  methods: {
    async createLink() {
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
      let newLink = {
        text: this.newText,
        link: this.newAddress,
        color: newColor
      };

      if (this.newSection === 'Fun') {
        let r = await axios.post('/api/funlinks', newLink);
        this.added = r.data;
      } else if (this.newSection === 'Work') {
        this.$root.$data.workLinks.push(newLink);
      } else if (this.newSection === 'School') {
        this.$root.$data.schoolLinks.push(newLink);
      } else if (this.newSection === 'Other') {
        this.$root.$data.otherLinks.push(newLink);
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

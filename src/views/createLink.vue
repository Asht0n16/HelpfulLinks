<template>
<div class="create">
  <ButtonLink text="Home" link="/" color="#5ff6a6" />
  <h1>Create a New Link</h1>
  <div class="formContainer">
    <form class="pure-form pure-form-stacked" id="newLink">
      <label for="section">Select a section to insert new link into</label>
      <select id="section" v-model="newSection">
        <option>Fun</option>
        <option>Work</option>
        <option>School</option>
        <option>Other</option>
      </select>

      <label for="newText">Insert text for the new link</label>
      <input id="newText" placeholder="New Text" v-model="newText">

      <label for="newLink">Insert address for the new link</label>
      <input id="newLink" placeholder="New Address" v-model="newAddress">

      <label for="newColor">Choose a color for the new link</label>
      <select id="newColor" v-model="newColor">
        <option id="greenO">Green</option>
        <option id="redO">Red</option>
        <option id="blueO">Blue</option>
        <option id="yellowO">Yellow</option>
      </select>

      <button @click="createLink">Create</button>
    </form>
  </div>
</div>
</template>

<script>
import ButtonLink from "../components/buttonLink.vue"
export default {
  name: "Create",
  components: {
    ButtonLink,
  },
  data() {
    return {
      newSection: '',
      newText: '',
      newAddress: '',
      newColor: ''
    }
  },
  methods: {
    createLink() {
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
        this.$root.$data.funLinks.push(newLink);
      } else if (this.newSection === 'Work') {
        this.$root.$data.workLinks.push(newLink);
        console.log("added!");
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

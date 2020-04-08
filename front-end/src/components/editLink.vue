<template>
<div class="edit">
  <form class="pure-form pure-form-stacked" id="editLink" @submit.prevent="">
    <label for="name">Name:</label>
    <input id="name" v-model="selectedLink.text">

    <label for="link">Link:</label>
    <input id="link" v-model="selectedLink.link">

    <label for="color">Color:</label>
    <input id="color" v-model="selectedLink.color">

    <label for="section">Section:</label>
    <select id="section" v-model="selectedLink.section">
      <option>Fun</option>
      <option>Work</option>
      <option>School</option>

      <option v-for="section in sections" :key="section._id">{{section.name}}</option>
    </select>

    <button @click="editLink(selectedLink)">Edit Link</button>
    <button @click="deleteLink(selectedLink)">Delete</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EditLink',
  props: {
    selectedLink: Object,
  },
  data() {
    return {
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

    async editLink(link) {
      try {
        let newLink = {
          text: link.text,
          link: link.link,
          color: link.color,
          section: link.section,
        }
        await axios.put("/api/links/" + link._id, newLink);
        this.$emit('reset');
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLink(link) {
      try {
        await axios.delete("/api/links/" + link._id);
        this.$emit('reset');
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.edit {
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit button {
  width: 100px;
  margin: 5px;
}

/*.editRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.editRow input {
  height: 25px;
}*/
</style>

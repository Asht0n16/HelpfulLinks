<template>
<div class="edit">
  <div class="editRow">
    <p>Name:</p>
    <input v-model="selectedLink.text">
  </div>
  <div class="editRow">
    <p>Link:</p>
    <input v-model="selectedLink.link">
  </div>
  <div class="editRow">
    <p>Color:</p>
    <input v-model="selectedLink.color">
  </div>
  <button @click="editLink(selectedLink)">Edit Link</button>
  <button @click="deleteLink(selectedLink)">Delete</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EditLink',
  props: {
    selectedLink: Object,
    section: String,
  },
  methods: {
    async editLink(link) {
      try {
        let newLink = {
          text: link.text,
          link: link.link,
          color: link.color,
        }
        await axios.put("/api/" + this.section + "links/" + link._id, newLink);
        this.$emit('reset');
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLink(link) {
      try {
        await axios.delete("/api/" + this.section + "links/" + link._id);
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
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit button {
  width: 100px;
  margin: 5px;
}

.editRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.editRow input {
  height: 25px;
}
</style>

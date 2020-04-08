<template>
<div class="edit">
  <form class="pure-form pure-form-stacked" id="editSection" @submit.prevent="">
    <label for="color">Color:</label>
    <input id="color" v-model="selectedSection.color">

    <button @click="editSection(selectedSection)">Edit</button>
    <button @click="toggleDelete">Delete</button>
  </form>
  <div v-if="deleting">
    <p><i>All links within a section will be deleted along with it. Are you
        sure you would like to continue?</i></p>
    <button @click="toggleDelete">Cancel</button>
    <button @click="deleteSection(selectedSection)">Confirm</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EditSection',
  props: {
    selectedSection: Object,
  },
  data() {
    return {
      deleting: false,
    }
  },
  methods: {
    async editSection(section) {
      try {
        let newSection = {
          name: section.name,
          color: section.color,
        };
        await axios.put("/api/sections/" + section._id, newSection);
        this.$emit('resetUser');
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    toggleDelete() {
      this.deleting = !this.deleting;
    },
    async deleteSection(section) {
      try {
        await axios.delete("/api/sections/" + section._id);
        this.$emit('resetUser');
        this.deleting = false;
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
</style>

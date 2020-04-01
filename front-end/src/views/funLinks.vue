<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#5ff6a6" />

  <div v-if="!edit">
    <h1>Fun Links!</h1>
    <div class="buttonLinks">
      <OuterLink text="YouTube" link="https://youtube.com" color="#ff5722" />
      <OuterLink text="Facebook" link="https://facebook.com" color="#2196f3" />
      <OuterLink text="Instagram" link="https://instagram.com" color="#f2e35a" />
      <OuterLink text="Gmail" link="https://mail.google.com" color="#ff5722" />
      <OuterLink text="Amazon" link="https://amazon.com" color="#f2e35a" />
      <!-- Here's the loop that will go through all links in the array once I can get data to be permanent-->
      <OuterLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />
    </div>
    <button @click="toggleEdit">Edit</button>
  </div>

  <div v-if="edit">
    <h1>Click on a Link to Edit</h1>
    <div class="buttonLinks">
      <div v-for="link in links" :key="link.text">
        <EditLink :text="link.text" :link="link.link" :color="link.color" />
        <button @click="selectLink(link)">select</button>
      </div>
    </div>
    <p></p>

    <div v-if="selectedLink">
      <h1>Item Selected:</h1>
      <p>Name:</p>
      <input v-model="selectedLink.text">
      <p>Link:</p>
      <input v-model="selectedLink.link">
      <p>Color:</p>
      <input v-model="selectedLink.color">
      <button @click="editLink">Edit Link</button>
      <button @click="deleteLink">Delete</button>
    </div>

    <p></p>
    <InnerLink text="Create New Link" link="/createLink" color="#5ff6a6" />
    <button @click="toggleEdit">Done</button>
  </div>

</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
import OuterLink from "../components/outerLink.vue";
import EditLink from "../components/editLink.vue";
export default {
  name: 'Fun',
  data() {
    return {
      links: [],
      edit: false,
      selectedLink: null,
      selected: false,
    }
  },
  components: {
    InnerLink,
    OuterLink,
    EditLink
  },
  created() {
    this.getLinks();
  },
  methods: {
    async getLinks() {
      try {
        let list = await axios.get("/api/funlinks");
        this.links = list.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
    selectLink(link) {
      this.selectedLink = link;
    }
  }
}
</script>

<style scoped>
</style>

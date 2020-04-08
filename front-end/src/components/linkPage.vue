<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#5ff6a6" />

  <div v-if="!edit">
    <h1>{{section}} Links!</h1>
    <div class="buttonLinks">
      <!-- Here's the loop that will go through all links in the array once I can get data to be permanent-->
      <OuterLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />
    </div>
    <hr />
    <p></p>
    <button class="pure-button pure-button-primary" @click="toggleEdit">Edit</button>
  </div>

  <div v-if="edit">
    <h1>Click on a Link to Edit</h1>
    <div class="buttonLinks">
      <div v-for="link in links" :key="link.text">
        <DisabledLink :text="link.text" :color="link.color" />
        <button @click="selectLink(link)">select</button>
      </div>
    </div>
    <p></p>

    <div v-if="selectedLink">
      <h1>Item Selected:</h1>
      <EditLink :selectedLink="selectedLink" section="fun" @reset="reset" />
    </div>

    <p></p>
    <InnerLink text="Create New Link" link="/createLink" color="#5ff6a6" />
    <button class="pure-button pure-button-primary" @click="toggleEdit">Done</button>
    <p></p>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
import OuterLink from "../components/outerLink.vue";
import DisabledLink from "../components/disabledLink.vue";
import EditLink from "../components/editLink.vue";
export default {
  name: 'linkPage',
  props: {
    section: String,
  },
  components: {
    InnerLink,
    OuterLink,
    DisabledLink,
    EditLink,
  },
  data() {
    return {
      links: [],
      edit: false,
      selectedLink: null,
    }
  },

  created() {
    this.getLinks();
  },
  methods: {
    async getLinks() {
      try {
        let response = await axios.get("/api/links");
        console.log(response);
        this.links = response.data;
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
    },
    reset() {
      this.selectedLink = null;
      this.getLinks();
    },
  }
}
</script>

<style scoped>
</style>

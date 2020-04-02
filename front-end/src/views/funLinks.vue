<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#5ff6a6" />

  <div v-if="!edit">
    <h1>Fun Links!</h1>
    <div class="buttonLinks">
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

    <p></p>
    <InnerLink text="Create New Link" link="/createLink" color="#5ff6a6" />
    <button @click="toggleEdit">Done</button>
    <p></p>
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
    },
    async editLink(link) {
      try {
        await axios.put("/api/funlinks/" + link._id, {
          text: link.text,
          link: link.link,
          color: link.color,
        });
        this.selectedLink = null;
        this.getLinks();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLink(link) {
      try {
        await axios.delete("/api/funlinks/" + link._id);
        this.selectedLink = null;
        this.getLinks();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.editRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.editRow input {
  height: 25px;
}

button {
  margin: 5px 5px 10px 5px;
}
</style>

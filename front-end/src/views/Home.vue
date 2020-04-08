<template>
<div class="home">
  <div v-if="user">
    <div v-if="!edit && !section">
      <button class="pure-button pure-button-primary" @click.prevent="logout">Logout</button>
      <p></p>
      <hr />
      <div class="buttonLinks">
        <SectionLink name="Fun" color="#5ff6a6" />
        <SectionLink name="Work" color="#ff5722" />
        <SectionLink name="School" color="#2196f3" />

        <SectionLink v-for="section in sections" :key="section._id" :name="section.name" :color="section.color" />
      </div>
      <hr />
      <button class="pure-button pure-button-primary" @click="toggleEdit">Edit</button>
    </div>

    <div v-if="section">
      <LinkPage :section="section" />
    </div>

    <div v-if="edit">
      <h1>Click on a section to edit</h1>
      <p><i>For simplicity's sake, the Fun, Work, and School sections are permament.</i></p>
      <p><i>You may only change the color of the section.</i></p>
      <div v-for="section in sections" :key="section._id">
        <DisabledLink :text="section.name" :color="section.color" />
        <button @click="selectSection(section)">select</button>
      </div>

      <div v-if="selectedSection">
        <h1>Selected Section:</h1>
        <EditSection :selectedSection="selectedSection" @resetUser="resetUser" />
      </div>
      <hr />
      <p></p>
      <InnerLink text="Create New Section" link="/createSection" color="#5ff6a6" />
      <button class="pure-button pure-button-primary" @click="toggleEdit">Done</button>
    </div>
  </div>
  <!--Log In Page-->
  <!--if="!user"-->
  <div v-else>
    <LoginPage @resetUser="resetUser" />
  </div>

  <div class="filler">
  </div>
</div>
</template>

<script>
import axios from 'axios';
import InnerLink from "../components/innerLink.vue";
import DisabledLink from "../components/disabledLink.vue";
import SectionLink from "../components/sectionLink.vue";
import LoginPage from "../components/loginPage.vue";
import EditSection from "../components/editSection.vue";
import LinkPage from "../components/linkPage.vue";
export default {
  name: 'Home',
  components: {
    InnerLink,
    DisabledLink,
    SectionLink,
    LoginPage,
    EditSection,
    LinkPage,
  },
  data() {
    return {
      sections: null,
      edit: false,
      selectedSection: null,
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
    section() {
      return this.$root.$data.section;
    }
  },

  created() {
    this.getUser();
    this.getSections();
  },
  methods: {
    async getUser() {
      try {
        let users = await axios.get('/api/users');
        this.$root.$data.user = users.data.user;
      } catch (error) {
        console.log(error);
        this.$root.$data.user = null;
      }
    },
    async getSections() {
      try {
        let sections = await axios.get('/api/sections');
        this.sections = sections.data;
      } catch (error) {
        console.log(error);
      }
    },
    resetUser() {
      this.getUser();
      this.getSections();
      this.edit = false;
    },

    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
        console.log(error);
      }
    },

    toggleEdit() {
      this.edit = !this.edit;
    },
    selectSection(section) {
      this.selectedSection = section;
    },
    reset() {
      this.selectedSection = null;
    },
  }
}
</script>

<style scoped>
.filler {
  height: 50px;
}

p {
  text-align: left;
}
</style>

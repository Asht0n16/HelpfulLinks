<template>
<div class="linkPage">
  <InnerLink text="Home" link="/" color="#ff5722" />
  <h1>Work Links!</h1>

  <div class="buttonLinks">
    <OuterLink text="OPS Whiteboard" link="https://opswhiteboard.byu.edu" color="#2196f3" />
    <OuterLink text="Service Now" link="https://it.byu.edu/nav_to.do?uri=%2F$pa_dashboard.do%3Fsysparm_dashboard%3D9b23fed3dbfba740318513141b96195a" color="#f2e35a" />
    <OuterLink text="Sentinel" link="http://monitoring.byu.edu/sentinel" color="#5ff6a6" />
    <OuterLink text="Routine Tasks" link="https://opswhiteboard.byu.edu/routine-tasks/" color="#ff5722" />
    <OuterLink text="When To Work" link="https://whentowork.com/logins.htm" color="#2196f3" />
    <OuterLink text="PERSUM" link="https://y.byu.edu/ry/ae/prod/person/cgi/personSummary.cgi" color="#f2e35a" />
    <OuterLink text="GROGPER" link="https://home.byu.edu/webapp/gro-web/personGroup.htm" color="#5ff6a6" />
    <OuterLink text="it@byu.edu" link="https://outlook.office365.com/owa/office.byu.edu/service-desk@byu.mail.onmicrosoft.com/" color="#2196f3" />
    <!-- Here's the loop that will go through all links in the array once I can get data to be permanent-->
    <OuterLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />
  </div>
  <InnerLink text="Create New Link" link="/createLink" color="#ff5722" />
</div>
</template>

<script>
import InnerLink from "../components/innerLink.vue"
import OuterLink from "../components/outerLink.vue"
export default {
  name: 'Work',
  components: {
    InnerLink,
    OuterLink
  },
  computed: {
    links() {
      return this.$root.$data.workLinks;
    }
  }
}
</script>

<style scoped>
</style>

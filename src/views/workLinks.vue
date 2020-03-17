<template>
<div class="linkPage">
  <ButtonLink text="Home" link="/" color="#ff5722" />
  <h1>Work Links!</h1>

  <div class="buttonLinks">
    <ButtonLink text="OPS Whiteboard" link="https://opswhiteboard.byu.edu" color="#2196f3" />
    <ButtonLink text="Service Now" link="https://it.byu.edu/nav_to.do?uri=%2F$pa_dashboard.do%3Fsysparm_dashboard%3D9b23fed3dbfba740318513141b96195a" color="#f2e35a" />
    <ButtonLink text="Sentinel" link="http://monitoring.byu.edu/sentinel" color="#5ff6a6" />
    <ButtonLink text="Routine Tasks" link="https://opswhiteboard.byu.edu/routine-tasks/" color="#ff5722" />
    <ButtonLink text="When To Work" link="https://whentowork.com/logins.htm" color="#2196f3" />
    <ButtonLink text="PERSUM" link="https://y.byu.edu/ry/ae/prod/person/cgi/personSummary.cgi" color="#f2e35a" />
    <ButtonLink text="GROGPER" link="https://home.byu.edu/webapp/gro-web/personGroup.htm" color="#5ff6a6" />
    <ButtonLink text="it@byu.edu" link="https://outlook.office365.com/owa/office.byu.edu/service-desk@byu.mail.onmicrosoft.com/" color="#2196f3" />

    <ButtonLink v-for="link in links" :key="link.text" :text="link.text" :link="link.link" :color="link.color" />

  </div>
  <ButtonLink text="Create New Link" link="/createLink" color="#ff5722" />
</div>
</template>

<script>
import ButtonLink from "../components/buttonLink.vue"
export default {
  name: 'Work',
  components: {
    ButtonLink,
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

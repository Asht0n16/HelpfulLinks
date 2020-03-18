<template>
<a target="_blank" :href="link" :id="text" :style="{
  backgroundColor: color,
  //width: '30%',
  fontSize: '1.5rem',
  textDecoration: 'none',
  color: 'black',
  padding: '.75rem',
  margin: '.5rem 1.5rem .5rem 1.5rem',
  border: '3px black outset',
  borderRadius: '9px'
}">{{text}}
  <img :src="imgSrc" /></a>
</template>

<script>
export default {
  name: 'outerLink',
  props: {
    text: String,
    link: String,
    color: String,
  },
  data() {
    return {
      imgSrc: this.$root.$data.pictures[Math.floor(Math.random() * 50)].src,
    }
  }
}
</script>

<style scoped>
</style>

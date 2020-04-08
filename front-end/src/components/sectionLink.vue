<template>
<button @click.prevent="updateSection" :id="name" :style="{
  backgroundColor: color,
  width: '30%',
  minWidth: '115px',
  fontSize: '1.5rem',
  textDecoration: 'none',
  color: 'black',
  padding: '.75rem',
  margin: '.5rem 1.5rem .5rem 1.5rem',
  border: '3px black outset',
  borderRadius: '9px'
}">{{name}}</button>
</template>

<script>
export default {
  name: 'innerLink',
  props: {
    name: String,
    color: String,
  },
  methods: {
    updateSection() {
      if (this.name === "Home") {
        this.$root.$data.section = '';
        return;
      }
      this.$root.$data.section = this.name;
    }
  }
}
</script>

<style scoped>
</style>

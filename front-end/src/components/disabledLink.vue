<template>
<button :style="{
    backgroundColor: color,
    //width: '30%',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'black',
    padding: '.75rem',
    margin: '.5rem 1.5rem .5rem 1.5rem',
    border: '3px black outset',
    borderRadius: '9px'
  }">{{text}}</button>
</template>

<script>
export default {
  name: 'disabledLink',
  props: {
    text: String,
    link: String,
    color: String,
  },
}
</script>

<style scoped>
</style>

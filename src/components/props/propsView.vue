<template lang="html">
  <div class="app">
    <h2>This props value : </h2> <br>
    <h5> {{ text }} </h5> <br>
    <input type="text" v-model="text">
  </div>
</template>

<script>
export default {
  name: 'propsView',
  data () {
    return {
      text: this.propsName
    }
  },
  props: ['propsName']
}
</script>

<style scoped>
.app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>

<template lang="html">
  <div class="app">
    <img src="./../../assets/logo.png" width="50" height="50">
    <h1> {{ number }} </h1> <br>
    <button @click="addNum()">+</button> <br>
  </div>
</template>

<script>
export default {
  name: 'vuex',
  props: ['number', 'addNum']
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

button {
  background: #fff;
  border: 1px #ccc solid;
  border-radius: 5px;
  outline: 0;
}

button:active {
background: -moz-linear-gradient(top,  #06f 0%, #00f 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#06f), color-stop(100%,#00f)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top,  #06f 0%,#00f 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top,  #06f 0%,#00f 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top,  #06f 0%,#00f 100%); /* IE10+ */
background: linear-gradient(to bottom,  #06f 0%,#00f 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#06f', endColorstr='#00f',GradientType=0 ); /* IE6-9 */
  border: 1px #000000 solid;
}
</style>

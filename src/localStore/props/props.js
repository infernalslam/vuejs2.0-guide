let props = `
  <template lang="html">
    <div id="app">
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
        text: this.valName
      }
    },
    props: ['valName']
  }
  </script>

  <style scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
  </style>
  `

export default props

let app = `
  <template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1> {{ number }} </h1> <br>
    <button @click="addNum()">+</button> <br>
  </div>
  </template>

<script>
  import store from './vuex/store'
  import Vuex from 'vuex'
  global.vuex = Vuex
  export default {
    store,
    name: 'app',
    methods: {
      addNum () {
        store.commit('addNum', 1)
      }
    },
    computed: {
      number () {
        return store.state.number
      }
    }
  }
</script>

<style>
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

export default app

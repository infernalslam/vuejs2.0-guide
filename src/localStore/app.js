let app = `
  <template>
  <div>
    <router-link to="/page1"></router-link>
    <router-link to="/page2"></router-link>
    <router-view></router-view>
  </div>
  </template>

  <script>
  export default {
    name: 'app'
  }
  </script>

  <style>
  /* Up to you */
  </style>
  `

export default app

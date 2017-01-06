let app = `
  <template>
  <div>
  
    <!-- props value valName -->
    <props-view :val-name="valName"></props-view>

  </div>
  </template>

  <script>
  import propsView from 'components/propsView'

  export default {
    name: 'app',
    data () {
      return {
        valName: ''
      }
    },
    components: {
      propsView
    }
  }
  </script>

  <style>
  /* Up to you */
  </style>
  `

export default app

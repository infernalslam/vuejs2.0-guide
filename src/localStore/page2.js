let page2 = `
  <template>
  <div>
    <h1> {{ msg }} </h1>
  </div>
  </template>

  <script>
  export default {
    name: 'page2',
    data () {
      return {
        msg: 'This's Page2'
      }
    }
  }
  </script>

  <style>
  /* Up to you */
  </style>
  `

export default page2

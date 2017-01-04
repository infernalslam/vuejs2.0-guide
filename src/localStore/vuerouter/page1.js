let page1 = `
  <template>
  <div>
    <h1> {{ msg }} </h1>
  </div>
  </template>

  <script>
  export default {
    name: 'page1',
    data () {
      return {
        msg: 'This's Page1'
      }
    }
  }
  </script>

  <style>
  /* Up to you */
  </style>
  `

export default page1

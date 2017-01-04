let main = `
  import Vue from 'vue'
  import App from './App'
  import VueRouter from 'vue-router'
  /* components */
  import Page1 from './components/page1'
  import Page2 from './components/page2'

  Vue.use(VueRouter)

  const routes = [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
  const router = new VueRouter({ routes })

  /* eslint-disable no-new */
  new Vue({
    router,
    el: '#app',
    render: h => h(App)
  }).$mount('#app')
  `

export default main

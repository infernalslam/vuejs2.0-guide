let store = `
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  const state = {
    number: 0
  }

  /* mutations */
  const mutations = {
    addNum: (state, num) => {
      state.number += num
    }
  }

  /* getters */
  const getters = {
    number: state => state.number
  }

  /* actions */
  const actions = {
    addNumber: (state, num) => {
      store.commit('addNum', num)
    }
  }

  let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
  })

  global.store = store
  export default store
  `

export default store

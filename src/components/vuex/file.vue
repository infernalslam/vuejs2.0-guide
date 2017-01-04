<template lang="html">
  <div>
    <span class="label label-default mac" @click="Vuex(1)"> store.js </span> &nbsp
    <span class="label label-danger mac" @click="Vuex(2)"> App.vue </span> &nbsp
  </div>
</template>

<script>
export default {
  name: 'file',
  props: ['Vuex']
}
</script>

<style lang="css">
</style>

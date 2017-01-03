<template lang="html">
  <div>
    <span class="label label-default mac" @click="VueRouter(1)"> Main.js </span> &nbsp
    <span class="label label-danger mac" @click="VueRouter(2)"> App.vue </span> &nbsp
    <span class="label label-success mac" @click="VueRouter(3)"> page1.vue </span> &nbsp
    <span class="label label-info mac" @click="VueRouter(4)"> page2.vue </span>
  </div>
</template>

<script>
export default {
  name: 'file',
  props: ['VueRouter']
}
</script>

<style lang="css">
</style>

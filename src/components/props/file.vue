<template lang="html">
  <div>
    <span class="label label-default mac" @click="Props(1)"> App.js </span> &nbsp
    <span class="label label-danger mac" @click="Props(2)"> props.vue </span> &nbsp
  </div>
</template>

<script>
export default {
  name: 'props',
  props: ['Props']
}
</script>

<style lang="css">
</style>

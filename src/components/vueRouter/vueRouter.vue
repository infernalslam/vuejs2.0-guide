<template lang="html">
  <span class="mac textinbrowser">
    <li><a class="a" @click="VueRouterUrl(1)"> page 1 </a></li>
    <li><a  class="a" @click="VueRouterUrl(2)"> page 2 </a></li> <br>
    {{ vueRouterShow }}
  </span>
</template>

<script>
export default {
  name: 'vueRouter',
  props: ['VueRouterUrl', 'vueRouterShow']
}
</script>

<style lang="css">
.a {
  cursor: pointer;
}
</style>

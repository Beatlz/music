<template>
  <div id="app">
    <music></music>
  </div>
</template>

<script>
import music from './music.vue';
  
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  
  created() {},
  
  components: {
    music
  }
}
</script>

<style lang="scss">

  line {
    shape-rendering: crispEdges;
  }
  
</style>

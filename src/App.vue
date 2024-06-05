<script>

  import Header from './components/Header.vue';

  export default {
    components: {
      Header
    },
    data(){

    },
  }


</script>


<template>

  <Header/>

  <router-view></router-view>
  
</template>


<style lang="scss" scoped>

  @use './assets/scss/main.scss';

</style>
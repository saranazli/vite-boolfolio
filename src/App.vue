<script>

  // in attesa di fare il db del progetto laravel Auth per creare il model e quindi avere la mia apiurl, ho gettato le basi di quel che abbiamo ripassato in classe, ovviamente la api è errata.

  import axios from 'axios';
  import {store} from './data/store';

  export default {

    data(){
      return{
        posts: []
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
          .then(result =>{
            this.posts = result.data
          })
        .catch(error =>{
          console.log(error.message);
        })
      }
    },
    
    mounted(){
      this.getApi();
    }
  }


</script>


<template>
  <div>

  </div>
</template>


<style lang="scss" scoped>

</style>
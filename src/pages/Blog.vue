<script>
  import {store} from '../../data/store';
  import axios from 'axios';

  export default {
    name: 'Blog',
    posts: [],

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(results=>{
          posts = results.data.data
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
    },
    mounted(){
      this.getApi
    }
  }
</script>

<template>
  <h1>I miei post</h1>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.id }} - {{ post.title }}
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>
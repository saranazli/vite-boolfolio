<script>
  import {store} from '../data/store';
  import axios from 'axios';

  export default {
    name: 'Blog',
    projects: [],

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(results=>{
          projects = results.data.data
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
  <h1>I miei progetti</h1>
  <div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.id }} -:- {{ project.title }}
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>
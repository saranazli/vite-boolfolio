<template>
  <div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>


<!-- <script>

  import axios from 'axios';
  import {store} from './data/store';

  export default {

    data(){
      return{
        projects: []
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
          .then(result =>{
            this.projects = result.data
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
    <h1>LISTA PROGETTI</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.id }} -:- {{ project.title }}
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

@import './assets/scss/main.scss';

</style> -->
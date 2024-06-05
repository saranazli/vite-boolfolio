<script>
  export default {
    name: 'Header'
  }
</script>

<template>
  <div>
    <ul>
      <li>
        <router-link :to=*{name: 'home'}*>Home</router-link>
      </li>
      <li>
        <router-link :to=*{name: 'about'}*>About</router-link>
      </li>
      <li>
        <router-link :to=*{name: 'contacts'}*>Contacts</router-link>
      </li>
      <li>
        <router-link :to=*{name: 'blog'}*>Blog</router-link>
      </li>
      <li>
        <router-link :to=*{name: 'home'}*></router-link>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>
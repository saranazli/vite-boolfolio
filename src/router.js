import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Blog from './pages/Blog.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name:'home',
      components: Home
    },
    {
      path: '/',
      name:'about',
      components: About
    },
    {
      path: '/',
      name:'contacts',
      components: Contacts
    },
    {
      path: '/',
      name:'blog',
      components: Blog
    },
    {
      path: '/:pathMatch(.*)*',
      name:'error404',
      components: Error404
    }
  ]
})

export { router };
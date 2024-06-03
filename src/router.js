import { createRouter, createWebHistory } from 'vue-router';
import home from './assets/pages/home.vue';
import about from './assets/pages/about.vue';
import contacts from './assets/pages/contacts.vue';
import blog from './assets/pages/blog.vue';
import error404 from './assets/pages/error404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name:'home',
      components: home
    },
    {
      path: '/',
      name:'about',
      components: about
    },
    {
      path: '/',
      name:'contacts',
      components: contacts
    },
    {
      path: '/',
      name:'blog',
      components: blog
    },
    {
      path: '/:pathMatch(.*)*',
      name:'error404',
      components: error404
    }
  ]
})

export {router};
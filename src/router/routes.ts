import { RouteRecordRaw } from 'vue-router';
import TodoView from 'src/views/TodosView.vue';
import Home from '../pages/IndexPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },

 

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

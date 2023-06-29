import { createRouter, createWebHistory } from 'vue-router'
import Table from '../views/Table.vue'
import Text from '../views/Text.vue'
import Textcomp from '../views/Textcomp.vue'
import Tablevalue from '../views/Tablevalue.vue'
import forms from '../components/forms.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'text',
      component: Text
      },
    {
    path: '/table',
    name: 'tables',
    component: Table
    },
    {
      path: '/tablecomp',
      name: 'tablescomp',
      component: Textcomp
    },
    {
      path: '/task2',
      name: 'task2',
      component: forms
    },
    {
      path: '/taskdisplay',
      name: 'taskdisplay',
      component: Tablevalue
    },
  
  

  ]
})

export default router

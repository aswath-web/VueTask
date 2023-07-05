import { createRouter, createWebHistory } from 'vue-router'
import Table from '../views/Table.vue'
import Text from '../views/Text.vue'
import Textcomp from '../views/Textcomp.vue'
import Tablevalue from '../views/Tablevalue.vue'
import Axios from '../views/Axios.vue'
import employee from '../views/employee.vue'
import Login from '../views/Login.vue'

import App from '../App.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'text',
      component:Login
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
      path: '/taskaxios',
      name: 'taskaxios',
      component: Axios
    },
    {
      path: '/taskdisplay',
      name: 'taskdisplay',
      component: Tablevalue
    },
    {
      path: '/employee',
      name: 'employee',
      component: employee
    },
  
  

  ]
})

export default router

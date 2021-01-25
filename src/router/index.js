import Vue from 'vue'
import VueRouter from 'vue-router'
import one from '../components/one.vue'
import two from '../components/two.vue'
import three from '../components/three.vue'
import add from '../components/add.vue'
import edit from '../components/edit.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'one',
    component: one
  },
  {
    path: '/two',
    name: 'two',
    component: two
  },
  {
    path: '/three',
    name: 'three',
    component: three
  },
  {
    name: 'add',
    path: '/add',
    component: add
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: edit
  }
]

const router = new VueRouter({
  routes
})
export default router

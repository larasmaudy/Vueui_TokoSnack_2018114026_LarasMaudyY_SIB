import { createRouter, createWebHashHistory } from 'vue-router'
import Produk from '../views/produk/Produk.vue'
import Createproduk from '../views/produk/Createproduk.vue'
import Editproduk from '../views/produk/Editproduk.vue'
import Langgan from '../views/pelanggan/Langgan.vue'
import Createpelanggan from '../views/pelanggan/Createpelanggan.vue'
import Editpelanggan from '../views/pelanggan/Editpelanggan.vue'

const routes = [
  {
    path: '/',
    name: 'produk',
    component: Produk
  },
  {
    path: '/createproduk',
    name: 'Createproduk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createproduk
  },
  {
    path: '/editproduk',
    name: 'Editproduk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editproduk
  }, 
  {
    path: '/langgan',
    name: 'Langgan',
    component: Index
  },
  {
    path: '/createpelanggan',
    name: 'Createpelanggan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpelanggan
  },
  {
  path: '/editpelanggan',
  name: 'Editpelanggan',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Editpelanggan
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

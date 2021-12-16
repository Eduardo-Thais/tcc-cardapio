import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/bebidas',
    name: 'Bebidas',
    component: () => import(/* webpackChunkName: "bebidas" */ '../views/Bebidas.vue')
  },
  /*  
{
  path: '/entradas',
  name: 'Entradas',
  component: () => import(/* webpackChunkName: "entradas"  '../views/Entradas.vue')
},*/
{
  path: '/administrador',
  name: 'Administrador',
  component: () => import(/* webpackChunkName: "administrador" */ '../views/Administrador.vue')
},
  {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
{
  path: '/produtos',
  name: 'Produtos',
  component: () => import(/* webpackChunkName: "produtos" */ '../views/ProdutosCadastro.vue')
},
{
  path: '/refrigerantes',
  name: 'Refrigerantes',
  component: () => import(/* webpackChunkName: "administrador" */ '../views/Refrigerantes.vue')
},
{
  path: '/pizzas',
  name: 'Pizzas',
  component: () => import(/* webpackChunkName: "Pizzas" */ '../views/Pizzas.vue')
},
{
  path: '/pizzasSalgadas',
  name: 'PizzasSalgadas',
  component: () => import(/* webpackChunkName: "Pizzas" */ '../views/PizzasSalgadas.vue')
},
{
  path: '/:mesa',
  name: 'Inicio',
  component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
}


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

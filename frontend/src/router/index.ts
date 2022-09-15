import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')

export const routes = [
  {
    path: '/',
    name: 'Resumo Carteira',
    component: Home,
  },
  {
    path: '/product/fixed-income',
    name: 'Renda Fixa',
    component: () => import('../views/FixedIncome/index.vue'),
  },
  {
    path: '/product/variable-income',
    name: 'Renda Variável',
    component: () => import('../views/VariableIncome/index.vue'),
  },
  {
    path: '/product/investiment-funds',
    name: 'Fundos de Investimento',
    component: () => import('../views/Stocks/InvestimentFunds.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router

import router from './router'
import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import filters from './filters'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { pt } from '@formkit/i18n'
import App from './App.vue'
import './assets/css/tailwind.css'
import '../src/assets/css/fonts.css'
import 'animate.css';

import AxiosAdapter from './services/AxiosAdapter';
import VariableIncomeHttpService from './services/VariableIncomeHttpService';

const httpClient = new AxiosAdapter()
const VariableIncomeService = new VariableIncomeHttpService(httpClient, 'variable-income')

const app = createApp(App)
app.config.globalProperties.$filters = filters
app.component(VueFeather.name, VueFeather)
app.use(router)
app.provide('VariableIncomeService', VariableIncomeService)

app.use(plugin, defaultConfig({
  locales: { pt },
  locale: 'pt',
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'max-w-full',
        label: 'form-label inline-block mb-1 text-gray-700',
        helper: 'text-sm text-gray-500 mt-1',
        message: 'text-red-500 mb-1 text-xs',
      },
      text: {
        input: 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      },
      number: {
        input: 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      },
      date: {
        input: 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      },
      submit: {
        input: 'px-4 py-2 text-base rounded-full inline-flex items-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none dark:focus:ring-offset-dark-eval-2 bg-primary-500 text-white hover:bg-primary-600'
      },
    }),
  },
})
)
app.mount('#app')


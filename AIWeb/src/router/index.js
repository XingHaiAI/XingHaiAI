import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/homepage/homepage.vue'
import AIIntelligent from '@/ProductService/AIIntelligent.vue'
import License from '@/ProductService/License.vue'
import Meaning from '@/ProductService/Meaning.vue'
import TextSimilar from '@/ProductService/TextSimilar.vue'
import ContactUs from '@/DocumentCenter/Contact.vue'
import Application from '@/Useplace/Application.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: homepage
    },
    {
      path:'/ProductService/AIIntelligent',name:'AIIntelligent',component:AIIntelligent
    },
    {
      path:'/ProductService/License',name:'License',component:License
    },
    {
      path:'/ProductService/Meaning',name:'Meaning',component:Meaning
    },
    {
      path:'/ProductService/TextSimilar',name:'TextSimilar',component:TextSimilar
    },
    {
      path:'/Useplace',name:'Application',component:Application
    },
    {
      path:'/ContactUs',name:'ContactUs',component:ContactUs
    }
  ]
})

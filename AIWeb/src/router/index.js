import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/homepage/homepage.vue'
import AIIntelligent from '@/ProductService/AIIntelligent.vue'
import License from '@/ProductService/License.vue'
import Meaning from '@/ProductService/Meaning.vue'
import TextSimilar from '@/ProductService/TextSimilar.vue'
import ContactUs from '@/DocumentCenter/Contact.vue'
import Application from '@/Useplace/Application.vue'
import HandWritten from '@/ProductService/HandWritten.vue'
import GeneralWord from '@/ProductService/GeneralWord.vue'
import BankCard from '@/ProductService/BankCard.vue'
import Speach from '@/ProductService/Speach.vue'
import SpeachRecog from '@/ProductService/SpeachRecog.vue'
import ProductBlog from '@/ProductBlog/ProductBlog.vue'

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
    },
    {
      path:'/ProductBlog',name:'ProductBlog',component:ProductBlog
    },
    {
      path:'/ProductService/HandWritten',name:'HandWritten',component:HandWritten
    },
    {
      path:'/ProductService/GeneralWord',name:'GeneralWord',component:GeneralWord
    },
    {
      path:'/ProductService/BankCard',name:'BankCard',component:BankCard
    },
    {
      path:'/ProductService/Speach',name:'Speach',component:Speach
    },
    {
      path:'/ProductService/SpeachRecog',name:'SpeachRecog',component:SpeachRecog
    }
  ]
})

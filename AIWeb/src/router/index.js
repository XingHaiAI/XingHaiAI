import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/homepage/homepage.vue'
import AIIntelligent from '@/homepage/ProductService/AIIntelligent.vue'
import License from '@/homepage/ProductService/License.vue'
import Meaning from '@/homepage/ProductService/Meaning.vue'
import TextSimilar from '@/homepage/ProductService/TextSimilar.vue'
import ContactUs from '@/homepage/ContactUs.vue'
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
      path:'/ContactUs',name:'ContactUs',component:ContactUs
    }
  ]
})

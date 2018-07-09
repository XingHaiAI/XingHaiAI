import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/homepage/homepage.vue'
import AIIntelligent from '@/ProductService/AIIntelligent.vue'
import License from '@/ProductService/License.vue'
import Meaning from '@/ProductService/Meaning.vue'
import TextSimilar from '@/ProductService/TextSimilar.vue'
import ContactUs from '@/DocumentCenter/Contact.vue'
import ContactProblem from '@/DocumentCenter/ContactProblem.vue'
import ContactBussiness from '@/DocumentCenter/ContactBussiness.vue'
import Application from '@/Useplace/Application.vue'
import HandWritten from '@/ProductService/HandWritten.vue'
import GeneralWord from '@/ProductService/GeneralWord.vue'
import BankCard from '@/ProductService/BankCard.vue'
import Speach from '@/ProductService/Speach.vue'
import SpeachRecog from '@/ProductService/SpeachRecog.vue'
import ProductBlog from '@/ProductBlog/ProductBlog.vue'
import Comments from '@/ProductService/Comments.vue'
import Emotional from '@/ProductService/Emotional.vue'
import IDCard from '@/ProductService/IDCard.vue'
import Teaching from '@/Useplace/Teaching.vue'
import SpeachAPI from '@/Useplace/SpeachAPI.vue'
import FaceAPI from '@/Useplace/FaceAPI.vue'
import WordAPI from '@/Useplace/WordAPI.vue'
import PictureAPI from '@/Useplace/PictureAPI.vue'
import NPLAPI from '@/Useplace/NPLAPI.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TechGuideAPI from '@/Useplace/TechGuide.vue'
import TechGuideSDK from '@/Useplace/TechGuideSDK.vue'
import CommonProblems from '@/Useplace/CommonProblems.vue'
import PreSpeachRecg from '@/PresentDoc/SpeachRecg/SpeachRecg.vue'
import FaceRecg from '@/PresentDoc/FaceRecg/FaceRecg.vue'
import PicRecg from '@/PresentDoc/PicRecg/PicRecg.vue'
import WordRecg from '@/PresentDoc/WordRecg/WordRecg.vue'
import login from '@/login/login.vue'
import signIn from '@/login/signIn.vue'
import ConsoleSDK from '@/Console/SDK.vue'
import ConsoleFaceRec from '@/Console/FaceRec.vue'
import ConsolePicRec from '@/Console/PicRec.vue'
import ConsoleWordRec from '@/Console/WordRec.vue'
import ConsoleSpeach from '@/Console/Speach.vue'
import ConsoleNPL from '@/Console/NPL.vue'
import APPList from '@/Console/APPList.vue'
Vue.use(Router)
Vue.use(ElementUI)

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
      path:'/ContactBussiness',name:'ContactBussiness',component:ContactBussiness
    },
    {
      path:'/ContactProblem',name:'ContactProblem',component:ContactProblem
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
    },
    {
      path:'/ProductService/Comments',name:'Comments',component:Comments
    },
    {
      path:'/ProductService/Emotional',name:'Emotional',component:Emotional
    },
    {
      path:'/ProductService/IDCard',name:'IDCard',component:IDCard
    },
    {
      path:'/Teaching',name:'Teaching',component:Teaching
    },
    {
      path:'/TechGuideAPI',name:'TechGuideAPI',component:TechGuideAPI
    },
    {
      path:'/TechGuideSDK',name:'TechGuideSDK',component:TechGuideSDK
    },
    {
      path:'/SpeachAPI',name:'SpeachAPI',component:SpeachAPI
    },
    {
      path:'/FaceAPI',name:'FaceAPI',component:FaceAPI
    },
    {
      path:'/WordAPI',name:'WordAPI',component:WordAPI
    },
    {
      path:'/PictureAPI',name:'PictureAPI',component:PictureAPI
    },
    {
      path:'/NPLAPI',name:'NPLAPI',component:NPLAPI
    }
    ,
    {
      path:'/PresentDoc/SpeachRecg',name:'SpeachRecg',component:PreSpeachRecg
    },
    {
      path:'/PresentDoc/FaceRecg',name:'FaceRecg',component:FaceRecg
    },
    {
      path:'/PresentDoc/PicRecg',name:'PicRecg',component:PicRecg
    },
    {
      path:'/PresentDoc/WordRecg',name:'WordRecg',component:WordRecg
    },
    {
      path:'/CommonProblems',name:'TechGuideSDK',component:CommonProblems
    },
    {
      path:'/login',name:'login',component:login
    },
    {
      path:'/signIn',name:'signIn',component:signIn
    },
    {
      path:'/Console/SDK',name:'ConsoleSDK',component:ConsoleSDK
    },
    {
      path:'/Console/FaceRec',name:'ConsoleFaceRec',component:ConsoleFaceRec
    },
    {
      path:'/Console/PicRec',name:'ConsolePicRec',component:ConsolePicRec
    },
    {
      path:'/Console/WordRec',name:'ConsoleWordRec',component:ConsoleWordRec
    },
    {
      path:'/Console/Speach',name:'ConsoleSpeach',component:ConsoleSpeach
    },
    {
      path:'/Console/NPL',name:'ConsoleNPL',component:ConsoleNPL
    },
    {
      path:'/Console/APPList',name:'APPList',component:APPList
    }
  ]
})

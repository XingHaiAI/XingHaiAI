<template>

  <div id="app":style="{minWidth: 12 + 'rem'}">

    <div class="navbar">
      <!--LOGO-->
      <div>
        <router-link to="/" class="logo"></router-link>
      </div>
      <!--各个菜单项，鼠标点击时展开-->
      <div class="menu_group">
        <div class="menu_item" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">产品服务</div>
        <router-link class="menu_item" to="/Useplace"  style="text-decoration: none">应用场景</router-link>
        <div class="menu_item" v-on:mouseover="documentOver" v-on:mouseout="documentOut">文档中心</div>
        <div class="menu_item" v-on:mouseover="presentOver" v-on:mouseout="presentOut">试用演示</div>
        <router-link to="/ProductBlog" class="menu_item" style="text-decoration: none">产品博客</router-link>
      </div>
      <!-- 登录注册 -->
      <div class="login_sign_in">
        <div class="login"><router-link to="/signIn" class="login_item" style="text-decoration: none">注册</router-link></div>
        <div class="divider">|</div>
        <div class="sign_in"><router-link to="/login" class="login_item" style="text-decoration: none">登录</router-link></div>
      </div>

      <div id="service" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">
        <table style="width: 100%;">
          <tr class="column">
            <div class="productServiceHeader">语音处理</div>
            <router-link to="/ProductService/SpeachRecog" style="text-decoration: none"><td class="productService">语音识别</td></router-link>
            <router-link to="/ProductService/Speach" style="text-decoration: none"><td class="productService">语音合成</td></router-link>
          </tr>
          <tr class="column column_center">
            <div class="productServiceHeader">自然语言处理</div>
            <router-link to="/ProductService/Meaning" style="text-decoration: none"><td class="productService">词义相似度</td></router-link>
            <router-link to="/ProductService/TextSimilar" style="text-decoration: none"><td class="productService">短文本相似度</td></router-link>
            <router-link to="/ProductService/Comments" style="text-decoration: none"><td class="productService">评论观点抽取</td></router-link>
            <router-link to="/ProductService/Emotional" style="text-decoration: none"><td class="productService">情感倾向分析</td></router-link>
            <router-link to="/ProductService/AIIntelligent" style="text-decoration: none"><td class="productService">AI客服</td></router-link>
          </tr>
          <tr class="column column_center">
            <div class="productServiceHeader">文字识别</div>
            <router-link to="/ProductService/HandWritten" style="text-decoration: none"><td class="productService">手写识别</td></router-link>
            <router-link to="/ProductService/GeneralWord" style="text-decoration: none"><td class="productService">通用文字识别</td></router-link>
            <router-link to="/ProductService/IDCard" style="text-decoration: none"><td class="productService">身份证识别</td></router-link>
            <router-link to="/ProductService/BankCard" style="text-decoration: none"><td class="productService">银行卡识别</td></router-link>
            <router-link to="/ProductService/License" style="text-decoration: none"><td class="productService">车牌识别</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">驾驶证识别</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">行驶证识别</td></router-link>
          </tr>
          <tr class="column column_center">
            <div class="productServiceHeader">人脸识别</div>
            <router-link to="" style="text-decoration: none"><td class="productService">人脸检测</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">人脸对比</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">人脸查找</td></router-link>
          </tr>
          <tr class="column">
            <div class="productServiceHeader">图像识别</div>
            <router-link to="" style="text-decoration: none"><td class="productService">通用图形分析</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">去模糊化</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">人重识别</td></router-link>
            <router-link to="" style="text-decoration: none"><td class="productService">车型识别</td></router-link>
          </tr>
        </table>
      </div>
      <div id="document" v-on:mouseover="documentOver" v-on:mouseout="documentOut">
        <table style="position: relative;top: 0.1rem">
          <!--<router-link to="/Teaching" style="text-decoration: none"><td class="documentCenter">入门教学</td></router-link>-->
          <router-link to="/ContactUs" style="text-decoration: none"><td class="documentCenter">联系我们</td></router-link>
          <router-link to="/TechGuideSDK" style="text-decoration: none"><td class="documentCenter">技术指南</td></router-link>
          <router-link to="/CommonProblems" style="text-decoration: none"><td class="documentCenter">常见问题</td></router-link>
          <router-link to="/Teaching" style="text-decoration: none"><td class="documentCenter">API文档</td></router-link>
        </table>
      </div>
      <div id="present" v-on:mouseover="presentOver" v-on:mouseout="presentOut">
        <table style="position: relative;top: 0.1rem">
          <!--<router-link to="/PresentDoc/SpeachRecg" style="text-decoration: none"><td class="documentCenter">语音识别</td></router-link>
          <router-link to="/PresentDoc/PicRecg" style="text-decoration: none"><td class="documentCenter">图像识别</td></router-link>
          <router-link to="/PresentDoc/WordRecg" style="text-decoration: none"><td class="documentCenter">文字识别</td></router-link>
          <router-link to="/PresentDoc/FaceRecg" style="text-decoration: none"><td class="documentCenter">人脸识别</td></router-link>-->
          <router-link to="/PresentDoc/FaceRecg" style="text-decoration: none"><td class="documentCenter">人脸检测</td></router-link>
          <router-link to="" style="text-decoration: none"><td class="documentCenter">人脸对比</td></router-link>
          <router-link to="" style="text-decoration: none"><td class="documentCenter">身份证识别</td></router-link>
          <router-link to="" style="text-decoration: none"><td class="documentCenter">车牌识别</td></router-link>
        </table>
      </div>
    </div>


    <router-view></router-view>

    <div id="footer" style="margin: 0rem;padding: 0rem;width: 100%" v-if="$route.path!='/login'&&$route.path!='/signin'">
      <img style="width: 100%;margin: 0rem;padding: 0rem" src="./assets/联系我们.jpg"/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      showTechnologyMenuItemContent:function(){
        var TechnologyMenuItemContent=document.getElementById("Technology_menu_item_content");
        TechnologyMenuItemContent.className="technology_menu_item_content_show";
      },
      hideTechnologyMenuItemContent:function(){
        var TechnologyMenuItemContent=document.getElementById("Technology_menu_item_content");
        TechnologyMenuItemContent.className="technology_menu_item_content_hide";
      },
      showSolutionMenuItemContent:function(){
        var SolutionMenuItemContent=document.getElementById("Solution_menu_item_content");
        SolutionMenuItemContent.className="solution_menu_item_content_show";
      },
      hideSolutionMenuItemContent:function(){
        var SolutionMenuItemContent=document.getElementById("Solution_menu_item_content");
        SolutionMenuItemContent.className="solution_menu_item_content_hide";
      },
      mouseOver()/*产品服务下拉框出现*/
      {
        var service=document.getElementById("service")
        service.style.display='block';
      },
      mouseOut()/*产品服务下拉框消失*/
      {
        var service=document.getElementById("service")
        service.style.display='none';
      },
      documentOver()/*文档中心下拉框出现*/
      {
        var service=document.getElementById("document")
        service.style.display='block';
      },
      documentOut()/*文档中心下拉框消失*/
      {
        var service=document.getElementById("document")
        service.style.display='none';
      },
      presentOver()/*文档中心下拉框出现*/
      {
        var service=document.getElementById("present")
        service.style.display='block';
      },
      presentOut()/*文档中心下拉框消失*/
      {
        var service=document.getElementById("present")
        service.style.display='none';
      }
    }
  }

</script>

<style>
  .documentCenter{
    display: inline-block;
    color: white;
    font-size: 0.137rem;
    margin-left: 0.22rem;
    margin-bottom: 0.137rem;
    width: 100%;
  }
  #document{
    display: none;
    height: 1.9rem;
    width: 8%;
    margin-top: 0rem;
    margin-left: 5.75rem;
    left: 40%;
    top:100%;
    color: white;
    background-color: #060606;
    cursor:pointer;
  }
  #present{
    display: none;
    height: 1.9rem;
    width: 8%;
    margin-top: 0rem;
    margin-left: 6.8rem;
    left: 51%;
    top:100%;
    color: white;
    background-color: #060606;
    cursor:pointer;
  }
  .productServiceHeader{
    color: white;
    font-size: 0.137rem;
    width:100%;
    margin-bottom: 0.2rem;
    align:left;
  }
  .column{
    margin-top: 0.1rem;
    height: 2.2rem !important;
    text-align: center !important;
    width: 1.3rem !important;
    float: left;
    height: 100%;
  }

  .column_center{
    border-left: solid #ffffff90 0.01rem;
    border-right: solid #ffffff90 0.01rem;
  }

  .productService{
    color: #ffffff90;
    font-size: 0.137rem;
    height: 0.23rem;
    margin-right: 0.10rem;
    margin-left: 0.10rem;
    margin-bottom: 0.20rem;
    margin-top: 0.10rem;
    width:20%;
    align:left;
  }
  #service{
    display: none;
    margin-left: 0.9rem;
    color: white;
    /*background-color: #2e3d4f;*/
    background-color: #060606;
    height:2.90rem;
    width: 6.60rem;
    left:10%;
    top:100%;
    cursor:pointer;
  }
  ul{
    list-style: none;
  }
  /*上面是暂时的导航栏下拉框的属性*/

  body{
    padding: 0;
    margin: 0;
    width: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    margin-left:-0.137rem;
    margin-top:-0.0rem;
    padding: 0;
  }
  div{
    margin: 0;
    padding: 0;
    vertical-align: top;
  }

  router-link{
    margin: 0;
    padding: 0;
    vertical-align: top;
  }

  @keyframes navbar_bg_color_ani {
    to {background-color: #060606
    }
  }

  .navbar{
    width: 100%;
    height: 0.5rem;
    min-width: 9rem;
    line-height: 0.5rem;
    position: fixed;
    background-color: rgba(6,6,6,1);
    top:0;
    left: 0;
    z-index: 10;
    /*background-color: rgba(6,6,6,0);*/
    /*transition: background-color 0.7s;*/
  }
  /*.navbar:hover{*/
    /*background-color: rgba(6,6,6,1);*/
  /*}*/


  .navbar .logo{
    margin-right: 1rem;
    background-image: url("assets/pic/logo.png");
    background-size: 100% 100%;
    background-position: center;
    margin-top: 0.15rem;
    margin-left: 0.22rem;
    width: 2.18rem;
    height: 0.2rem;
    float: left;
    font-size: 0.16rem;
    text-align: center;
  }
  .navbar .logo a{
    color: #fff;
  }
  .menu_group{
    float: left;
    width: 60%;
    padding-left: 0.5rem;
  }
  .menu_item{
    height: 0.5rem;
    color: white;
    line-height: 0.5rem;
    font-size: 0.137rem;
    float: left;
    margin-right: 0.5rem;
    cursor:pointer;
  }
  .login_sign_in{
    width: 10%;
    height: 0.5rem;
    float: right;
    margin-right: 0.5rem;
    line-height: 0.5rem;
  }
  .login{
    font-size: 0.12rem;
    float: right;
    cursor:pointer;
  }
  .login_item{
    color: white;
    cursor:pointer;
  }
  .divider{
    height: 0.3rem;
    color: white;
    line-height: 0.5rem;
    font-size: 0.12rem;
    float: right;
    margin: 0 0.08rem;
  }
  .sign_in{
    height: 0.5rem;
    color: white;
    line-height: 0.5rem;
    font-size: 0.12rem;
    float: right;
    cursor:pointer;
  }
  .sign_in:hover {
    animation: menu_btn_color_ani 0.3s forwards;
  }



  @keyframes menu_item_button_ani {
    to {background-color: blue}
    to {color: white}
  }


  /*.menu_item_botton{*/
    /*font-size: 0.123rem;*/
    /*text-align: center;*/
    /*line-height: 4vh;*/
    /*background-color: white;*/
    /*color: blue;*/
    /*border-radius: 5%;*/
    /*height: 4vh;*/
    /*margin-top: 2vh;*/
    /*width: 0.683rem;*/
    /*float: left;*/
  /*}*/

  /*.navbar:hover .menu_item_botton{*/
    /*animation: menu_item_button_ani 1s forwards;*/
  /*}*/

  /*.Technology_menu_item_content_title{*/
    /*color: white;*/
    /*font-size: inherit;*/
    /*font-weight: 900;*/
    /*padding-top: 3vh;*/
    /*padding-left: 0.273rem;*/
  /*}*/

  /*.technology_menu_item_content_title_sub_title{*/
    /*color: inherit;*/
    /*font-size: 0.137rem;*/
    /*padding-top: 1.5vh;*/
    /*font-weight: 400;*/
    /*padding-left: 0.273rem;*/
  /*}*/

  /*.technology_menu_item_content_title_sub_title_content_first{*/
    /*color: inherit;*/
    /*font-size:0.11rem;*/
    /*font-weight: 100;*/
    /*padding-left: 0.273rem;*/
    /*padding-top: 0.7vh;*/
    /*display: inline;*/
  /*}*/

  /*.technology_menu_item_content_title_sub_title_content{*/
    /*color: inherit;*/
    /*font-size: 0.11rem;*/
    /*font-weight: 100;*/
    /*padding-left: 0.137rem;*/
    /*padding-top: 0.7vh;*/
    /*display: inline;*/
  /*}*/
  /*.technology_menu_item_content_title_sub_title_content_first:hover{*/
    /*color: blue;*/
  /*}*/

  /*.technology_menu_item_content_title_sub_title_content:hover{*/
    /*color: blue;*/
  /*}*/

  /*.technology_menu_item_content_coloum_1{*/
    /*display: inline-block;*/
  /*}*/
  /*.technology_menu_item_content_coloum_2{*/
    /*margin-left: 1.366rem;*/
    /*display: inline-block;*/
  /*}*/

  /*.technology_menu_item_content_coloum_3{*/
    /*margin-left: 1.366rem;*/
    /*display: inline-block;*/
  /*}*/


  /*.Solution_menu_item_content_coloum_1{*/
    /*margin-left: 1.366rem;*/
    /*display: inline-block;*/
  /*}*/

  /*.menu_item_group_block:hover{*/
    /*background-color: grey;*/
  /*}*/

  /*.el-header{*/
    /*height:0;*/
  /*}*/

  /*.el-main{*/
    /*margin:0;*/
    /*padding:0;*/
  /*}*/
</style>

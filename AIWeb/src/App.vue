<template>
	<div id="app">
		<div class="navbar">
		    <!--LOGO-->
		    <router-link to="/" class="logo" style="text-decoration: none">兴海物联开发平台</router-link>
		    <!--各个菜单项，鼠标点击时展开-->
		    <div class="menu_group">
		        <div class="menu_item" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">产品服务</div>
		        <router-link to="/Useplace" class="menu_item" style="text-decoration: none">应用场景</router-link>
		        <div class="menu_item"v-on:mouseover="documentOver" v-on:mouseout="documentOut">文档中心</div>
		        <div class="menu_item"v-on:mouseover="presentOver" v-on:mouseout="presentOut">试用演示</div>
		        <router-link to="/ProductBlog" class="menu_item" style="text-decoration: none">产品博客</router-link>
		        <div class="login_sign_in">
		            <div class="login"><router-link to="/signIn" class="login_item" style="text-decoration: none">注册</router-link></div>
		            <div class="divider">|</div>
		            <div class="sign_in"><router-link to="/login" class="login_item" style="text-decoration: none">登录</router-link></div>
		        </div>
		    </div>
      <div id="service" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">
        <table style="width: 100%;">
      <tr>
        <router-link to="/ProductService/AIIntelligent" style="text-decoration: none"><td class="productService">AI智能</td></router-link>
        <router-link to="/ProductService/TextSimilar" style="text-decoration: none"><td class="productService">短文本相似度</td></router-link>
        <router-link to="/ProductService/Meaning" style="text-decoration: none"><td class="productService">词义相似度</td></router-link>
      </tr>
        <tr>
          <router-link to="/ProductService/License" style="text-decoration: none"><td class="productService">短文本相似度</td></router-link>
        <router-link to="/ProductService/Comments" style="text-decoration: none"><td class="productService">评论观点抽取</td></router-link>
        <router-link to="/ProductService/Emotional" style="text-decoration: none"><td class="productService">情感倾向分析</td></router-link>
        </tr>
        <tr>
          <router-link to="/ProductService/IDCard" style="text-decoration: none"><td class="productService">身份证识别</td></router-link>
          <router-link to="/ProductService/HandWritten" style="text-decoration: none"><td class="productService">手写识别</td></router-link>
        <router-link to="/ProductService/GeneralWord" style="text-decoration: none"><td class="productService">通用文字识别</td></router-link>
      </tr>
          <tr>
          <router-link to="/ProductService/BankCard" style="text-decoration: none"><td class="productService">银行卡识别</td></router-link>
          <router-link to="/ProductService/Speach" style="text-decoration: none"><td class="productService">语音合成</td></router-link>
          <router-link to="/ProductService/SpeachRecog" style="text-decoration: none"><td class="productService">语音识别</td></router-link>
          </tr>
        </table>
      </div>
      <div id="document" v-on:mouseover="documentOver" v-on:mouseout="documentOut">
      <table style="position: relative;bottom: 100%">
        <router-link to="/ContactUs" style="text-decoration: none"><td class="documentCenter">联系我们</td></router-link>
        <router-link to="/Teaching" style="text-decoration: none"><td class="documentCenter">入门教学</td></router-link>
      </table>
      </div>
      <div id="present" v-on:mouseover="presentOver" v-on:mouseout="presentOut">
        <table style="position: relative;bottom: 100%">
        <router-link to="/PresentDoc/SpeachRecg" style="text-decoration: none"><td class="documentCenter">语音识别</td></router-link>
        <router-link to="/PresentDoc/PicRecg" style="text-decoration: none"><td class="documentCenter">图像识别</td></router-link>
        <router-link to="/PresentDoc/WordRecg" style="text-decoration: none"><td class="documentCenter">文字识别</td></router-link>
        <router-link to="/PresentDoc/FaceRecg" style="text-decoration: none"><td class="documentCenter">人脸识别</td></router-link>
      </table>
      </div>
		</div>
		<router-view></router-view>
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
    font-size: 1vw;
    margin-left: 1.1vw;
    margin-bottom: 1vw;
    width: 100%;
  }
  #document{
    display: none;
    width: 7%;
    margin-top: 3vw;
    margin-left: 41vw;
    left: 42%;
    top:100%;
    color: white;
    background-color: #060606;
    cursor:pointer;
  }
  #present{
    display: none;
    width: 7%;
    margin-top: 3vw;
    margin-left: 50.5vw;
    left: 51%;
    top:100%;
    color: white;
    background-color: #060606;
    cursor:pointer;
  }
.productService{
  display: inline-block;
  color: white;
  font-size: 1vw;
  margin-right: 60px;
  margin-left: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
  width:20%;
  align:left;
}
  #service{
    display: none;
    margin-left: 5vw;
    color: white;
    background-color: #2e3d4f;
    background-color: #060606;
    height:290px;
    width: 800px;
    left:10%;
    top:100%;
    cursor:pointer;
  }
  ul{
    list-style: none;
  }
  /*上面是暂时的导航栏下拉框的属性*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  margin-left:-1vw;
  margin-top:-1vh;
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
    top:0;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 8vh;
    background-color: transparent;
    display:inline-block;
    min-width: 900px;
    width:expression(document.body.clientWidth < 900? "900px":"auto" );
}

.navbar:hover{
    animation: navbar_bg_color_ani 1.5s forwards;
}

.logo{
    font-size: 1vw;
    color: white;
    width: 15%;
    float: left;
    line-height: 8vh;
    text-align: center;
    margin-left: 3%;
}


.menu_group{
    float: left;
    width: 72%;
}


@keyframes menu_item_border_ani {
    to {border-bottom: 3.5px white solid;}
}

.menu_item{
    margin-left: 5.5vw;
    margin-top: 0.5vh;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1vw;
    float: left;
    cursor:pointer;
}

.login_item{
    margin-left: 1.5vw;
    margin-top: 0.5vh;
    color: white;
    line-height: 7vh;
    height: 7vh;
    float: left;
    cursor:pointer;
}

.menu_item:hover{
    animation: menu_item_border_ani 0.3s forwards;
}

@keyframes menu_btn_color_ani {
    to {color:  blue;}
}

.login{
    margin-top: 0.5vh;
  margin-right: 0vw;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1.2vw;
    float: right;
    cursor:pointer;
}

.login:hover {
    animation: menu_btn_color_ani 0.3s forwards;
}

.divider{

    margin-top: 0.5vh;
  margin-right: 0vw;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1.2vw;
    float: right;
}

.sign_in{
    margin-top: 0.5vh;
  margin-right: 1vw;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1.2vw;
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


.menu_item_botton{
    font-size: 0.9vw;
    text-align: center;
    line-height: 4vh;
    background-color: white;
    color: blue;
    border-radius: 5%;
    height: 4vh;
    margin-top: 2vh;
    width: 5vw;
    float: left;
}

.navbar:hover .menu_item_botton{
    animation: menu_item_button_ani 1s forwards;
}

.Technology_menu_item_content_title{
    color: white;
    font-size: inherit;
    font-weight: 900;
    padding-top: 3vh;
    padding-left: 2vw;
}

.technology_menu_item_content_title_sub_title{
    color: inherit;
    font-size: 1vw;
    padding-top: 1.5vh;
    font-weight: 400;
    padding-left: 2vw;
}

.technology_menu_item_content_title_sub_title_content_first{
    color: inherit;
    font-size: 0.8vw;
    font-weight: 100;
    padding-left: 2vw;
    padding-top: 0.7vh;
    display: inline;
}

.technology_menu_item_content_title_sub_title_content{
    color: inherit;
    font-size: 0.8vw;
    font-weight: 100;
    padding-left: 1vw;
    padding-top: 0.7vh;
    display: inline;
}
.technology_menu_item_content_title_sub_title_content_first:hover{
    color: blue;
}

.technology_menu_item_content_title_sub_title_content:hover{
    color: blue;
}

.technology_menu_item_content_coloum_1{
    display: inline-block;
}
.technology_menu_item_content_coloum_2{
    margin-left: 10vw;
    display: inline-block;
}

.technology_menu_item_content_coloum_3{
    margin-left: 10vw;
    display: inline-block;
}


.Solution_menu_item_content_coloum_1{
    margin-left: 10vw;
    display: inline-block;
}

.menu_item_group_block:hover{
    background-color: grey;
}

</style>

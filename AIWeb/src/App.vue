<template>
	<div id="app">
		<div class="navbar">
		    <!--LOGO-->
		    <div class="logo">兴海物联开发平台</div>
		    <!--各个菜单项，鼠标点击时展开-->
		    <div class="menu_group">
		    	<transition-group name="slide">
			        <div  v-for="(list,index) in navbarItems" :key="index" :id="list.desc" @mouseover="target" @mouseleave="normal" class="menu_item"> {{ list.name }}
			        	<div v-show="index===currentOne" class="decoration"></div>
			        </div>
		    	</transition-group>
		        <div class="login_sign_in">
		            <div class="login">登陆</div>
		            <div class="divider">|</div>
		            <div class="sign_in">注册</div>
		        </div>
		    </div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
    name: 'app',
    data:  function (){
    return{
        navbarItems: [
            {
                "name": "产品服务",
                "desc": "cpfw",
            },
            {
                "name": "应用场景",
                "desc": "yycj",
            },
            {
                "name": "文档中心",
                "desc": "wdzx",
            },
            {
                "name": "试用演示",
                "desc": "syys",
            },
            {
                "name": "产品博客",
                "desc": "cpbk",
            }
        ],
        currentOne:10
    	}
    },
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
	    target(event){
	    	var el=event.currentTarget
	    	if(el.id==='cpfw')
	    		this.currentOne=0
	    	else if(el.id==='yycj')
	    		this.currentOne=1
	    	else if(el.id==='wdzx')
	    		this.currentOne=2
	    	else if(el.id==='syys')
	    		this.currentOne=3
	    	else if(el.id==='cpbk')
	    		this.currentOne=4

	    },
	    normal(){
	    	this.currentOne=10
	    }
    }
}

</script>

<style>
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

.decoration{
	position: absolute;
    bottom:0;
	height:3.5px;
	background-color:white;
	width:55px;
}

.slide-enter-active{
    transform:translateY(0);
    transition:all 0.7s ease;
}

.slide-leave-active{
    transform:translateY(200%);
    transition:all 0.7s ease;
}

.slide-enter{
    transform:translateY(100%);
}

.slide-leave{
    transform:translateY(0);
}

@keyframes navbar_bg_color_ani {
    to {background-color: #262626}
}

.navbar{
    top:0;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 8vh;
    background-color: transparent;
}

.navbar:hover{
    animation: navbar_bg_color_ani 1.5s forwards;
}

.logo{
    font-size: 1vw;
    color: white;
    width: 10vw;
    float: left;
    line-height: 8vh;
    text-align: center;
    margin-left: 3vw;
}


.menu_group{
    float: left;
    width: 82vw;
}


.menu_item{
    margin-left: 5.5vw;
    margin-top: 0.5vh;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1vw;
    float: left;
}

@keyframes menu_btn_color_ani {
    to {color:  blue;}
}

.login{
    margin-top: 0.5vh;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1.2vw;
    float: right;
}

.login:hover {
    animation: menu_btn_color_ani 0.3s forwards;
}

.divider{

    margin-top: 0.5vh;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1.2vw;
    float: right;
}

.sign_in{
    margin-top: 0.5vh;
    color: white;
    line-height: 7vh;
    height: 7vh;
    font-size: 1.2vw;
    float: right;
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

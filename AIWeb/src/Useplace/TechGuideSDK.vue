<template>
  <body id="all">
  <div id="header">
    <img src="../assets/Banner.png">
  </div>
  <div id="body">
    <div id="aside">
      <el-row class="tac">
        <el-col :span="12" style="width:inherit">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1" style="text-align: center">
              <template slot="title">
                <span>入门教学</span>
              </template>
              <el-menu-item index="1-1" class="teach" popper-append-to-body="true">API调用规则</el-menu-item>
              <el-menu-item index="1-2" class="teach"popper-append-to-body="true">调用返回值</el-menu-item>
              <el-menu-item index="1-3" class="teach"popper-append-to-body="true">代码示例</el-menu-item>
            </el-submenu>
            <el-submenu index="2"style="text-align: center">
              <template slot="title"style="mode:horizontal;collapse-transition:false">
                <span>技术指南</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true"> <router-link to="/TechGuideSDK" style="text-decoration: none;color: black">如何使用SDK</router-link></el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true"> <router-link to="/TechGuideAPI" style="text-decoration: none;color: black">如何使用API</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="3" style="text-align: center">
               <span slot="title">
                 <router-link to="/CommonProblems" style="text-decoration: none;color: black">常见问题</router-link>
               </span>
            </el-menu-item>
            <el-submenu index="4" style="text-align: center">
              <template slot="title">
                <span>API接口</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true"><router-link to="/SpeachAPI" style="text-decoration: none;color: black">语音处理</router-link></el-menu-item>
             <el-menu-item index="2-2" class="teach"popper-append-to-body="true"><router-link to="/WordAPI" style="text-decoration: none;color: black">文字识别</router-link></el-menu-item>
              <el-menu-item index="2-3" class="teach"popper-append-to-body="true"><router-link to="/FaceAPI" style="text-decoration: none;color: black">人脸识别</router-link></el-menu-item>
              <el-menu-item index="2-4" class="teach"popper-append-to-body="true"><router-link to="/PictureAPI" style="text-decoration: none;color: black">图像识别</router-link></el-menu-item>
              <el-menu-item index="2-5" class="teach"popper-append-to-body="true"><router-link to="/NPLAPI" style="text-decoration: none;color: black">自然语言处理</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="5" style="text-align: center">
              <span slot="title">SDK下载</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div id="main">
      <div id="search">
        <div>
          <input class="searchInput" style="width: 70%;height:25%;margin-right:0.7%;border: #989898 1px solid;border-radius: 5px;" />
          <el-button type="primary" icon="el-icon-search" id="find"></el-button>
        </div>
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&gt<router-link to="" class="linkto">产品文档</router-link>&gtAPI调用规则</p>
      </div>
      <div id="text">
        <p style="font-size: 30px;margin-bottom: 10%">如何使用SDK</p>
        <p style="font-size: 25px">1. 注册账号并创建 API Key</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">如果您希望采用联网授权模式，则需要通过调用 SDK Auth API 进行联网授权与计费，因此您需要先在兴海物联 网站上创建账号，并创建一个 API Key。注意：在创建应用时请选择正确的 API Key 类型。如果您希望免费测试 SDK，请使用“免费 API Key”；如您希望进行正式的联网授权，请使用“正式 API Key”。</textarea>
        <p style="font-size: 25px">2. 下载SDK</p>
        <textarea rows="3"cols="70"disabled style="font-size: 20px">在控制台，展开“SDK\联网授权SDK”这个组，并点击“SDK下载”页。</textarea>
        <p style="font-size: 25px">3. 集成开发</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">下载 SDK 包文件后，您就可以根据包中的文档说明，开始集成开发了。如果您在开发过程中遇到任何问题，欢迎、在官网联系技术支持</textarea>
        <p style="font-size: 25px">如有疑问请<router-link to="" class="linkto"> 联系我们</router-link></p>
      </div>
    </div>
  </div>
  <div id="end">
    <img src="../assets/联系我们.png">
  </div>
  </body>
</template>

<script>
  export default {
    name:"TechGuideSDK",
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  #find{
    width: 10%;
    height: 25%;
    margin: 0;
    position: relative;
    right:0.5%;
  }
  .linkto{
    color: #4096ff;
    text-decoration: none
  }
  #text{
    text-align: center;
    top: 5%;
  }
  body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
  textarea{
    overflow:auto;
    background: transparent;
    color: black;
    border: none;
    resize: none;
    font-weight:lighter;
    margin-bottom:5vh;
  }
  .route{
    float: left;
    position: relative;
    top: 40%;
  }
  #search{
    height: 10%;
    padding-top:3%;
    padding-left: 5%;
    padding-bottom: 0;
  }
  .tac{
    height: 100%;
    width: 100%;
  }
  .teach{
    width: 100%;
  }
  #main{
    float: left;
    height:100%;
    width: 74%;
    margin: 0;
  }
  #aside{
    float: left;
    height: 100%;
    width: 26%;
    margin: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
  }
  #body{
    height:73.42%;
    width: 100%;
    margin: 0;
  }
  img{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #header{
    height:16.18%;
    width: 100%;
    background-color: black;
    margin: 0;
    padding: 0;
  }
  #all{
    height: 2200px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #end{
    height: 10.4%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
.el-menu-vertical-demo{
	height:240vh;
}
span{
  font-size:17px;
}
.searchInput{
  font-size:16px;
  padding-left:1vw;
}
</style>

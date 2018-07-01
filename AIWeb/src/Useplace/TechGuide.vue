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
        <p style="font-size: 30px;margin-bottom: 10%">如何使用API</p>
        <p style="font-size: 25px">1. 注册账号 </p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">如果您已经注册了账号，请忽略这一步。如果您还没有注册，可以在兴海物联人工智能平台官网 点击页面右上角的“注册”，在注册页面根据引导，完成注册。</textarea>
        <p style="font-size: 25px">2. 验证账号</p>
        <textarea rows="3"cols="70"disabled style="font-size: 20px">注册成功并首次登录控制台，您会看到这样一个界面。首先是验证邮箱</textarea>
        <p style="font-size: 25px">3. 创建API Key </p>
        <textarea rows="2"cols="70"disabled style="font-size: 20px">要调用 API，需要先创建一个 API Key（API 密钥），它是使用 API 和 SDK 的凭证。。</textarea>
        <textarea rows="3"cols="70"disabled style="font-size: 20px">完成 API Key 创建之后，您会看到页面刷新了，现在可以看到自己的账户余额和API调用量的统计。</textarea>
        <p style="font-size: 25px">4. 完成</p>
        <textarea rows="2"cols="70"disabled style="font-size: 20px">好了，所有需要的操作都已经完成，您现在可以跟着 API 文档，进行接入了。</textarea>
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
    name:"TechGuide",
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
    position: relative;

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

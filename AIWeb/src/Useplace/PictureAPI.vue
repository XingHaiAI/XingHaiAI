<template>
  <body id="all"style="min-width: 13.6rem">
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
            <el-submenu index="1" style="text-align: left;margin-top:0.5rem;min-height:0.6rem">
              <template slot="title">
                <span>入门教学</span>
              </template>
              <el-menu-item index="1-1" class="teach" popper-append-to-body="true"><router-link to="/Teaching" style="text-decoration: none;color: black;margin-left: 0.6rem;">API调用规则</router-link></el-menu-item>
              <el-menu-item index="1-2" class="teach"popper-append-to-body="true"><router-link to="" style="text-decoration: none;color: black;margin-left: 0.6rem;">调用返回值</router-link></el-menu-item>
              <el-menu-item index="1-3" class="teach"popper-append-to-body="true"><router-link to="" style="text-decoration: none;color: black;margin-left: 0.6rem;">代码示例</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2"style="text-align: left;min-height:0.6rem">
              <template slot="title"style="mode:horizontal;collapse-transition:false">
                <span>技术指南</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true"> <router-link to="/TechGuideSDK" style="text-decoration: none;color: black;margin-left: 0.6rem;">如何使用SDK</router-link></el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true"> <router-link to="/TechGuideAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">如何使用API</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="3" style="text-align: left;min-height:0.6rem">
               <span slot="title">
                 <router-link to="/CommonProblems" style="text-decoration: none;color: black">常见问题</router-link>
               </span>
            </el-menu-item>
            <el-submenu index="4" style="text-align: left;min-height:0.6rem">
              <template slot="title">
                <span>API接口</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true"><router-link to="/SpeachAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">语音处理</router-link></el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true"><router-link to="/WordAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">文字识别</router-link></el-menu-item>
              <el-menu-item index="2-3" class="teach"popper-append-to-body="true"><router-link to="/FaceAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">人脸识别</router-link></el-menu-item>
              <el-menu-item index="2-4" class="teach"popper-append-to-body="true"><router-link to="/PictureAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">图像识别</router-link></el-menu-item>
              <el-menu-item index="2-5" class="teach"popper-append-to-body="true"><router-link to="/NPLAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">自然语言处理</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="5" style="text-align: left;min-height:0.6rem">
              <span slot="title">SDK下载</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div id="main">
      <div id="search">
        <div>
          <input class="searchInput" style="width: 70%;height:25%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;" />
          <el-button type="primary" icon="el-icon-search" id="find" style="background-color: #409EFF;    border-color: #409EFF;color: #fff;"></el-button>
        </div>
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&gt<router-link to="" class="linkto">API接口</router-link>&gt图像识别</p>
      </div>
       <div class="from_group">
        <div class="blog">
          <div class="bolg_title"><img src="../assets/产品博客/icon.png" class="icon"/></img>图像识别</div>
          <div class="outline">语音合成服务，基于HTTP请求的REST API 接口，将文本转换为可以播放的MP3文件。将人类语言词汇内容转换为计算机可读输入。</div>
          <div class="more"><button class="APIbutton">API文档</button></div>
        </div>
        <div class="blog">
          <div class="bolg_title"><img src="../assets/产品博客/icon.png" class="icon"/></img>图像识别</div>
          <div class="outline">语音合成服务，基于HTTP请求的REST API 接口，将文本转换为可以播放的MP3文件。将人类语言词汇内容转换为计算机可读输入。</div>
          <div class="more"><button>API文档</button></div>
        </div>
      </div>
    </div>
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
    margin-bottom:0.3rem;
  }
  .route{
    float: left;
    position: relative;
    top: 40%;
  }
  #search{
    height: 11%;
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
    font-size: 0.15rem;
    margin-top: 0.1rem;
  }
  #main{
    float: left;
    height:100%;
    width: 74%;
    margin: 0;
    font-size: 0.21rem;
  }
  #aside{
    float: left;
    height: 15.3rem;
    width: 24%;
    margin: 0;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
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
    height: 18rem;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #end{
    height: 2.47rem;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .from_group{
    display: flex;
    flex-direction: column;
    width: 74%;
    height: 12rem;
  }
  .blog{
    margin-top:0.4rem;
    margin-bottom:0.2rem;
    margin-left:0.820rem;
    width:7.92rem;
    height:2rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    cursor:default;
  }
  .bolg_title{
    margin-top:0.2rem;
    margin-bottom:0.1rem;
    margin-left:0.137rem;
    font-size:0.23rem;
    letter-spacing:0.03rem;
  }
  .icon{
    margin-right:0.164rem;
    height:0.133rem;
    width:0.133rem;
  }
  .outline{
    margin-top:0.2rem;
    margin-left:0.41rem;
    font-size:0.15rem;
    font-weight:900;
    color:  #303030;
    font-weight:450;
    line-height:0.267rem;
  }
  .more{
    margin-top:0.133rem;
    margin-left:0.41rem;
    font-size:0.15rem;
    color:#3399FF;
    letter-spacing:0.02rem;
    cursor:pointer;
  }
  .el-menu-vertical-demo{
    height:15rem;
  }
  span{
    font-size:0.22rem;
    margin-left: 0.6rem;
  }
  button{
    width: 1.20rem;
    height: 0.25rem;
    text-align: center;
    background: transparent;
    position: relative;
    border-width: 0.01rem;
    border-color: #4096ff;
    color:#4096ff;
    font-size: 0.15rem;
    cursor:pointer;
  }
  button:hover{
    background: white;
    border-width: 0.02rem;
    border-color: #4096ff;
  }
  button:active{
    background: #4096ff;
    border-color: transparent;
    color:white;
  }
  .searchInput{
    font-size:0.16rem;
    padding-left:0.137rem;
  }
</style>

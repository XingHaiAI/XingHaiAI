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
          <input style="width: 70%;height:25%;margin: 0" />
          <el-button type="primary" icon="el-icon-search" id="find"></el-button>
        </div>
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&gt<router-link to="" class="linkto">API接口</router-link>&gtAPI调用规则</p>
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
  textarea{
    overflow:auto;
    background: transparent;
    color: black;
    border: none;
    resize: none;
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
.from_group{
  display: flex;
  flex-direction: column;
  width: 74%;
  height: 180vh;
}
.blog{
  margin-top:6vh;
  margin-bottom:3vh;
  margin-left:6vw;
  width:58vw;
  height:30vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  cursor:default;
}
.bolg_title{
  margin-top:3vh;
  margin-bottom:1.5vh;
  margin-left:1vw;
  font-size:23px;
  letter-spacing:3px;
}
.icon{
  margin-right:1.2vw;
  height:2vh;
  width:2vh;
}
.outline{
  margin-top:3vh;
  margin-left:3vw;
  font-size:15px;
  font-weight:900;
  color:  #303030;
  font-weight:450;
  line-height:4vh;
}
.more{
  margin-top:2vh;
  margin-left:3vw;
  font-size:15px;
  color:#3399FF;
  letter-spacing:2px;
  cursor:pointer;
}
.el-menu-vertical-demo{
  height:240vh;
}
span{
  font-size:17px;
}
button{
    width: 120px;
    height: 25px;
    text-align: center;
    background: transparent;
    position: relative;
    border-color: #99FFCC;
    color:#4096ff;
    font-size: 15px;
    cursor:pointer;
}
</style>

<template>
  <body id="all">
  <div id="header">
    <img src="../assets/控制台/banner.png">
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
                <span>功能</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerSpeachAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">语音处理</router-link></el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerWordAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">文字识别</router-link></el-menu-item>
              <el-menu-item index="2-3" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerFaceAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">人脸识别</router-link></el-menu-item>
              <el-menu-item index="2-4" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerPictureAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">图像识别</router-link></el-menu-item>
              <el-menu-item index="2-5" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerNPLAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">自然语言处理</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="2"style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerUseList" style="text-decoration: none;color: black;">应用列表</router-link></span>
            </el-menu-item>
            <el-menu-item index="3" style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerWatchList" style="text-decoration: none;color: black;">监控报表</router-link></span>
            </el-menu-item>
            <el-menu-item index="4" style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerSDKDownload" style="text-decoration: none;color: black;">SDK下载</router-link></span>
            </el-menu-item>
            <el-submenu index="5" style="text-align: left;min-height:0.6rem">
              <template slot="title">
                <span>财务中心</span>
              </template>
              <el-menu-item index="1-1" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerMoneyLeft" style="text-decoration: none;color: black;margin-left: 0.6rem;">账户余额</router-link></el-menu-item>
              <el-menu-item index="1-2" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerOrderList" style="text-decoration: none;color: black;margin-left: 0.6rem;">我的订单</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="4" style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerInfo" style="text-decoration: none;color: black;">账号信息</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div id="main">
      <div id="search">
        <p class="route"><router-link to="" class="linkto">控制台</router-link>&gt监控列报表></p>
      </div>
      <div class="line">
        <div class="line_pic"></div>
      </div>
      <div class="line">
        <div class="line_pic_left"></div>
        <div class="line_column_left">
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口1</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口2</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口3</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口4</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口5</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口6</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口7</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口8</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn">接口9</el-button>
        </div>
      </div>
      <div class="line">
        <div class="line_pic_left2"></div>
        <div class="line_column_left">
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn2">全部</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn2">成功</el-button>
          <el-button type="primary" icon="el-icon-search" id="find" class="line_column_btn2">失败</el-button>
        </div>
      </div>

      <div class="line2">
        <div class="line_word_left" style="width: 28%;float: left">时间范围</div>
        <div class="line_input_right">
          <input class="searchInput" style="width: 30%;height:15%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;float: left" />——<input class="searchInput" style="width: 30%;height:15%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;" />
        </div>
      </div>
      <div class="line2">
        <div class="line_word_left" style="width: 28%;float: left">调用次数</div>
        <div class="output"></div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  export default {
    name:"ControllerWatchList",
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

  body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
  .linkto{
    color: #4096ff;
    text-decoration: none
  }

  .line{
    width: 8.5rem;
    margin-left: 1rem;
    height: 3rem;
  }

  .line2{
    width: 8.5rem;
    margin-left: 1rem;
    height: 2rem;
  }


  .line_column_btn{
    width: 1.5rem;
    margin-left: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
  }

  .line_column_btn2{
    width: 1.5rem;
    margin-left: 0.2rem;
    margin-top: 0.7rem;
    margin-bottom: 0.15rem;
  }



  .line_pic{
    margin-left: -0.5rem;
    width: 9.4rem;
    height: 2.3rem;
    background-image: url("../assets/控制台/监控报表/小背景图.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }
  .line_pic_left{
    margin-left: -0.5rem;
    width: 2.4rem;
    height: 2.3rem;
    background-image: url("../assets/控制台/监控报表/API接口.png") !important;
    background-position: center;
    background-size: 100% 100%;
    float: left;
  }
  .line_pic_left2{
    margin-left: -0.5rem;
    width: 2.4rem;
    height: 2.3rem;
    background-image: url("../assets/控制台/监控报表/监控项.png") !important;
    background-position: center;
    background-size: 100% 100%;
    float: left;
  }
  .line_column_left{
    width: 6rem;
    height: 2.3rem;
    float: left;
    margin-left: 0.3rem;
  }

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
    top: 10%;
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
  .el-menu-vertical-demo{
    height:15.0rem;
  }
  span{
    font-size:0.22rem;
    margin-left: 0.6rem;
  }
  .searchInput{
    font-size:0.16rem;
    padding-left:0.137rem;
  }
</style>

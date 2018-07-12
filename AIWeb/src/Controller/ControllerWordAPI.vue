<template>
  <body id="all"style="min-width: 13.6rem">
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
              <el-menu-item index="2-1" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerSpeachAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">语音处理</router-link></el-menu-item>
              <el-menu-item index="2-2" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerWordAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">文字识别</router-link></el-menu-item>
              <el-menu-item index="2-3" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerFaceAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">人脸识别</router-link></el-menu-item>
              <el-menu-item index="2-4" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerPictureAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">图像识别</router-link></el-menu-item>
              <el-menu-item index="2-5" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerNPLAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">自然语言处理</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="2"style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerUseList" style="text-decoration: none;color: black;">应用列表</router-link></span>
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
        <p class="route"><router-link to="" class="linkto">控制台</router-link>&gt<router-link to="" class="linkto">功能</router-link>&gt文字识别</p>
      </div>
      <div class="line">
        <div class="column">
          <div class="column_title">通用文字识别</div>
          <div class="column_pic1"></div>
          <div class="column_word">识别图片中的文字信息</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
        <div class="column">
          <div class="column_title">手写识别</div>
          <div class="column_pic2"></div>
          <div class="column_word">识别手写中文汉字</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
      </div>
      <div class="line">
        <div class="column">
          <div class="column_title">身份证识别</div>
          <div class="column_pic3"></div>
          <div class="column_word">识别身份证正反面的文字信息</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
        <div class="column">
          <div class="column_title">银行卡识别</div>
          <div class="column_pic4"></div>
          <div class="column_word">识别银行卡的卡号并返回发卡行和卡片性质信息</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
      </div>
      <div class="line">
        <div class="column">
          <div class="column_title">车牌识别</div>
          <div class="column_pic5"></div>
          <div class="column_word">对小客车的车牌进行识别</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
        <div class="column">
          <div class="column_title">驾驶证识别</div>
          <div class="column_pic6"></div>
          <div class="column_word">识别机动车驾驶证所有关键字段</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
      </div>
      <div class="line">
        <div class="column">
          <div class="column_title">行驶证识别</div>
          <div class="column_pic7"></div>
          <div class="column_word">识别机动车行驶证所有关键字段</div>
          <el-button class="button4submit">API文档</el-button>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  export default {
    name:"ControllerWordAPI",
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

  .line{
    width: 8.5rem;
    margin-left: 1rem;
    height: 3.5rem;
  }

  .column{
    float: left;
    width: 3.4rem !important;
    height: 3.3rem !important;
    margin-left:5% ;
    margin-right: 5%;
  }

  .column_title{
    width: 3.4rem;
    text-align: center;
    margin-bottom: 0.1rem;
  }

  .column_pic1{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/通用文字识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic2{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/手写识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic3{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/身份证识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic4{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/银行卡识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic5{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/车牌识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic6{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/驾驶证识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic7{
    width: 3.4rem;
    height: 2rem;
    background-image: url("../assets/控制台/文字识别/行驶证识别.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_word{
    color: grey;
    font-size: 0.15rem;
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
  }

  /*.column_btn{*/
    /*width: 70%;*/
    /*margin-left: 15%;*/
    /*color: white;*/
    /*font-weight: 600;*/
    /*line-height: 0.5rem;*/
    /*background-color: blue;*/
  /*}*/
  .button4submit{
    color: white;
    background-color: #2285ea;
    height: 0.45rem;
    width: 2.0rem;
    font-size: 0.2rem;
  }
  .button4submit:hover{
    background-color: #2473d7;
    color: white;
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
    height:5rem;
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

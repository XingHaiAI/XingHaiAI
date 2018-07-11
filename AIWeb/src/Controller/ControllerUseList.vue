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
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div id="main">
      <div id="search">
        <p class="route"><router-link to="" class="linkto">控制台</router-link>&gt应用列表></p>
      </div>
      <div class="line">
        <div class="line_pic"></div>
        <el-button type="primary" class="bg_btn" id="find">创建API KEY</el-button>
      </div>

      <div class="table">
        <el-table v-bind:data="manifests" highlight-current-row border height="500">
          <el-table-column prop="name" label="应用名称"></el-table-column>
          <el-table-column prop="APIKEY" label="API KEY"></el-table-column>
          <el-table-column prop="APIPassword" label="API密码"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column inline-template label="操作">
                        <span>
                            <el-button type="text" size="small" v-on:click="edit(row.ID)" icon="edit">查看</el-button>
                            <el-button type="text" size="small" v-on:click="del(row.ID)" icon="delete">删 除</el-button>
                        </span>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  export default {
    name:"ControllerUseList",
    data() {
      return {
        isCollapse: true,
        manifests:[{name:'lalala',APIKEY:'121313',APIPassword:'121212',status:"启用"}]
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
    height: 3.5rem;
  }



  .line_pic{
    margin-left: -0.5rem;
    width: 9.4rem;
    height: 2.3rem;
    background-image: url("../assets/控制台/应用列表/背景.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .bg_btn{
    margin-left: 3.65rem;
    margin-top: -0.8rem;

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

  .table{
    width: 9rem;
    margin-left: 1rem;
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

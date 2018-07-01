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
              <span slot="title">常见问题</span>
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
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&gt<router-link to="" class="linkto">产品文档</router-link>&gt常见问题</p>
      </div>
      <div id="text">
        <p style="font-size: 25px">注册账号都需要哪些条件？</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">注册账号时需要提供您真实有效的邮箱和手机号，我们会在验证过程中向您的邮箱或手机号发送验证码，只有验证通过才能使用我们的 API & SDK </textarea>
        <p style="font-size: 25px">收不到邮件验证码怎么办？</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">可能被邮箱判断为垃圾邮件，请您打开垃圾邮件所在文件夹查看是否收到。如果仍然无法收到验证码，您可尝试换用手机号进行验证</textarea>
        <p style="font-size: 25px">收不到短信验证码怎么办？</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">可能会由于手机停机、存储信息已满、信号网络延迟等原因没有及时收到验证码，这时请检查您的手机，保证手机可正常接收短信后，尝试重新获取验证码。如果仍然无法收到验证码，您可尝试换用邮箱进行验证</textarea>
        <p style="font-size: 25px">想要支付的金额超过了网银每日支持的上限怎么办？</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">一部分银行支持用户设置每日网上支付上限，可以登录银行网站进行支付限额调整。另一个方法是先每日充值支付宝余额，再使用支付宝余额进行支付。</textarea>
        <p style="font-size: 25px">订单创建后多长时间会被关闭?</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">目前未支付的订单会在订单创建3天后关闭。订单创建之后请尽快进行支付，如果订单超时关闭请您重新下单。</textarea>
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
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
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

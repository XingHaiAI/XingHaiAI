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
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true">API调用规则</el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true">调用返回值</el-menu-item>
              <el-menu-item index="2-3" class="teach"popper-append-to-body="true">代码示例</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" style="text-align: center">
              <span slot="title">常见问题</span>
            </el-menu-item>
            <el-submenu index="4" style="text-align: center">
              <template slot="title">
                <span>API接口</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true">API调用规则</el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true">调用返回值</el-menu-item>
              <el-menu-item index="2-3" class="teach"popper-append-to-body="true">代码示例</el-menu-item>
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
        <input style="width: 70%;height: 20%;margin: 0" />
        <el-button type="primary" icon="el-icon-search" id="find"></el-button>
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&lt<router-link to="" class="linkto">产品文档</router-link>&ltAPI调用规则</p>
      </div>
      <div id="text">
        <p style="font-size: 30px;margin-bottom: 10%">API调用规则</p>
        <p style="font-size: 25px">API调用-----原理</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">FACE++人工真能开放平台API是HTTP API。常用的编程语言都能发起HTTP请求（通过第三方库或自带API），使用者向我们的服务器发起HTTP请求，并加上合适的参数，服务器将会对请求进行处理，得到结果将会返回给使用者</textarea>
        <p style="font-size: 25px">API调用----鉴权</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">账号下每创建一个应用就会生成一组对应的API_KEY和API_SECRET,并用以识别用户是否有权限调用API，所有的API调用必须提供对应的一组API_KEY和API_SELECT参数</textarea>
        <p style="font-size: 25px">API调用----参数</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">调用每个API需要根据需求传不同的参数，每个API参数的详细定义请查看人脸识别。所有API的嗲用都要使用POST请求，用户可以以QUERY STRING的形式将参数写进请求体中，传图片文件参数时需要在请求体中使用MULTIPART/FORM-DATA格式来编码</textarea>
        <p style="font-size: 25px">API调用--提示</p>
        <textarea rows="5"cols="70"disabled style="font-size: 20px">为了避免因网络问题而造成的阻塞，建议将API调用放进异步线程里执行。</textarea>
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
    name:"Teaching",
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
 #apply{
    position: relative;
    left: 25%;
    bottom: 15%;
  }
  #download{
    position: relative;
    left: 47%;
    bottom: 15%;
  }
  .functionButton{
    color: black;
    border-color: black;
  }
  button{
    width: 200px;
    height: 50px;
    text-align: center;
    background: transparent;
    position: relative;
    bottom: 50%;
    right: 23%;
    border-color: white;
    color:white;
    font-size: 25px;
    font-weight: lighter;
  }
  #titlecontent{
    background: transparent;
    color:white;
    position: relative;
    margin-left:2%;
    bottom: 65%;
    overflow:auto;
  }
  #introduce{
    font-size: 30px;
    position: relative;
    margin-bottom:5%;
  }
  #introducecontent{
    position: relative;
    top: 12%;
  }
  #title{
    position: relative;
    bottom: 75%;
    left: 20%;
    font-size: 40px;
    color: white;
    font-weight: lighter;
  }
  textarea{
    border: none;
    resize: none;
    background-color: white;
    color: black;
  }
  #carContent{
    position: relative;
    top: 5px;
    left: 40%;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 40%;
    text-align: center;
    overflow: auto;
  }
  #serviceContent{
    position: relative;
    top: 5px;
    left: 18%;
    overflow:auto;
  }
  #serviceCaption{
    position: relative;
    top: 5px;
    left: 18%;
    text-align: center;
    overflow: auto;
  }
  #txtApp{;
    font-size: 30px;
    text-align: center;
  }
  body {
    margin: 0;
    padding: 0;
    height: 2200px;
  }
  .background {
    width:100%;
    height:100%;
    /*display: inline;*/
    /*position:absolute;*/
    /*z-index:0;*/
  }
  #AIcar{
    height: 250px;
    width: 300px;
    position: relative;
    padding-top: 0%;
    left: 18%;
    overflow: auto;
  }
  #AIcustomer{
    height: 250px;
    width:300px;
    position: relative;
    left: 40%;
    padding-top: 0%;
  }
  #AIhead{
    width: 100%;
    height: calc(25.8/100*2300px);
  }
  #AIbodyfir{
    width: 100%;
    height: calc(6.3/100*2300px);
    margin-top:10vh;
    padding: 0;
    background-size: auto 50%;
    text-align: center;
  }
  #AIbodysec{
    height: calc(22.8/100*2300px);
    margin: 0;
    padding: 0;
  }
  #AIbodythi{
    height: calc(27.6/100*2300px);
    margin-top:10vh;
    padding: 0;
  }
  #AItail{
    height: calc(10.5/100*2300px);
    margin: 0;
    padding: 0;
  }
</style>

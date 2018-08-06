<template>
  <body id="all"style="min-width: 13.6rem">
  <div id="header">
    <img src="../assets/Banner.png">
  </div>
  <div id="body">
    <sidebar></sidebar>
    <div id="main">
      <div id="search"style="margin-top: -0.5rem">
        <!--<div>-->
          <!--<input class="searchInput" style="width: 70%;height:25%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;" />-->
          <!--<el-button type="primary" icon="el-icon-search" id="find"></el-button>-->
        <!--</div>-->
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&gt<router-link to="" class="linkto">产品文档</router-link>&gt如何使用SDK</p>
      </div>
      <div id="text">
        <p style="font-size: 0.3rem;margin-bottom: 10%;margin-top: 0.3rem">如何使用SDK</p>
        <p class="smallTitle">1. 注册账号并创建 API Key</p>
        <textarea rows="5"cols="70"disabled style="font-size: 0.18rem">如果您希望采用联网授权模式，则需要通过调用 SDK Auth API 进行联网授权与计费，因此您需要先在兴海物联 网站上创建账号，并创建一个 API Key。注意：在创建应用时请选择正确的 API Key 类型。如果您希望免费测试 SDK，请使用“免费 API Key”；如您希望进行正式的联网授权，请使用“正式 API Key”。</textarea>
        <p class="smallTitle">2. 下载SDK</p>
        <textarea rows="3"cols="70"disabled style="font-size: 0.18rem">在控制台，展开“SDK\联网授权SDK”这个组，并点击“SDK下载”页。</textarea>
        <p class="smallTitle">3. 集成开发</p>
        <textarea rows="5"cols="70"disabled style="font-size: 0.18rem">下载 SDK 包文件后，您就可以根据包中的文档说明，开始集成开发了。如果您在开发过程中遇到任何问题，欢迎、在官网联系技术支持</textarea>
        <p style="font-size:  0.25rem">如有疑问请<router-link to="/ContactUs" class="linkto"> 联系我们</router-link></p>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  import sidebar from './sidebar.vue'
  export default {
    name:"TechGuideSDK",
    components: {sidebar},
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
      },
      VerifyAcc(){
        if(this.GLOBAL.token===true){
          this.$router.push('/Controller/ControllerSDKDownload')
        }else{
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped>
  #find{
    width: 10%;
    height: 25%;
    position: relative;
    right:0.5%;
  }
  body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
  .linkto{
    color: #4096ff;
    text-decoration: none
  }
  #text{
    text-align: center;
    margin-right:5%;
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
  .smallTitle{
    height: 0.5rem;
    font-size: 0.25rem;
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

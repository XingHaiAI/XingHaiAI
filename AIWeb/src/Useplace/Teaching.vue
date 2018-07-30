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
        <p class="route"><router-link to="" class="linkto">文档中心</router-link>&gt<router-link to="" class="linkto">产品文档</router-link>&gtAPI调用规则</p>
      </div>
      <div id="text">
        <p style="font-size: 0.30rem;margin-bottom: 10%;text-align: center;margin-top: 0.3rem">API调用规则</p>
        <p style="font-size: 0.25rem;text-align: center;">API调用-----原理</p>
        <textarea rows="5"cols="70"disabled style="font-size: 0.18rem">FACE++人工真能开放平台API是HTTP API。常用的编程语言都能发起HTTP请求（通过第三方库或自带API），使用者向我们的服务器发起HTTP请求，并加上合适的参数，服务器将会对请求进行处理，得到结果将会返回给使用者</textarea>
        <p style="font-size: 0.25rem">API调用----鉴权</p>
        <textarea rows="5"cols="70"disabled style="font-size: 0.18rem">账号下每创建一个应用就会生成一组对应的API_KEY和API_SECRET,并用以识别用户是否有权限调用API，所有的API调用必须提供对应的一组API_KEY和API_SELECT参数</textarea>
        <p style="font-size: 0.25rem">API调用----参数</p>
        <textarea rows="5"cols="70"disabled style="font-size: 0.18rem">调用每个API需要根据需求传不同的参数，每个API参数的详细定义请查看人脸识别。所有API的嗲用都要使用POST请求，用户可以以QUERY STRING的形式将参数写进请求体中，传图片文件参数时需要在请求体中使用MULTIPART/FORM-DATA格式来编码</textarea>
        <p style="font-size: 0.25rem">API调用--提示</p>
        <textarea rows="5"cols="70"disabled style="font-size: 0.18rem">为了避免因网络问题而造成的阻塞，建议将API调用放进异步线程里执行。</textarea>
        <p style="font-size: 0.25rem">如有疑问请<router-link to="/ContactUs" class="linkto"> 联系我们</router-link></p>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  import sidebar from './sidebar.vue'
  export default {
    name:"Teaching",
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

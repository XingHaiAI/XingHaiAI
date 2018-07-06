<template>
  <body id="all">
  <div id="header">
    <img src="../assets/控制台/banner.png">
  </div>
  <div id="body">
    <Side id="aside"></Side>
    <div id="main">
      <div id="search">
        <p class="route">控制台&nbsp&nbsp&gt&nbsp&nbsp功能&nbsp&nbsp&gt<router-link to="" class="linkto">&nbsp&nbsp自然语音处理</router-link></p>
      </div>
      <div class="card4this" style="width: 100%;">
        <div style="margin-right:0;margin-left:1.5rem;width: 70%">
        <el-row >
          <el-col :span="14"><div class="grid-content bg-purple">
            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">词义相似度</p>
            <div class="card4footer">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">输入两个词，得到两个词的相似度结果</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple">

            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">短文本相似度</p>
            <div class="card4footer2">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">提供不同短文本之间相似度的计算，输出一个介于0到1之间的实数值，越大则相似度越高</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
        </el-row>
         <el-row >
          <el-col :span="14"><div class="grid-content bg-purple">
            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">评论观点抽取</p>
            <div class="card4footer3">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">提取一条评论句子的关注点和评论观点，并输出评论观点标签及评论观点积极性</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple">

            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">情感倾向分析</p>
            <div class="card4footer4">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">对包含主观观点信息的文本进行情感类别（积极、消极、中性）判断，并给出相应的置信度</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
        </el-row>
        <el-row >
          <el-col :span="14"><div class="grid-content bg-purple">
            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">AI客服</p>
            <div class="card4footer5">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">基于用户输入的文本内容，返回场景BOT理解与应答的信息</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
        </el-row>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import Side from "./side.vue"
  export default {
    name:"ConsoleNPL",
    components: {
    Side
    }
  }
</script>

<style scoped>

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
  .tac{
    height: 100%;
    width: 100%;
  }
  .leftTitle{
    font-size:0.25rem;
  }
  .teach{
    width: 100%;
    font-size: 0.2rem;
    font-weight:lighter;
  }
  #main{
    float: left;
    height:100%;
    width: 74%;
    margin: 0;
    font-size: 0.21rem;
  }
    #search{
    font-size:0.25rem;
    height: 5%;
    padding-top:3%;
    padding-left: 5%;
    padding-bottom: 0;
  }
  #aside{
    float: left;
    height: 100%;
    width: 26%;
    margin: 0;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
  }
  #body{
    height:79.15%;
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
    height:20.85%;
    width: 100%;
    background-color: black;
    margin: 0;
    padding: 0;
  }
  #all{
    height: 25rem;
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
}
  .card4footer{
    background-image: url("../assets/控制台/自然语言处理/词义相似度.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }

  .card4footer2{
    background-image: url("../assets/控制台/自然语言处理/短文本相似度.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }

    .card4footer3{
    background-image: url("../assets/控制台/自然语言处理/评论观点抽取.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }
    .card4footer4{
    background-image: url("../assets/控制台/自然语言处理/情感倾向分析.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }
    .card4footer5{
    background-image: url("../assets/控制台/自然语言处理/AI客服.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }

  .title4card{
    margin-top: 0.3rem;
    font-size:0.2rem;
    font-weight:600;
    margin-bottom:0.2rem;
    text-align: center;
  }

  .content4card{
    text-align:center;
    margin-top: 21px;
    font-size: 0.15rem;
    font-weight:600;
  }
  #txtApp1{;
    font-size: 0.2rem;
    margin-left:3.6rem;
  }
    .button4card{
    margin-left:65px;
    margin-top:20px;
    height: 50px;
    width: 200px;
    font-size: 20px;
    color: white;border-width: 1.5px;
    border-color: #0066FF;
    background-color: #0066FF;
    font-weight: 500;
    transition: all 0.3s;
  }
</style>

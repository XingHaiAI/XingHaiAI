<template>
  <body id="all">
  <div id="header">
    <img src="../assets/控制台/banner.png">
  </div>
  <div id="body">
    <Side id="aside"></Side>
    <div id="main">
      <div id="search">
        <p class="route">控制台&nbsp&nbsp&gt&nbsp&nbsp功能&nbsp&nbsp&gt<router-link to="" class="linkto">&nbsp&nbsp图像识别</router-link></p>
      </div>
      <div class="card4this" style="width: 100%;">
        <div style="margin-right:0;margin-left:1.5rem;width: 70%">
        <el-row >
          <el-col :span="14"><div class="grid-content bg-purple">
            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">通用图形分析</p>
            <div class="card4footer">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">该场景用于通用物体及场景识别，即对于输入的一张图片输出图片中的多个物体及场景标签</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple">

            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">去模糊化</p>
            <div class="card4footer2">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">将当前图片清晰度提高</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="14"><div class="grid-content bg-purple">
            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">人重识别</p>
            <div class="card4footer3">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">识别图片中的人，并在视频中跟踪</p>
              </div>
              <div>
                <el-button class="button4card">SDK下载</el-button>
              </div>
            </div>
          </el-card></div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple">
            <el-card style="width: 350px;height: 480px;margin-top:1rem;" :body-style="{padding:'0px'}">
            <p class="title4card">车型识别</p>
            <div class="card4footer4">
            </div>
            <div>
              <div class="content4card">
              <p style="font-size: 15px;font-weight: 600">用于检测一辆车图片的车辆品牌及型号、颜色及年份、位置信息</p>
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
    name:"ConsolePicRec",
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
    background-image: url("../assets/控制台/图像识别/通用图形分析.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }

  .card4footer2{
    background-image: url("../assets/控制台/图像识别/去模糊化.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }

    .card4footer3{
    background-image: url("../assets/控制台/图像识别/人重识别.png");
    padding: 75.15% 0 0;
    background-size: cover;
  }
    .card4footer4{
    background-image: url("../assets/控制台/图像识别/车型识别.png");
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

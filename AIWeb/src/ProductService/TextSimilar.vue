<!--这里是-->
<!--车牌识别的分页面-->

<template>
  <body>
  <div id="AIhead" class="firstBackground">
      <div style="height: 150px;"></div>
      <div class="table4this" style="margin-left: 20%">
        <tr style="font-size: 60px;letter-spacing: 6px;">短文本相似度</tr>
        <div style="height: 20px;"></div>
        <tr style="font-size: 22px">提供不同文本之间相似度的计算，输出一个</tr>
        <tr style="font-size: 22px">介于0与1之间的实数值，越大则相似度越高。</tr>
        <div style="height: 20px;"></div>
        <tr><el-button class="button4doc">技术文档</el-button></tr>
      </div>
    </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">依托全网海量优质数据和深度神经网络技术，为您提供高精度的短文本相似度服务，帮助快速实现推荐，检索，排序等应用</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/短文本相似度/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
          <div class="card4this" style="width: 100%;">
        <div style="margin-right: auto;margin-left: auto ;margin-top:50px;">
        <el-row :gutter="180" >
          <el-col :span="6"><div class="grid-content bg-purple"><el-card style="opacity: 0"></el-card></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><el-card style="width: 336px;height: 400px;margin-left:-105px;" :body-style="{padding:'0px'}">
            <div class="card4footer">
            </div>
            <div>
              <div class="title4card">
              <span>搜索引擎</span>
              </div>
              <div class="content4card">
              <p style="font-size: 16px;font-weight: 330">准确的分词结果提高搜索准确率，同时可以替换同义词提高搜索结果的多样性</p>
              </div>
            </div>
          </el-card> </div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple"><el-card style="width: 336px;height: 400px" :body-style="{padding:'0px'}">
            <div class="card4footer2">
            </div>
            <div class="title4card">
              <span>生活服务</span>
            </div>
            <div class="content4card">
              <p style="font-size: 16px;font-weight: 330">通过将同义词定义成一个标签，调用相应的服务功能，改善用户体验</p>
            </div>
          </el-card></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><el-card style="opacity: 0"></el-card></div></el-col>
        </el-row>
        </div>
      </div>
    </div>

  </div>
</el-card>
</div>
</el-col>
</el-row>
</div>
</div>
  <!--  <img src="../assets/短文本相似度/搜索引擎.png" id="AIcar">
    <img src="../assets/短文本相似度/生活服务.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="30" id="serviceCaption" disabled>搜索引擎</textarea>
    <textarea rows="1" cols="30" id="carCaption"disabled>生活服务</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>准确的分词结果提高搜索准确率，同时可以替换同义词提高搜索结果的多样性</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>通过将同义词定义成一个标签，调用相应的服务功能，改善用户体验</textarea>  -->
  </div>
  </body>
</template>

<script>
  export default {
    name: "TextSimilar"
  }
</script>

<style scoped>
body{
  font-size: 62.5%;
}
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
.firstBackground{
    background-position: right bottom,left top;
    width: 100%;
    height: 50%;
    background-image: url("../assets/AI智能/AI客服.jpg");
    background-size: 100% 130%;
  }
  .functionButton{
    color: black;
    border-color: black;
    font-size:0.2rem;
  }

    .button4doc{
    margin-left:50px;
    height: 50px;
    width: 150px;
    font-size: 22px;
    color: #262626;border-width: 1.5px;
    border-color: #262626;
    background-color: rgba(0,0,0,0);
    font-weight: 500;
    transition: all 0.3s;
  }

  .button4doc:hover{
    color: white;
    background-color: #262626;
  }

  .card4footer{
    background-image: url("../assets/短文本相似度/搜索引擎.png");
    width: 100%;
    height: 50%;
    padding: 0;
  }

  .card4footer2{
    background-image: url("../assets/短文本相似度/生活服务.png");
    width: 100%;
    height: 50%;
    padding: 0;
  }

  .title4card{
    margin-top: 14px;
    font-size:30px;
    text-align: center;
  }

  .content4card{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 21px;
    color: grey;
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
    font-size: 0.25rem;
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
    font-size: 0.4rem;
    position: relative;
    margin-bottom:5%;
  }
  #introducecontent{
    position: relative;
    font-size:0.15rem;
    top: 12%;
  }
  #title{
    position: relative;
    bottom: 75%;
    left: 20%;
    font-size: 0.4rem;
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
    left: 37.5%;
    width:24%;
    font-size:0.15rem;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 38%;
    margin-bottom:1vh;
    margin-top:0.5vh;
    text-align: center;
    font-size:0.2rem;
    overflow: auto;
  }
  #serviceContent{
    position: relative;
    font-size:0.15rem;
    top: 5px;
    left: 17.3%;
    width:24%;
    overflow:auto;
  }
  #serviceCaption{
    position: relative;
    top: 5px;
    left: 17%;
    margin-bottom:1vh;
    margin-top:0.5vh;
    text-align: center;
    overflow: auto;
    font-size:0.2rem;
  }
  #txtApp{;
    font-size: 0.4rem;
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
    font-size: 62.5%;
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

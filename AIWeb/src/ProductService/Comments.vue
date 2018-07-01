<!--这里是-->
<!--评论观点抽取分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/评论抽取/评论观点抽取.png" class="background">
    <!--<a id="title">评论观点抽取</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>评论观点抽取接口用来提取一条评论句子的关注点和评论观点，并输出评论观点标签及评论观点极性</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">自动抽取和分析评论观点，帮助您实现舆情分析，用户理解，支持产品优化和营销决策</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/评论抽取/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/评论抽取/评论与决策分类.png" id="AIcar">
    <img src="../assets/评论抽取/舆情监控.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>评论与决策分类</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>舆情监控</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>通过对产品多维度评论观点进行倾向型分析，给用户提供该产品全方位的评价，方便用户进行决策</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>通过对需要舆情监控的实时文字数据流进行情感倾向性分析，把握用户对热点信息的情感倾向性变化</textarea>
  </div>
  <div id="AItail">
    <img src="../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

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
    top: 8%;
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
    left: 38%;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 38%;
    text-align: center;
    overflow: auto;
  }
  #serviceContent{
    position: relative;
    top: 5px;
    left: 17.3%;
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
    height: 2300px;
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

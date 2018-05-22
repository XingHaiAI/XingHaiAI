<!--这里是-->
<!--车牌识别的分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../../assets/短文本相似度/短文本相似度滑页.png" class="background">
    <a id="title">短文本相似度</a>
    <textarea id="titlecontent" rows="3"cols="40" disabled>短文本相似度计算服务能够提供不同短文本之间相似度的计算，输出的相似度是一个介于0到1之间的实数值，越大则相似度越高。</textarea>
    <button>技术文档</button>
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">依托全网海量优质数据和深度神经网络技术，为您提供高精度的短文本相似度服务，帮助快速实现推荐，检索，排序等应用</a>
  </div>
  <div id="AIbodysec">
    <img src="../../assets/短文本相似度/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../../assets/短文本相似度/搜索引擎.png" id="AIcar">
    <img src="../../assets/短文本相似度/生活服务.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="30" id="serviceCaption" disabled>搜索引擎</textarea>
    <textarea rows="1" cols="30" id="carCaption"disabled>生活服务</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>准确的分词结果提高搜索准确率，同时可以替换同义词提高搜索结果的多样性</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>通过将同义词定义成一个标签，调用相应的服务功能，改善用户体验</textarea>
  </div>
  <div id="AItail">
    <img src="../../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

<script>
  export default {
    name: "TextSimilar"
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
    left: 37%;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 45%;
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
    left: 20%;
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
    height: calc(13.3/100*2300px);
    margin: 0;
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
    margin: 0;
    padding: 0;
  }
  #AItail{
    height: calc(10.5/100*2300px);
    margin: 0;
    padding: 0;
  }
</style>

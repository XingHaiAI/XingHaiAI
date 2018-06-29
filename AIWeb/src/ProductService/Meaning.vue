<!--这里是-->
<!--词义相似度的分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/词义相似度/词义相似度.png" class="background">
    <!--<a id="title">词义相似度</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>输入两个词，得到两个词的相似度结果</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">依托全网海量优质数据和深度神经网络技术，通过词语向量化来计算两个词之间的相似度</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/词义相似度/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/词义相似度/搜索引擎.png" id="AIcar">
    <img src="../assets/词义相似度/智能推荐.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>搜索引擎</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>智能推荐</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>准确的分词结果提高搜索准确率，同时可以替换同义词提高搜索结果的多样性</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>对用户输入的文本信息进行自动分类，实现内容的分类别智能管理</textarea>
  </div>
  <div id="AItail">
    <img src="../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

<script>
  export default {
    name: "Meaning"
  }
</script>

<style scoped>
  #apply{
    position: relative;
    left: 29%;
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
    right: 13%;
    border-color: white;
    color:white;
    font-size: 25px;
    font-weight: lighter;
  }
  #titlecontent{
    background: transparent;
    color:white;
    position: relative;
    left: 10%;
    bottom: 65%;
    overflow:auto;
  }
  #introduce{
    font-size: 30px;
    position: relative;
    top: 30px;
  }
  #introducecontent{
    position:relative;
    top: 15%;
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
    left: 39%;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 39%;
    text-align: center;
    overflow: auto;
  }
  #serviceContent{
    position: relative;
    top: 5px;
    left: 23%;
    overflow:auto;
  }
  #serviceCaption{
    position: relative;
    top: 5px;
    left: 23%;
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
    left: 24%;
    overflow: auto;
  }
  #AIcustomer{
    height: 250px;
    width:300px;
    position: relative;
    left: 41.5%;
    padding-top: 0%;
  }
  #AIhead{
    width: 1817px;
    height: calc(25.8/100*2300px);
  }
  #AIbodyfir{
    width: 1817px;
    height: calc(13.3/100*2300px);
    margin: 0;
    padding: 0;
    background-size: auto 50%;
    text-align: center;
  }
  #AIbodysec{
    width: 1817px;
    height: calc(22.8/100*2300px);
    margin: 0;
    padding: 0;
  }
  #AIbodythi{
    width: 1817px;
    height: calc(27.6/100*2300px);
    margin: 0;
    padding: 0;
  }
  #AItail{
    width:1817px;
    height: calc(10.5/100*2300px);
    margin: 0;
    padding: 0;
  }
</style>

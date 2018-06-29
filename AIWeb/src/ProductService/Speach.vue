<!--这里是-->
<!--语音合成的分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/语音合成/语音合成.png" class="background">
    <!--<a id="title">语音合成</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>语音合成服务，基于HTTP请求的REST API接口，将文本转换为可以播放的MP3文件。</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">基于业界领先的深度学习技术，提供流畅自然的语音合成服务，让您的应用开口说话</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/语音合成/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/语音合成/文字阅读.png" id="AIcar">
    <img src="../assets/语音合成/智能交通.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>文字阅读</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>智能交通</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>将文字转变为语音，让您闭上眼睛也能徜徉书海</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>地图语音导航，不用盯着GPS显示屏也能够清晰地了解路况</textarea>
  </div>
  <div id="AItail">
    <img src="../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

<script>
  export default {
    name: "Speach"
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

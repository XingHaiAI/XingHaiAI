<!--这里是-->
<!--手写识别分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/手写识别/手写识别.png" class="background">
    <!--<a id="title">手写识别</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>识别手写中文汉字</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">提供多种场景下精准的手写文字识别技术服务，让您的应用可以手写识字，提升输入效率，优化用户体验</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/手写识别/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/手写识别/手写输入法.png" id="AIcar">
    <img src="../assets/手写识别/拍照识别.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>手写输入法</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>拍照识别</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>可以准确地实现输入法的手写功能，提高用户的使用体验</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>在书摘，笔记，搜索，翻译等移动应用中，实现拍照自动识别文字，涂抹识别指定区域的文字，方便用户进行文本录入，提高产品易用性和用户体验</textarea>
  </div>
  <div id="AItail">
    <img src="../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

<script>
  export default {
    name: "HandWritten"
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
  .functionButton{
    color: black;
    border-color: black;
    font-size:2em;
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
    font-size: 4em;
    position: relative;
    margin-bottom:5%;
  }
  #introducecontent{
    position: relative;
    font-size:1.5em;
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
    left: 37.5%;
    width:24%;
    font-size:1.5em;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 27%;
    margin-bottom:1vh;
    margin-top:0.5vh;
    text-align: center;
    font-size:2em;
    overflow: auto;
  }
  #serviceContent{
    position: relative;
    font-size:1.5em;
    top: 5px;
    left: 17.3%;
    width:24%;
    overflow:auto;
  }
  #serviceCaption{
    position: relative;
    top: 5px;
    left: 14%;
    margin-bottom:1vh;
    margin-top:0.5vh;
    text-align: center;
    overflow: auto;
    font-size:2em;
  }
  #txtApp{;
    font-size: 4em;
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

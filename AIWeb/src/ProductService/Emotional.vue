<!--这里是-->
<!--情感倾向分析分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/情感倾向分析/情感倾向分析.png" class="background">
    <!--<a id="title">情感倾向分析</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>对包含主观观点信息的文本进行情感极性类别（积极，消极，中性）的判断，并给出相应的置信度。</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">自动对包含主观信息的文本进行情感倾向性判断，为口碑分析，话题监控，舆情分析等应用提供基础技术支持</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/情感倾向分析/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/情感倾向分析/口碑分析.png" id="AIcar">
    <img src="../assets/情感倾向分析/舆情监控.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>口碑分析</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>舆情监控</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>整理提炼互联网中的海量口碑评价，多维分析，快速解读</textarea>
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


<!--这里是-->
<!--车牌识别的分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/车牌识别/车牌识别.png" class="background">
    <!--<a id="title">车牌识别</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>对小客车的车牌进行识别</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">支持对中国大陆机动车车牌的识别，包括地域编号和车牌号</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/车牌识别/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/车牌识别/停车场闸机识别.png" id="AIcar">
    <img src="../assets/车牌识别/道路违章识别.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>停车闸机识别</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>道路违章识别</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>在停车场的闸机上使用车牌识别，自动识别车牌号码，实现无卡，无人的停车场管理，快捷方便</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>在交通道路的摄像头中加入车牌识别结合违章判断，对违章的车辆号码进行自动识别，实现自动化的违章审计</textarea>
  </div>
  <div id="AItail">
    <img src="../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

<script>
  export default {
    name: "License"
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
    left: 40%;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 5px;
    left: 40%;
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

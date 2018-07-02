<!--这里是-->
<!--银行卡识别的分页面-->

<template>
  <body>
  <div id="AIhead">
    <img src="../assets/银行卡识别/银行卡识别.png" class="background">
    <!--<a id="title">银行卡识别</a>-->
    <!--<textarea id="titlecontent" rows="2"cols="40" disabled>识别银行卡的卡号并返回发卡行和卡片性质中心</textarea>-->
    <!--<button>技术文档</button>-->
  </div>
  <div id="AIbodyfir">
    <a id="introduce">功能介绍</a><br/>
    <a id="introducecontent">识别银行卡卡号，发卡行以及卡牌类别，卡片性质等信息</a>
  </div>
  <div id="AIbodysec">
    <img src="../assets/银行卡识别/功能介绍.png"class="background">
    <button class="functionButton" id="apply">接口申请</button>
    <button class="functionButton" id="download">SDK下载</button>
  </div>
  <div id="AIbodythi">
    <p id="txtApp">应用场景</p>
    <img src="../assets/银行卡识别/金融远程身份认证.png" id="AIcar">
    <img src="../assets/银行卡识别/电商支付绑卡.png" id="AIcustomer"><br/>
    <textarea rows="1" cols="40" id="serviceCaption" disabled>金融远程身份认证</textarea>
    <textarea rows="1" cols="40" id="carCaption"disabled>电商支付绑卡</textarea><br/>
    <textarea rows="5" cols="40" id="serviceContent" disabled>使用身份证OCR，银行卡OCR实现用户信息的自动识别和录入，应用于金融场景用户远程的身份认证，识别速度快，准确率高，减少用户输入成本，有效提高用户的体验</textarea>
    <textarea rows="5" cols="40" id="carContent" disabled>在支付绑卡缓解，使用银行卡OCR实现银行卡的拍照自动识别，提升数据录入的准确性和效率，提高用户体验</textarea>
  </div>
  <div id="AItail">
    <img src="../assets/联系我们.png" class="background">
  </div>
  </body>
</template>

<script>
  export default {
    name: "GeneralWord"
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


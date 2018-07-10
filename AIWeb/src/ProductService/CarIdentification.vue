<!--这里是-->
<!--银行卡识别的分页面-->

<template>
  <div>
    <div id="AIhead" class="firstBackground">
      <!--<img src="../assets/银行卡识别/银行卡识别.png" class="background">-->
      <!--<a id="title">银行卡识别</a>-->
      <!--<textarea id="titlecontent" rows="2"cols="40" disabled>识别银行卡的卡号并返回发卡行和卡片性质中心</textarea>-->
      <!--<button>技术文档</button>-->
      <div style="height: 1.50rem;"></div>
      <div class="table4this" style="margin-left: 20%">
        <tr style="font-size: 0.60rem;color: white;letter-spacing: 0.06rem;">银行卡识别</tr>
        <div style="height: 0.20rem;color: white"></div>
        <tr style="font-size: 0.22rem;color: white;font-weight: 300">识别银行卡的卡号并返回发卡行和卡片性质中心</tr>
        <div style="height: 0.20rem;"></div>
        <tr><el-button class="button4doc" :round="false">技术文档</el-button></tr>
      </div>
    </div>
    <div id="AIbodyfir">
      <a id="introduce">功能介绍</a><br/>
      <a id="introducecontent">识别银行卡卡号，发卡行以及卡牌类别，卡片性质等信息</a>
    </div>
    <div id="AIbodysec"class="secondBackground">
      <!--<img src="../assets/银行卡识别/功能介绍.png"class="background">-->
      <button class="functionButton" id="apply">接口申请</button>
      <button class="functionButton" id="download">SDK下载</button>
    </div>
    <div id="AIbodythi">
      <p id="txtApp">应用场景</p>
      <div style="height: 0.50rem;"></div>
      <div class="card4this" style="width: 100%;">
        <div style="margin-right: auto;margin-left: 2.45rem;width: 60%">
          <el-row :gutter="550" style="width: 13rem">
            <el-col :span="6"><div class="grid-content bg-purple">
              <el-card style="width: 3.36rem;height: 4rem;margin-right: 2rem" :body-style="{padding:'0rem'}">
                <div class="card4footer">
                </div>
                <div>
                  <div class="title4card">
                    <span>金融远程身份验证</span>
                  </div>
                  <div class="content4card">
                    <p style="font-size: 0.16rem;font-weight: 330">使用身份证OCR，银行卡OCR实现用户信息的自动识别和录入，应用于金融场景用户远程的身份认证，识别速度快，准确率高，减少用户输入成本，有效提高用户的体验</p>
                  </div>
                </div>
              </el-card> </div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple">
              <el-card style="width: 3.36rem;height: 4.00rem" :body-style="{padding:'0rem'}">
                <div class="card4footer2">
                </div>
                <div class="title4card">
                  <span>电商支付绑卡</span>
                </div>
                <div class="content4card">
                  <p style="font-size: 0.16rem;font-weight: 330">在支付绑卡缓解，使用银行卡OCR实现银行卡的拍照自动识别，提升数据录入的准确性和效率，提高用户体验</p>
                </div>
              </el-card></div></el-col>

          </el-row>
        </div>
      </div>
      <!--
      <img src="../assets/银行卡识别/金融远程身份认证.png" id="AIcar">
      <img src="../assets/银行卡识别/电商支付绑卡.png" id="AIcustomer"><br/>
      <textarea rows="1" cols="40" id="serviceCaption" disabled>金融远程身份认证</textarea>
      <textarea rows="1" cols="40" id="carCaption"disabled>电商支付绑卡</textarea><br/>
      <textarea rows="5" cols="40" id="serviceContent" disabled>使用身份证OCR，银行卡OCR实现用户信息的自动识别和录入，应用于金融场景用户远程的身份认证，识别速度快，准确率高，减少用户输入成本，有效提高用户的体验</textarea>
      <textarea rows="5" cols="40" id="carContent" disabled>在支付绑卡缓解，使用银行卡OCR实现银行卡的拍照自动识别，提升数据录入的准确性和效率，提高用户体验</textarea>
      -->
    </div>
  </div>
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
  .firstBackground{
    background-position: right bottom,left top;
    width: 100%;
    height: 50%;
    background-image: url("../assets/banner/银行卡识别.jpg");
    background-size: 100% 100%;
  }
  .secondBackground{
    background-position: right bottom,left top;
    width: 100%;
    height: 50%;
    background-image: url("../assets/银行卡识别/功能介绍.png");
    background-size: 100% 100%;
  }
  .functionButton{
    color: black;
    border-color: black;
    font-size:0.21rem;
    margin-top: 5.2rem;
  }

  .button4doc{
    margin-left:0.50rem;
    height: 0.50rem;
    width: 1.50rem;
    font-size: 0.22rem;
    color: white;border-width: 0.015rem;
    border-color: white;
    background-color: rgba(0,0,0,0);
    font-weight: 500;
    transition: all 0.3s;
  }

  .button4doc:hover{
    color: white;
    background-color: #262626;
  }


  .card4footer{
    background-image: url("../assets/银行卡识别/金融远程身份认证.png");
    width: 100%;
    height: 50%;
    background-size: 100% 100%;
    padding: 0;
  }

  .card4footer2{
    background-image: url("../assets/银行卡识别/电商支付绑卡.png");
    width: 100%;
    height: 50%;
    background-size: 100% 100%;
    padding: 0;
  }

  .title4card{
    margin-top: 0.14rem;
    font-size:0.21rem;
    text-align: center;
  }

  .content4card{
    width: 3rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.21rem;
    color: grey;
  }
  button{
    width: 2rem;
    height: 0.50rem;
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
    top: 0.05rem;
    left: 37.5%;
    width:24%;
    font-size:0.15rem;
    overflow:auto;
  }
  #carCaption{
    position: relative;
    top: 0.05rem;
    left: 28%;
    margin-bottom:0.1rem;
    margin-top:0.05rem;
    text-align: center;
    font-size:0.2rem;
    overflow: auto;
  }
  #serviceContent{
    position: relative;
    font-size:0.15rem;
    top: 0.05rem;
    left: 17.3%;
    width:24%;
    overflow:auto;
  }
  #serviceCaption{
    position: relative;
    top: 0.05rem;
    left: 14%;
    margin-bottom:0.1rem;
    margin-top:0.05rem;
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
    height: 22rem;
  }
  .background {
    width:100%;
    height:100%;
    /*display: inline;*/
    /*position:absolute;*/
    /*z-index:0;*/
  }
  #AIcar{
    height: 2.50rem;
    width: 3rem;
    position: relative;
    padding-top: 0%;
    left: 18%;
    overflow: auto;
  }
  #AIcustomer{
    height: 2.5rem;
    width:3rem;
    position: relative;
    left: 40%;
    padding-top: 0%;
  }
  #AIhead{
    width: 100%;
    height: calc(25.8/100*23rem);

  }
  #AIbodyfir{
    width: 100%;
    height: calc(6.3/100*20rem);
    margin-top:0.5rem;
    padding: 0;
    background-size: auto 50%;
    text-align: center;
  }
  #AIbodysec{
    height: calc(22.8/100*23rem);
    margin: 0;
    padding: 0;
  }
  #AIbodythi{
    height: calc(27.6/100*23rem);
    margin-top:0.5rem;
    padding: 0;
  }
  #AItail{
    height: calc(10.5/100*23rem);
    margin: 0;
    padding: 0;
  }
</style>


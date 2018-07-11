<!--这里是-->
<!--人脸对比的分页面-->

<template>
  <div>
    <div id="AIhead" class="firstBackground">
      <div style="height: 2.1rem;"></div>
      <div class="table4this" style="margin-left: 55%">
        <tr style="font-size: 0.60rem;color: white;letter-spacing: 0.06rem;">人脸对比</tr>
        <div style="height: 0.20rem;color: white"></div>
        <tr style="font-size: 0.22rem;color: white;font-weight: 300">比对两张图片中人脸的相似度，<br/>并返回相似度分值</tr>
        <div style="height: 0.20rem;"></div>
        <tr><el-button class="button4doc" :round="false">技术文档</el-button></tr>
      </div>
    </div>
    <div id="AIbodyfir">
      <a id="introduce">功能介绍</a><br/>
      <a id="introducecontent">分析两张人脸属于同一个人的可能性大小。使用兴海物联的人脸比对技术，<br/>
      您会得到一个置信度分数和相应的阈值，以便评估相似度</a>
    </div>
    <div id="AIbodysec"class="secondBackground">
      <button class="functionButton" id="apply">接口申请</button>
      <button class="functionButton" id="download">SDK下载</button>
    </div>
    <div id="AIbodythi">
      <p id="txtApp">应用场景</p>

      <div class="card4this" style="width: 100%;">
        <div style="margin-right: auto;margin-left: 2.45rem;margin-top:0.50rem;width: 60%">
          <el-row :gutter="550" style="width: 13rem">
            <el-col :span="6"><div class="grid-content bg-purple">
              <el-card style="width: 3.36rem;height: 4rem;margin-right: 2rem" :body-style="{padding:'0rem'}">
                <div class="card4footer">
                </div>
                <div>
                  <div class="title4card">
                    <span>人脸闸机</span>
                  </div>
                  <div class="content4card">
                    <p style="font-size: 0.16rem;font-weight: 330">帮助您的应用自动将人脸照片与数据库中的照片进行比对，这有助于在小区、安保场景中提高效率与准确性。</p>
                  </div>
                </div>
              </el-card> </div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple">
              <el-card style="width: 3.36rem;height: 4.00rem" :body-style="{padding:'0rem'}">
                <div class="card4footer2">
                </div>
                <div class="title4card">
                  <span>认证合一</span>
                </div>
                <div class="content4card">
                  <p style="font-size: 0.16rem;font-weight: 330">帮助您的应用自动将人脸照片与证件照片进行比对，例如护照、驾照或身份证照片。这有助于在安保场景中提高效率与准确性。</p>
                </div>
              </el-card></div></el-col>

          </el-row>
        </div>
      </div>
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
    background-image: url("../assets/banner/人脸对比.jpg");
    background-size: 100% 100%;
  }
  .secondBackground{
    background-position: right bottom,left top;
    width: 100%;
    height: 50%;
    background-image: url("../assets/人脸对比/功能介绍.png");
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
    background-image: url("../assets/人脸对比/人脸闸机.png");
    width: 100%;
    height: 50%;
    background-size: 100% 130%;
    background-position: bottom;
    padding: 0;
  }

  .card4footer2{
    background-image: url("../assets/人脸对比/人证合一.png");
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


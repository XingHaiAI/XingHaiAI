<template>
  <html>
<body>
<div class="bg">
    <div class="head_content">
        <div class="title">联系我们</div>
        <div class="content">如果看完了指南和API文档后还是无法解决您的问题，请点击下方"售前咨询"。填写问题，我们会回答您的问题。<p></p>如果您需要商务上的合作以及咨询，请点击下方"售前咨询"，填写以下表单，我们会立即与您联系</div>
    </div>
    <div class="link_group">
        <div class="title">
            <div class="decorate_bar"></div>
            <div class="word">常见问题</div>
        </div>
        <div class="link_content">
            <div class="title">售前咨询</div>
            <div class="content">
                <div class="word">如何接入API？</div><br/>
                <div class="word">API如何收费？</div><br/>
                <div class="word">返回值b报错怎么办？</div>
            </div>
            <div class="title">商务咨询</div>
            <div class="content">
                <div class="word">有什么合作方案？</div>
            </div>
        </div>
    </div>
    <div class="from_group">
        <div class="decorate_bar"></div>
        <div class="item_group">
            <div class="before_buy">
                <div class="icon_1"></div>
                <div class="word">售前咨询</div>
            </div>
            <div class="business">
                <div class="icon_2"></div>
                <div class="word">商务咨询</div>
            </div>
            <div class="question">
                <div class="icon_3"></div>
                <div class="word">问题反馈</div>
            </div>
        </div>
        <div class="input_group">
            <div class="input_item_left">
                <input class="input" type="text" placeholder="姓名"/>
                <input class="input" type="text" placeholder="联系电话"/>
                <input class="input" type="text" placeholder="电子邮箱"/>
                <input class="input" type="text" placeholder="所属公司机构"/>
            </div>
            <textarea class="input_textarea" placeholder="请描述您的问题。"></textarea>
        </div>
        <div class="check_box">
            <input class="box" type="checkbox"/>
            <div class="word">我已阅读并同意兴海物联隐私政策</div>
        </div>
        <div class="submit">提交</div>
    </div>
</div>
</body>
<div id="ContactUs">
  <img src="../assets/联系我们.png" class="background">
</div>
  </html>
</template>
<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
#ContactUs{
   background-color: blue;
   background-image: url("../assets/联系我们/bg.jpg");
   background-size: 100% 100%;
   width: 100vw;
   height: 35vh;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
 }
 .background {
    width:100%;
    height:100%;
}
div{
  margin: 0;
  padding: 0;
  vertical-align: top;
}
.word_head{
  margin-top: 3vh;
  margin-left: -6.5vw;
  text-align: center;
  color: white;
  font-size: 1.5vw;
}
.line{
  align-self: center;
  margin-top: 2vh;
}
.step_line{
  margin-top: 1.5vh;
}
.icon_1{
  background-image: url("../assets/联系我们/icon1.png");
  background-size: 100% 100%;
  display: inline-block;
  width: 2.5vh;
  height: 2.5vh;
}
.icon_2{
  background-image: url("../assets/联系我们/icon2.png");
  background-size: 100% 100%;
  display: inline-block;
  width: 2.5vh;
  height: 2.5vh;
}
.icon_3{
  background-image: url("../assets/联系我们/icon3.png");
  background-size: 100% 100%;
  display: inline-block;
  width: 2.5vh;
  height: 2.5vh;
}
.word{
  display: inline-block;
  text-align: center;
  color: black;
  line-height: 3vh;
  font-size: 1.3vw;
}
.coloum_1{
  display: inline-block;
}
.coloum_2{
  margin-left: 3vw;
  margin-bottom:5vh;
  background-image: url("../assets/联系我们/pic1.jpg");
  background-size: 100% 100%;
  display: inline-block;
  width: 10vh;
  height: 10vh;
}
body{
  margin: 0;
  padding: 0;
}
div{
  margin: 0;
  padding: 0;
  vertical-align: 80%;
}
.bg{
  height: 215vh;
  width: 100vw;
  background-image: url("../assets/pic/bg.png");
  background-size: 100% 100%;
  background-position: center;
}
.head_content{
  width: 100%;
  padding-top:10vh;
  border: 2px solid black;
  height: 50.5vh;
}
.head_content .title{
  font-size: 3vw;
  color: white;
  margin-top: 7vh;
  margin-left: 12vw;
}
.head_content .content{
  font-size: 1.2vw;
  color: white;
  margin-left: 12vw;
  width: 40vw;
  margin-top: 5vh;
}
.link_group{
  float: left;
  width: 20vw;
  height: 100vh;
  background-color: #f6faff;
}
.from_group{
  display: flex;
  flex-direction: column;
  float: left;
  width: 80vw;
  height: 100vh;
}
.link_group .decorate_bar{
  margin-top: 10vh;
  height: 3.5vh;
  display: inline-block;
  width: 0.5vw;
  background-color: blue;
}
.link_group .title .word{
  line-height: 3.5vh;
  display: inline-block;
  font-size: 1.5vw;
  font-weight: 300;
  margin-top: 10vh;
}
.link_group .title{
  text-align: center;
}
.link_content{
  text-align: left;
}
.link_content .title{
  margin-left: -3vw;
  font-size: 1.2vw;
  margin-top: 3vh;
  margin-bottom: 2vh;
  font-weight: 300;
}
.link_content .content{
  margin-left: 7.1vw;
}
.link_content .word{
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: -1vw;
  font-size: 1vw;
  font-weight: 300;
}
.from_group .decorate_bar{
  width: 50vw;
  height: 0.6vh;
  margin-top: 10vh;
  background-color: black;
  align-self: center;
}
.from_group .item_group{
  margin-top: 10vh;
  align-self: center;
}
.item_group .word{
  float: left;
  line-height: 6vh;
  margin-left: 0.8vw;
}
.icon_1{
  width: 2vw;
  height: 4vh;
  margin-right:0.5vw;
  float: left;
  background-image: url("../assets/pic/icon1.png");
  background-size: 100% 100%;
  background-position: center;
}
.icon_2{
  width: 2vw;
  height: 4vh;
  margin-right:0.5vw;
  float: left;
  background-image: url("../assets/pic/icon2.png");
  background-size: 100% 100%;
  background-position: center;
}
.icon_3{
  width: 2vw;
  height: 4vh;
  margin-right:0.5vw;
  float: left;
  background-image: url("../assets/pic/icon3.png");
  background-size: 100% 100%;
  background-position: center;
}
.from_group .item_group .before_buy{
  margin-right: 7vw;
  margin-left: 7vw;
  display: inline-block;
}
.from_group .item_group .business{
  margin-right: 7vw;
  margin-left: 7vw;
  display: inline-block;
}
.from_group .item_group .question{
  margin-right: 7vw;
  margin-left: 7vw;
  display: inline-block;
}
.input_group {
  margin-top: 3vh;
  align-self: center;
}
.input_item_left{
  font-size: 2vw;
  float: left;
  width: 15vw;
}
.input{
  border: none;
  font-size: 1.5vw;
  border: #D1D1D1 1px solid;
  border-radius: 5%;
  margin-bottom: 3vh;
  height: 4.5vh;
  width: 15vw;
}
.input_textarea{
  border: none;
  padding: 1.5vh;
  font-size: 1.5vw;
  border: #D1D1D1 1px solid;
  border-radius: 5%;
  margin-left: 2vw;
  height: 30vh;
  width: 35vw;
}
.check_box{
  font-size: 1.3vw;
  font-weight: 100;
  margin-top: 3vh;
  align-self: center;
  margin-left: -33vw;
}
.box{
  margin-right: 1vw;
  float: left;
}
.check_box .word{
  float: left;
}
.submit{
  text-align: center;
  line-height: 6vh;
  color: white;
  font-size: 1.5vw;
  font-weight: 200;
  margin-top: 7vh;
  align-self: center;
  width: 10vw;
  height: 6vh;
  border-radius: 5%;
  background-color: #3765d5;
}
.content{
  width: 100vw;
  height: 29.5vh;
  border: none;
}
</style>
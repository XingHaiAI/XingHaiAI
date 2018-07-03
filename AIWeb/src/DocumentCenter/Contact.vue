<template>
  <html>
<body>
<div class="bg">
    <div class="head_content">
        <div class="title">联系我们</div>
        <div class="content">CONTACT  WITH  US</div>
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
                <div class="word">返回值报错怎么办？</div>
            </div>
            <div class="title">商务咨询</div>
            <div class="content">
                <div class="word">有什么合作方案？</div>
            </div>
        </div>
    </div>
    <div class="from_group">
        <div class="decorate_bar">提交反馈</div>
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
        <div class="inro">
        	客服人员将解答您在购买产品前的一切疑问。请您在下方提供<br/>您的联系方式，并描述您的问题。
        </div>
        <div class="input_group">
            <div class="input_item_left">
                <input class="input" type="text" placeholder="姓名"/><span style="color:red;"> *</span>
                <input class="input" type="text" placeholder="联系电话"/><span style="color:red;"> *</span>
                <input class="input" type="text" placeholder="电子邮箱"/><span style="color:red;"> *</span>
                <input class="input" type="text" placeholder="所属公司机构"/>
            </div>
            <textarea class="input_textarea" placeholder="请描述您的问题。"></textarea>
        </div>
        <div class="check_box">
            <input class="box" type="checkbox"/>
            <div class="word">我已阅读并同意<span class="xinghai"> 《兴海物联隐私政策》 </span></div>
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
   font-size: 62.5%;
 }
 body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
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
  margin-top:0.7vh;
  background-size: 100% 100%;
  display: inline-block;
  width: 3.5vh;
  height: 3.5vh;
}
.icon_2{
  background-image: url("../assets/联系我们/icon2.png");
  background-size: 100% 100%;
  margin-top:0.7vh;
  display: inline-block;
  width: 3.5vh;
  height: 3.5vh;
}
.icon_3{
  background-image: url("../assets/联系我们/icon3.png");
  background-size: 100% 100%;
  margin-top:0.7vh;
  display: inline-block;
  width: 3.5vh;
  height: 3.5vh;
}
.word{
  display: inline-block;
  text-align: center;
  color: black;
  line-height: 3vh;
  font-size: 1.3vw;
  cursor:default;
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
.inro{
	height:10vh;
	line-height:4vh;
	font-size:1.2em;
	letter-spacing:0.2em;
	margin-top:1vh;
	margin-bottom:1vh;
	background-image: url("../assets/pic/气泡.png");
    background-size: 100% 100%;
	align-self:center;
}
body{
  margin: 0;
  padding: 0;
}
.xinghai{
	color:#2285ea;
}
div{
  margin: 0;
  padding: 0;
  vertical-align: 80%;
}
.bg{
  height: 221vh;
  width: 100vw;
  background-image: url("../assets/pic/bg.png");
  background-size: 100vw 221vh;
  background-position: center;
}
.head_content{
  width: 100%;
  padding-top:10vh;
  border: 2px solid white;
  height: 50.5vh;
}
.head_content .title{
  font-size: 3em;
  font-weight:lighter;
  color: white;
  margin-top: 9vh;
  margin-left: 12vw;
  cursor:default;
}
.head_content .content{
  font-size: 1.5em;
  font-weight:lighter;
  color: white;
  margin-left: 12vw;
  width: 40vw;
  margin-top: 2vh;
  cursor:default;
}
.link_group{
  float: left;
  width: 25vw;
  height: 159.5vh;
  background-color: #fefeff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.from_group{
  display: flex;
  flex-direction: column;
  float: left;
  width: 75vw;
  height: 100vh;
}
.link_group .decorate_bar{
  margin-top: 10vh;
  padding-top:0.5vh;
  height: 3vh;
  display: inline-block;
  width: 0.3vw;
  background-color: #2285ea;
}
.link_group .title .word{
  line-height: 4vh;
  display: inline-block;
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 9vh;
  padding-bottom:1vh;

}
.link_group .title{
  text-align: center;
  cursor:default;
}
.link_content{
  text-align: left;
  cursor:default;
  margin-left:1vw;
}
.link_content .title{
  margin-left: -3vw;
  text-decoration:underline;
  font-size: 1.2em;
  margin-top: 3vh;
  margin-bottom: 2vh;
  font-weight: 400;
  cursor:pointer;
}
.link_content .content{
  margin-left: 8.7vw;
  cursor:pointer;
}
.link_content .word{
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: -1vw;
  font-size: 1.2em;
  font-weight: 400;
  cursor:pointer;
}
.from_group .decorate_bar{
  width: 50vw;
  height: 5vh;
  margin-top: 10vh;
  font-size:1.5em;
  text-align:center;
  align-self: center;
}
.from_group .item_group{
  margin-top: 5vh;
  margin-left:13vw;
  align-self: center;
  width:70vw;
}
.item_group .word{
  float: left;
  line-height: 6vh;
  margin-left: 0.8vw;
  font-size:1.2em;
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
  margin-right: 5vw;
  margin-left: 5vw;
  display: inline-block;
}
.from_group .item_group .business{
  margin-right: 5vw;
  margin-left: 5vw;
  display: inline-block;
}
.from_group .item_group .question{
  margin-right: 5vw;
  margin-left: 5vw;
  display: inline-block;
}
.input_group {
  margin-top: 3vh;
  align-self: center;
}
.input_item_left{
  font-size: 2vw;
  float: left;
  width: 20vw;
}
.input{
  border: none;
  font-size: 1.3vw;
  border: #D1D1D1 1px solid;
  border-radius: 5px;
  margin-bottom: 3vh;
  height: 4.5vh;
  width: 17vw;
}
.input_textarea{
  border: none;
  padding: 1.5vh;
  font-size: 1.5vw;
  border: #D1D1D1 1px solid;
  border-radius: 5%;
  margin-left: 1vw;
  height: 35.5vh;
  width: 25vw;
}
.check_box{
  font-size: 1.3vw;
  font-weight: 100;
  margin-top: 7vh;
  align-self: center;
  margin-left: -21.5vw;
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
  cursor:pointer;
}
.content{
  width: 100vw;
  height: 29.5vh;
  border: none;
}
.input_textarea::-webkit-input-placeholder { color: #B0B0B0;font-size:18px;}
.input::-webkit-input-placeholder { color: #B0B0B0;font-size:18px;padding-left:0.5vw;}
</style>

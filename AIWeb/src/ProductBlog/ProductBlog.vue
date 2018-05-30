<template>
  <html>
<body>
<div class="bg">
    <div class="head_content">
    </div>
    <div class="link_group">
        <div class="title">
            <div class="word">类型</div>
        </div>
        <div class="link_content">
            <div class="side_column">
              <span class="options">全部类别</span>
              <span class="decorate_bar_on"></span>
            </div>
            <div class="side_column">
              <span class="options">产品更新</span>
              <span class="decorate_bar"></span>
            </div>
            <div class="side_column">
              <span class="options">服务公告</span>
              <span class="decorate_bar"></span>
            </div>
            <div class="side_column">
              <span class="options">优惠服务</span>
              <span class="decorate_bar"></span>
            </div>
        </div>
    </div>
    <div class="from_group">
      <div class="blog">
        <div class="bolg_title"><img src="../assets/产品博客/icon.png" class="icon"/></img>语音识别的API文档更新</div>
        <div class="blog_info">
          <span class="time">2018-4-30</span>
          <span class="tip">更新通知</span>
        </div>
        <div class="outline">联网授权V3不需要绑定BUNDLE ID；授权时长可灵活延长</div>
        <div class="read_more">>>阅读全文</div>
      </div>
      <div class="blog">
        <div class="bolg_title"><img src="../assets/产品博客/icon.png" class="icon"/></img>语音识别的API文档更新</div>
        <div class="blog_info">
          <span class="time">2018-4-30</span>
          <span class="tip">更新通知</span>
        </div>
        <div class="outline">联网授权V3不需要绑定BUNDLE ID；授权时长可灵活延长</div>
        <div class="read_more">>>阅读全文</div>
      </div>
      <div class="blog">
        <div class="bolg_title"><img src="../assets/产品博客/icon.png" class="icon"/></img>语音识别的API文档更新</div>
        <div class="blog_info">
          <span class="time">2018-4-30</span>
          <span class="tip">更新通知</span>
        </div>
        <div class="outline">联网授权V3不需要绑定BUNDLE ID；授权时长可灵活延长</div>
        <div class="read_more">>>阅读全文</div>
      </div>
      <div class="blog">
        <div class="bolg_title"><img src="../assets/产品博客/icon.png" class="icon"/></img>语音识别的API文档更新</div>
        <div class="blog_info">
          <span class="time">2018-4-30</span>
          <span class="tip">更新通知</span>
        </div>
        <div class="outline">联网授权V3不需要绑定BUNDLE ID；授权时长可灵活延长</div>
        <div class="read_more">>>阅读全文</div>
      </div>
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
.word_info{
  display: inline-block;
  text-align: center;
  color: white;
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
  height: 190vh;
  width: 100vw;
  background-size: 100% 100%;
  background-position: center;
}
.head_content{
  background-image: url("../assets/产品博客/pic.png");
  width: 100%;
  padding-top:10vh;
  height: 30.5vh;
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
  width: 25vw;
  height: 180vh;
  background-color: #f6faff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.from_group{
  display: flex;
  flex-direction: column;
  width: 75vw;
  height: 180vh;
}
.blog{
  margin-top:6vh;
  margin-bottom:3vh;
  margin-left:6vw;
  width:58vw;
  height:30vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.bolg_title{
  margin-top:3vh;
  margin-bottom:1.5vh;
  margin-left:1vw;
  font-size:23px;
  letter-spacing:3px;
}
.icon{
  margin-right:1.2vw;
}
.blog_info{
    margin-top:1.5vh;
    margin-bottom:1.5vh;
}
.time{
  font-size:15px;
  color:grey;
  margin-left:3vw;
}
.tip{
  font-size:15px;
  color:red;
  margin-left:3vw;
}
.outline{
  margin-top:3vh;
  margin-left:3vw;
  font-size:15px;
  color:  #303030;
  font-weight:300;
}
.read_more{
  margin-top:4vh;
  margin-left:3vw;
  font-size:15px;
  color:#3399FF;
  letter-spacing:2px;
}
.decorate_bar{
  margin-top: 5vh;
  margin-left:10.3vw;
  height: 4vh;
  display: inline-block;
  width: 0.2vw;
  background-color: white;
}
.decorate_bar_on{
  margin-top: 5vh;
  margin-left:10.3vw;
  height: 4vh;
  display: inline-block;
  width: 0.3vw;
  background-color: blue;
}
.link_group .title .word{
  line-height: 3.5vh;
  display: inline-block;
  font-size: 1.8vw;
  font-weight: 900;
  margin-top: 10vh;
  margin-left:8vw;
}

.link_content{
  text-align: left;
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
.item_group .word{
  float: left;
  line-height: 6vh;
  margin-left: 0.8vw;
}
.options{
  font-size: 1.5vw;
  font-weight: 300;
  margin-left:8vw;
  display:inline-block;
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
.content{
  width: 100vw;
  height: 29.5vh;
  border: none;
}
.background{
  height:100%;
  width:100%;
}

</style>
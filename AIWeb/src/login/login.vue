
<template>
    <div id="login">
  <div class="left_cube">
    <div class="big_word1">
        专注人工智能算法研究
    </div>
    <div class="big_word2"d>
        一站式算法服务平台
    </div>
</div>
<div class="login">
    <div class="title">
        <div class="title_left"></div>
        <div class="title_right"> 欢迎使用兴海物联AI平台</div>
    </div>
    <input type="text" class="name_email" placeholder="请输入用户名/邮箱"/>
    <input type="text" class="npassword" placeholder="密码"/>
    <div class="btn">登录</div>
    <div class="footer">
        <div class="forget_password">忘记密码</div>
        <div class="word">还没有账号？</div>
        <div class="sign_in">点击注册</div>
    </div>
</div>
<body>
</body>
</div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>
#login{
    background-color: white;
    margin: 0;
    padding: 0;
    background-image: url("bg.png");
    background-size: 100% 110%;
    width: 100%;
    height: 100%;
}
p{
    margin: 0;
}

div{
    margin: 0;
    padding: 0;
    vertical-align: top;
}

.big_word1{
    color: skyblue;
    font-size: 1.7vw;
}

.big_word2{
    margin-left: 6vw;
    color: skyblue;
    font-size: 1.7vw;
}

.left_cube{
    text-align: center;
    display: inline-block;
    margin-top: 25vh;
    margin-left: 10vw;
    width: 30vw;
    height: 50vh;
}

.login{
    display: inline-block;
    margin-left: 0vw;
    margin-right:10vw;
    box-shadow: 5px 5px 5px #F2F2F2;
    border: solid #CDCDC1 0.1px;
    border-radius: 2%;
    margin-top: 14vh;
    width: 30vw;
    height: 50vh;
    background-color: white;
}

.title{
    width:84%;
    height: 4vh;
    margin-top: 5vh;
    margin: 8%;
}

.title_left{
    float:left;
    width: 4vh;
    height:4vh;
    background-image: url("icon.png");
    background-size: 100% 100%;
}

.title_right{
    margin-left: 3vh;
    font-size: 1.8vw;
    color:black;
    letter-spacing:4px;
    font-weight:400;
}

.name_email{
    font-size: 1.25vw;
    margin-top: 4vh;
    width: 84%;
    margin-left: 8%;
    height: 5vh;
    border:1px solid;
    border-color:#C8C8C8;
    border-radius:5px;
    padding-left:5px;
}

.npassword{
    margin-top: 3vh;
    font-size: 1.25vw;
    width: 84%;
    margin-left: 8%;
    height: 5vh;
    border:1px solid;
    border-color:#C8C8C8;
    border-radius:5px;
    padding-left:5px;
}

.btn{
    background-color: deepskyblue;
    height: 5vh;
    line-height: 5vh;
    margin-top: 3vh;
    margin-left: 8%;
    font-size: 1.5vw;
    border-radius: 5%;
    color: white;
    text-align: center;
    width: 84%;
}

.footer{
    margin-left: 8%;
    margin-top: 1vh;
    width: 84%;
    height: 4vh;
}

.forget_password{
    font-weight: 300;
    float: left;
    color:black;
}

.word{
    font-weight: 300;
    margin-left: 30%;
    float: left;
    color:black;
}

.sign_in{
    color: skyblue;
    font-weight: 300;
    float: left;
}
.name_email::-webkit-input-placeholder { color: #B0B0B0;}
.name_email:after{content:"*";color:red}
.npassword::-webkit-input-placeholder { color: #B0B0B0;}
</style>

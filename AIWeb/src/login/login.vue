
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
<div class="Login">
    <div class="title">
        <div class="title_left"></div>
        <div class="title_right"> 欢迎使用兴海物联AI平台</div>
    </div>
    <input type="text" class="name_email" placeholder="请输入用户名/邮箱"/>
    <input type="text" class="npassword" placeholder="密码"/>
    <div class="btn">登陆</div>
    <div class="footer">
        <div class="forget_password">忘记密码</div>
        <div class="word">还没有账号？</div>
        <div class="sign_in">注册</div>
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
  body{
    background-color: white;
    margin: 0;
    padding: 0;
    background-image: url("bg.png");
    background-size: 100% 100%;
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
    margin-left: 20vw;
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
}

.name_email{
    font-size: 1.5vw;
    margin-top: 4vh;
    width: 84%;
    margin-left: 8%;
    height: 5vh;
    border-radius: 3%;
}

.npassword{
    margin-top: 3vh;
    font-size: 1.5vw;
    width: 84%;
    margin-left: 8%;
    height: 5vh;
    border-radius: 3%;
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
}

.word{
    font-weight: 300;
    margin-left: 45%;
    float: left;
}

.sign_in{
    color: skyblue;
    font-weight: 300;
    float: left;
}
</style>

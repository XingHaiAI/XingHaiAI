<template>
  <div id="login">
  <div class="left_cube">
    <div class="big_word1">
        专注人工智能算法研究
    </div>
    <div class="big_word2">
        一站式算法服务平台
    </div>

  </div>
    <div class="login">
      <el-card class="box-card">

        <div class="title4login" style="margin-top: 20px;">
          <span style="font-size: 32px;">欢迎使用兴海物联AI平台</span>
        </div>
        <div class="form4login">
          <el-form :model="formLogin" ref="formLogin" :rules="rules" :status-icon="true">
            <el-form-item prop="username">
              <el-input placeholder="请输入账号" style="width: 79%" v-model="formLogin.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" type="password" style="width: 79%" v-model="formLogin.password"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="buttons">
            <el-button class="button4login" type="primary" @click="login">登录</el-button>
            <el-button class="button4register" @click="gotoRegister">注册</el-button>
        </div>
      </el-card>

    </div>
  </div>
</template>

<script>
  export default {

    name: "login",
    data(){
      return{
        formLogin:{
          username:'',
          password:''
        },
        rules:{
          username:[
            {required:true,message:'请输入账号',trigger:'change'}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'change'}
          ]
        }
      }
    },
    methods:{

      gotoRegister(){
        this.$router.push({path:'/signin'})
      },
      login(){


      },
     test:function () {
        var account=document.getElementById("account").value;
        var password=document.getElementById("password").value;
        var xmlhttp;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
          {
            alert(xmlhttp.responseText);
          }
        }
        xmlhttp.open("GET","http://localhost:8080/account/login?account="+account+"&password="+password,true);
        xmlhttp.send();
      }
    }

  }
</script>

<style lang="less">

#login{
    height:120vh;
    /*background-color: white;*/
    background-image: url("bg.png");
    background-size: 100vw 120vh;
    background-repeat: repeat-y;
}




.button4register{
  background-color: white;
  width: 120px;
  font-size: 19px;
  font-weight: bold;
  border-width: 1.7px;
  color: darkgray;
  border-color: darkgray;
}

.button4login{
  background-color: cornflowerblue;
  border-color: cornflowerblue;
  width: 230px;
  border-width: 1.7px;
  font-weight: bold;
  color: white;
  font-size: 19px;
  /*font-weight: inherit;*/
  transition: all 0.7s;
}

.button4login:hover{
  background-color: cornflowerblue;
  transform: scale(1.05);
  color: white;

}

.form4login{
  margin-top: 30px;

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


.box-card{
  height:440px;
  width:500px;
  margin-right: 150px;
  margin-top: 140px;
}

  .el-input__inner{
    /*border-top: none;*/
    /*border-left: none;*/
    /*border-right: none;*/
    /*border-bottom-color: darkgray;*/
    /*border-bottom-width: 1.7px;*/
    border-color: darkgray;
    border-width: 1.5px;
    font-size:16px;
    height:50px;
    transition:all 0.7s;
  }


  .el-input__inner:hover{
    transform: scale(1.05);
  }

  .buttons{
    margin-top: 40px;
  }
#login #footer{
  display:none;
}

</style>

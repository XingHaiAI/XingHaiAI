<template>
  <div id="login"style="min-width: 13.6rem">
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

        <div class="title4login" style="margin-top: 20px;margin-left: 0.2rem;">
          <img src="../login/icon.png">
          <span style="font-size: 32px;">欢迎使用兴海物联AI平台</span>
        </div>
        <div class="form4login">
          <el-form :model="formLogin" ref="formLogin" :rules="rules" :status-icon="true">
            <el-form-item prop="username">
              <el-input placeholder="请输入账号" style="width: 85%;margin-top: 0.5rem" v-model="formLogin.account"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" type="password" style="width: 85%" v-model="formLogin.password"></el-input>
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
          account:'',
          password:''
        },
        rules:{
          account:[
            {required:true,message:'请输入账号',trigger:'change'}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'change'}
          ]
        }
      }
    },
    created(){
    },
    methods:{

      gotoRegister(){
        this.$router.push({path:'/signin'})
      },
      login(){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/account/login?account='+this.$data.formLogin.account+'&password='+this.$data.formLogin.password,
        }).then(function (response) {
          alert('登录成功！');
          _this.$router.push({path:'/',query:{isLogin:true}});
        })
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
    height:8rem;
    /*background-color: white;*/
    background-image: url("bg.png");
    background-size: 100% 100%;
    background-repeat: repeat-y;
}




.button4register{
  background-color: white;
  width: 1.20rem;
  font-size: 0.19rem;
  font-weight: bold;
  border-width: 0.017rem;
  color: darkgray;
  border-color: darkgray;
}

.button4login{
  background-color: #2285ea;
  border-color: #2285ea;
  width: 2.45rem;
  border-width: 0.017rem;
  font-weight: bold;
  color: white;
  font-size: 0.19rem;
  /*font-weight: inherit;*/
  transition: all 0.7s;
}

.button4login:hover{
  background-color: cornflowerblue;
  transform: scale(1.05);
  color: white;

}

.form4login{
  margin-top: 0.30rem;
  margin-left: 0.2rem;
}

.linkto{
    color: white;
    text-decoration: none
  }
.big_word1{
    color: skyblue;
    font-size: 0.233rem;
}

.big_word2{
    margin-left: 0.8196rem;
    color: skyblue;
    font-size: 0.233rem;
}

.left_cube{
    text-align: center;
    display: inline-block;
    margin-top: 1.7rem;
    margin-left: 1.366rem;
    width: 4.1rem;
    height: 3.34rem;
}


.box-card{
  height:4.40rem;
  width:5rem;
  margin-right: 1.5rem;
  margin-top: 1.4rem;
}

  .el-input__inner{
    /*border-top: none;*/
    /*border-left: none;*/
    /*border-right: none;*/
    /*border-bottom-color: darkgray;*/
    /*border-bottom-width: 0.017rem;*/
    border-color: darkgray;
    border-width: 0.015rem;
    font-size:0.16rem;
    height:0.50rem;
    transition:all 0.7s;
  }


  .el-input__inner:hover{
    transform: scale(1.05);
  }

  .buttons{
    margin-top: 0.40rem;
    margin-left: 0.2rem;
  }
#login #footer{
  display:none;
}

</style>

<template>
    <div id="signIn">
  <div class="left_cube">
    <div class="big_word1">
        专注人工智能算法研究
    </div>
    <div class="big_word2">
        一站式算法服务平台
    </div>
</div>
<div class="login">
  <el-card style="height: 100%">
    <div class="title4register" style="margin-top: 20px;">
      <span style="font-size: 30px;">欢迎使用兴海物联AI平台</span>
    </div>
    <div class="form4register">
      <el-form :model="formRegister" ref="formRegister" :rules="rulesRegister" label-width="18%">
        <el-form-item prop="username" label="用户名" >
          <el-input v-model="formRegister.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱" >
          <el-input v-model="formRegister.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="identity" label="验证码" >
          <el-input v-model="formRegister.identity" placeholder="请输入邮箱验证码">
            <el-button slot="append" >
              <span v-show="timeShow" @click="getCode">获取验证码</span>
              <span v-show="!timeShow" class="count">{{timeCount}} s</span>
            </el-button>
          </el-input>

        </el-form-item>
        <el-form-item prop="password" label="密码" >
          <el-input v-model="formRegister.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="passwordRepeat" label="重复密码">
          <el-input v-model="formRegister.passwordRepeat" type="password"  placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox :checked="agree" @change="agree=!agree">我已阅读并同意兴海物联私政策</el-checkbox>
        </el-form-item>
      </el-form>

    </div>
    <div class="buttons">
      <el-button class="button4register" :disabled="!agree">注册</el-button>
      <el-button class="button4log" @click="gotoLogin">登录</el-button>
    </div>
  </el-card>
</div>

</div>
</template>

<script>
  export default {
    name: "signIn",
    data(){
      let checkPassword=(rule,value,callback)=>{
        if(!value){
          callback(new Error('请再次输入密码'))
        }else {
          if (value !== this.$data.formRegister.password) {
              callback(new Error('两次密码输入不一致'))
          }else{
            callback();
          }
        }
      };
      return{
        timer:null,
        timeCount:'',
        timeShow:true,
        agree:false,
        formRegister:{
          username:'',
          password:'',
          passwordRepeat:'',
          email:'',
          identity:''
        },
        rulesRegister:{
          username:[
            {required:true,message:'请输入用户名',trigger:'change'}
          ],
          password:[
            {required:true,min:6,max:18,message:'请输入6-18位密码',trigger:'change'}
          ],
          email:[
            {required:true,pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$/,message:'请输入正确的邮箱格式',trigger:'change'}
          ],
          passwordRepeat:[
            {required:true,validator:checkPassword,trigger:'change'}
          ],
          identity:[
            {required:true,message:'请输入验证码',trigger:'change'}
          ]
        }
      }
    },
    methods:{
      gotoLogin(){
        this.$router.push({path:'/login'})
      },
      getCode() {
        let _this=this;
        const TIME_COUNT = 60;    //验证码获取时间间隔
        if (!_this.timer) {
          _this.timeCount = TIME_COUNT;
          _this.timeShow = false;
          _this.timer = setInterval(() => {
            if (_this.timeCount > 0 && _this.timeCount <= TIME_COUNT) {
              _this.timeCount--;
            } else {
              _this.timeShow = true;
              clearInterval(_this.timer);
              _this.timer = null;
            }
          }, 1000)
        }
        this.$message({
          message: '发送验证码成功！请注意查收',
          type: 'success'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
#signIn{
    height:120vh;
    margin: 0;
    padding: 0;
    background-image: url("bg.png");
    background-size: 100vw 120vh;
    /*width: 100%;*/
    /*height: 100%;*/
}
p{
    margin: 0;
}

.buttons{
  margin-top: 40px;
  width: 100%;
  text-align: center;
}

.button4register{

  background-color: cornflowerblue;
  width: 200px;
  height:45px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-color: cornflowerblue;
}

.big_word1{
    color: skyblue;
    font-size: 1.7vw;
}

.form4register{
    margin-top: 40px;
}

.title4register{

}


.button4log{
  background-color: white;
  border-color: darkgray;
  border-width: 1.7px;
  font-size: 18px;
  width: 100px;
  height:45px;
  color: darkgray;
  font-weight: bold;

}

.box{
  margin-top: 2.5vh;
  margin-left: 3vw;
  float: left;
}
.check_box .choose{
  float: left;
  color:black;
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
  height:650px;
  width:500px;
  margin-top: 110px;
  margin-right: 160px;
}

.el-input{

  width:78%
}
.name_email{
    font-size: 1.25vw;
    margin-top: 3vh;
    width: 84%;
    margin-left: 8%;
    height: 5vh;
    border:1px solid;
    border-color:#C8C8C8;
    border-radius:5px;
    padding-left:5px;

}
#footer{
  display:none;
}

</style>

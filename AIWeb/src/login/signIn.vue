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
    <div class="title4register" style="margin-top: 0.20rem;">
      <span style="font-size: 0.30rem;">欢迎使用兴海物联AI平台</span>
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
              <el-tooltip class="item" effect="dark" content="不能在60s内重复申请验证码哦" placement="top-start">
              <span v-show="!timeShow" class="count">{{timeCount}} s后重新获取验证码</span>
              </el-tooltip>
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
      <el-button class="button4register" :disabled="!agree" @click="SignIn">注册</el-button>
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
        identityCode:'',
        rulesRegister:{
          username:[
            {required:true,message:'请输入用户名',trigger:'change'}
          ],
          password:[
            {required:true,min:6,max:18,message:'请输入6-18位密码',trigger:'change'}
          ],
          email:[
            {required:true,pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:'请输入正确的邮箱格式',trigger:'change'}
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
        let _this = this;
        const reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if (reg.test(this.$data.formRegister.email)) {
          this.$axios({
            method: 'get',
            url: '/account/sendEmail',
            params: {
              email: this.$data.formRegister.email
            }
          }).then(function (response) {
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
              alert('验证码发送成功！')
            }
          }).catch(function (err) {
            alert('验证码发送失败！请检查填写是否有错误！')
          })
        }else{
          alert('请输入正确的邮箱！')
        }
      },
      SignIn(){
        let _this=this;
        this.$refs['formRegister'].validate((valid)=>{
          if(valid){
            this.$axios({
              method:'get',
              url:'account/register',
              params:{
                account:this.$data.formRegister.username,
                password:this.$data.formRegister.password,
                email:this.$data.formRegister.email,
                code:parseInt(this.$data.formRegister.identity)
              }
            }).then(function (response) {
              if(response.data===true){
                alert('注册成功！');
                _this.$router.push({path:'/login',query:{account:_this.$data.formRegister.username}})
              }else{
                alert('验证码错误！')
              }
            }).catch(function (err) {
              alert('该用户已存在！');
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
#signIn{
  height: 8rem;
    margin: 0;
    padding: 0;
    background-image: url("bg.png");
    background-size: 100% 100%;
    /*width: 100%;*/
    /*height: 100%;*/
}
p{
    margin: 0;
}

.buttons{
  margin-top: 0.40rem;
  width: 100%;
  text-align: center;
}

.button4register{

  background-color: cornflowerblue;
  width: 2rem;
  height:0.45rem;
  color: white;
  font-weight: bold;
  font-size: 0.18rem;
  border-color: cornflowerblue;
}

.big_word1{
    color: skyblue;
    font-size: 0.233rem;
}

.form4register{
    margin-top: 0.40rem;
}

.title4register{

}


.button4log{
  background-color: white;
  border-color: darkgray;
  border-width: 0.017rem;
  font-size: 0.18rem;
  width: 1rem;
  height:0.45rem;
  color: darkgray;
  font-weight: bold;

}

.box{
  margin-top: 0.17rem;
  margin-left: 0.41rem;
  float: left;
}
.check_box .choose{
  float: left;
  color:black;
}

.big_word2{
    margin-left: 0.82rem;
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
.login{
  height:6.50rem;
  width:5rem;
  margin-top: 1.10rem;
  margin-right: 1.60rem;
}

.el-input{

  width:78%
}
.name_email{
    font-size: 0.18rem;
    margin-top: 0.2rem;
    width: 84%;
    margin-left: 8%;
    height: 0.334rem;
    border:0.01rem solid;
    border-color:#C8C8C8;
    border-radius:0.05rem;
    padding-left:0.05rem;

}
#footer{
  display:none;
}

</style>

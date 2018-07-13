<template>
    <div id="signIn"style="min-width: 13.6rem">
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
    <div class="title4register" style="margin-top: 0.20rem;margin-left: 0.2rem;">
      <img src="../login/icon.png">
      <span style="font-size: 0.30rem;">欢迎使用兴海物联AI平台</span>
    </div>
    <div class="form4register">
      <el-form :model="formRegister" ref="formRegister" :rules="rulesRegister" label-width="18%">
        <el-form-item prop="username" label=" " style="margin-top: 0.2rem;margin-left:-0.5rem ">
          <el-input v-model="formRegister.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="email" label=" " style="margin-left:-0.5rem ">
          <el-input v-model="formRegister.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="identity" label=" " style="margin-left:-0.5rem ">
          <el-input v-model="formRegister.identity" placeholder="请输入邮箱验证码">
            <el-button slot="append" >
              <span v-show="timeShow" @click="getCode">获取验证码</span>
              <el-tooltip class="item" effect="dark" content="不能在60s内重复申请验证码哦" placement="top-start">
              <span v-show="!timeShow" class="count">{{timeCount}} s后重新获取验证码</span>
              </el-tooltip>
            </el-button>
          </el-input>

        </el-form-item>
        <el-form-item prop="password" label=" " style="margin-left:-0.5rem ">
          <el-input v-model="formRegister.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="passwordRepeat" label=" "style="margin-left:-0.5rem ">
          <el-input v-model="formRegister.passwordRepeat" type="password"  placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">我已阅读并同意
            <el-button type="text" @click="dialogVisible = true">《兴海物联隐私政策》 </el-button>
            <el-dialog
                title="兴海物联隐私政策"
                :visible.sync="dialogVisible"
                width="70%"
                height="50%"
                :before-close="handleClose"
                >
                <div class="privacy">
                  <p class="p_content">兴海物联AI平台尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务， 兴海物联AI平台会按照本隐私权政策的规定使用和披露您的个人信息。<br>但兴海物联AI平台将以高度的勤勉、审慎义务对待这些信息。 除本隐私权政策另有规定外，在未征得您事先许可的情况下，兴海物联AI平台不会将这些信息对外披露或向第三方提供。 兴海物联AI平台会不时更新本隐私权政策。 <br>您在同意兴海物联AI平台服务使用协议之时，即视为您已经同意本隐私权政策全部内容。 <br>本隐私权政策属于兴海物联AI平台服务使用协议不可分割的一部分。<br><br>
                  1. 适用范围<br>
                  a) 在您注册兴海物联AI平台帐号时，您根据兴海物联AI平台要求提供的个人注册信息；<br>
                  b) 在您使用兴海物联AI平台网络服务，或访问兴海物联AI平台平台网页时，兴海物联AI平台自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、 浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；<br>
                  c) 兴海物联AI平台通过合法途径从商业伙伴处取得的用户个人数据。 <br>
                </p><br>
                <p class="p_content">您了解并同意，以下信息不适用本隐私权政策： <br>
                  a) 您在使用兴海物联AI平台平台提供的搜索服务时输入的关键字信息； <br>
                  b) 兴海物联AI平台收集到的您在兴海物联AI平台发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情； <br>
                  c) 违反法律规定或违反兴海物联AI平台规则行为及兴海物联AI平台已对您采取的措施。<br></p><br>
                <p class="p_content">2. 信息使用 <br>
                  a) 兴海物联AI平台不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和兴海物联AI平台（含兴海物联AI平台关联公司） <br>单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。<br> 
                  b) 兴海物联AI平台亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何兴海物联AI平台平台用户如从事上述活动，一经发现，兴海物联AI平台有权立即终止与该用户的服务协议。 <br>
                  c) 为服务用户的目的，兴海物联AI平台可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与兴海物联AI平台合作伙伴共享信息以便他们向您 <br>发送有关其产品和服务的信息（后者需要您的事先同意）。</p><br>
                <p class="p_content">3. 信息披露 <br>
                    在如下情况下，兴海物联AI平台将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息： <br>
                    a) 经您事先同意，向第三方披露； <br>
                    b) 为提供您所要求的产品和服务，而必须和第三方分享您的个人信息； <br>
                    c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；<br>
                    d) 如您出现违反中国有关法律、法规或者兴海物联AI平台服务协议或相关规则的情况，需要向第三方披露； <br>
                    e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；<br>
                    f) 在兴海物联AI平台平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，兴海物联AI平台有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。<br>
                    g) 其它兴海物联AI平台根据法律、法规或者网站政策认为合适的披露。</p><br>
                <p class="p_content">4. 信息存储和交换 <br>
                      兴海物联AI平台收集的有关您的信息和资料将保存在兴海物联AI平台及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或兴海物联AI平台收集信息和资料所在地的境外并在境外被访问、存储和展示。</p><br>
                <p class="p_content">5. Cookie的使用 <br>
                    a) 在您未拒绝接受cookies的情况下，兴海物联AI平台会在您的计算机上设定或取用cookies，以便您能登录或使用依赖于cookies的兴海物联AI平台平台服务或功能。 <br>兴海物联AI平台使用cookies可为您提供更加周到的个性化服务，包括推广服务。 <br>
                    b) 您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖 于cookies的兴海物联AI平台网络服务或功能。 <br>
                    c) 通过兴海物联AI平台所设cookies所取得的有关信息，将适用本政策。</p><br>
                <p class="p_content">6. 信息安全 <br>
                    a) 兴海物联AI平台帐号均有安全保护功能，请妥善保管您的用户名及密码信息。兴海物联AI平台将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。 尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。 <br>
                    b) 在使用兴海物联AI平台网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人 信息，仅在必要的情形下向他人提供。<br>如您发现自己的个人信息泄密，尤其是兴海物联AI平台用户名及密码发生泄露，请您立即联络兴海物联AI平台客服，以便兴海物联AI平台采取相应措施</p><br>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
          </el-checkbox>
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
        dialogVisible: false,
        timer:null,
        timeCount:'',
        timeShow:true,
        agree:false,
        formRegister:{
          time:'',
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
        this.$data.formRegister.time=new Date();

        let date=this.$data.formRegister.time;
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();

        this.$data.formRegister.time=year+'-'+month+'-'+day;

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
                code:parseInt(this.$data.formRegister.identity),
                time:this.$data.formRegister.time
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
      },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
  margin-left: -0.04rem;
  width: 100%;
  text-align: center;
}

.button4register{

  background-color: #2285ea;
  width: 2.6rem;
  height:0.45rem;
  color: white;
  font-weight: bold;
  font-size: 0.18rem;
  border-color: #2285ea;
}
.button4register:hover{
  background-color: cornflowerblue;
  transform: scale(1.05);
  color: white;

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

  width:88%;
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

<template>
<div class="bg"style="min-width: 13.6rem">
    <div class="head_content">
        <div class="title">联系我们</div>
        <div class="content">CONTACT  WITH  US</div>
    </div>
    <div class="link_group">
        <div class="title">
            <div class="decorate_bar"></div>
          <div class="word"><router-link to="/CommonProblems"style="color: black">常见问题</router-link></div>
        </div>
        <div class="link_content">
          <div class="title"><router-link to="/CommonProblems"style="color: black">售前咨询</router-link></div>
            <div class="content">
              <div class="word"><router-link to="/CommonProblems"style="color: black">如何接入API？</router-link></div><br/>
              <div class="word"><router-link to="/CommonProblems"style="color: black">API如何收费？</router-link></div><br/>
              <div class="word"><router-link to="/CommonProblems"style="color: black">返回值报错怎么办？</router-link></div>
            </div>
          <div class="title"><router-link to="/CommonProblems"style="color: black">商务咨询</router-link></div>
            <div class="content">
              <div class="word"><router-link to="/CommonProblems"style="color: black">有什么合作方案？</router-link></div>
            </div>
        </div>
    </div>
    <div class="from_group">
        <div class="decorate_bar"style="margin-bottom: 0.3rem">提交反馈</div>
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
              <el-form :model="formAdvice" ref="formAdvice" :rules="rulesAdvice">
                <el-form-item prop="name" style="height:0.4rem;">
                  <el-input placeholder="请输入姓名" v-model="formAdvice.name"></el-input>
                </el-form-item>
                <el-form-item prop="telephone" style="height: 0.4rem">
                  <el-input placeholder="请输入联系电话" v-model="formAdvice.phone"></el-input>
                </el-form-item>
                <el-form-item prop="email" style="height: 0.4rem">
                  <el-input placeholder="请输入电子邮箱" v-model="formAdvice.email"></el-input>
                </el-form-item>
                <el-form-item prop="organization" style="height: 0.4rem">
                  <el-input placeholder="请输入机构名" v-model="formAdvice.company"></el-input>
                </el-form-item>
                <el-form-item prop="type">
                  <el-radio v-model="formAdvice.type" label="1" style="font-size: 10px;">售前咨询</el-radio>
                  <el-radio v-model="formAdvice.type" label="2" style="font-size: 10px;">商务咨询</el-radio>
                  <el-radio v-model="formAdvice.type" label="3" style="font-size: 10px;">问题反馈</el-radio>
                </el-form-item>
              </el-form>
            </div>
            <textarea class="input_textarea" v-model="formAdvice.question" placeholder="请描述您的问题。"></textarea>
        </div>
        <div class="check_box">
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
            
        </div>
        <div style="text-align: center">
          <div style="height: 20px"></div>
        <el-button style="height: 0.35rem;width: 1.2rem;" class="button4submit" @click="submit" :disabled="!checked">提交</el-button>
        </div>
    </div>
</div>

</template>
<script>
export default {
  name: 'ContactUs',
  data(){
    return{
      checked:false,
      dialogVisible: false,
      formAdvice:{
        name:'',
        phone:'',
        email:'',
        company:'',
        question:'',
        type:'1',
        time:''
        
      },
      rulesAdvice:{
        name:[
          {required:true,message:'请输入姓名',trigger:'change'}
        ],
        phone:[
          {required:true,message:'请输入联系电话',trigger:'change'}
        ],
        email:[
          {required:true,message:'请输入电子邮箱',trigger:'change'}
        ],
        company:[
          {required:true,message:'请输入机构名',trigger:'change'}
        ],
        question:[
          {required:true,min:2,max:300,message:'请输入1-300以内的描述',trigger:'change'}
        ]
      }
    }
  },
  methods:{
      submit() {
        let _this=this;
        this.$data.formAdvice.time=new Date();
        let date=this.$data.formAdvice.time;
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();
        if(month>'0'&&month<='9'){
          month='0'+month;
        }
        if(day>'0'&&day<='9'){
          day='0'+day;
        }
        this.$data.formAdvice.time=year+'-'+month+'-'+day;

        if (this.$data.formAdvice.question.length < 1 || this.$data.formAdvice.question.length > 300) {
          this.$message({
            type: 'error',
            message: '请输入1-300字以内的描述'
          })
        } else {
          this.$refs['formAdvice'].validate((valid) => {
            if (valid) {
              this.$axios({
                method:'get',
                url:'/question/submit',
                params:this.$data.formAdvice
              }).then((res)=>{
                this.$message({
                  type:'success',
                  message:'信息反馈成功！'
                })
                _this.$data.formAdvice.question='';
                _this.$data.formAdvice.company='';
                _this.$data.formAdvice.phone='';
                _this.$data.formAdvice.email='';
                _this.$data.formAdvice.name='';
              }).catch((err)=>{
                this.$message({
                  type:'error',
                  message:'反馈失败！'
                })
              })
            }
          })
        }
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

<style lang="less">
.button4submit{
  color: white;
  background-color: #2285ea;
}

.button4submit:hover{
  background-color: #2285ea;
  color: white;
}

.button4submit:focus{
  background-color: #2285ea;
  color: white;
}

#ContactUs{
   background-color: blue;
   background-image: url("../assets/联系我们/bg.jpg");
   background-size: 100% 100%;
   width: 13.66rem;
   height: 2.45rem;
   /*margin: 0;*/
   /*padding: 0;*/
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
  margin-top: 0.01rem;
  margin-left: -0.888rem;
  text-align: center;
  color: white;
  font-size: 0.2rem;
}
.line{
  align-self: center;
  margin-top: 0.02rem;
}
.step_line{
  margin-top: 0.001rem;
}

.el-input__inner{
  border-color:black;
  font-size: 0.16rem;
}

.icon_1{
  background-image: url("../assets/联系我们/icon1.png");
  margin-top:0.05rem;
  background-size: 100% 100%;
  display: inline-block;
  width: 0.03rem;
  height: 0.03rem;
}
.icon_2{
  background-image: url("../assets/联系我们/icon2.png");
  background-size: 100% 100%;
  margin-top:0.05rem;
  display: inline-block;
  width: 0.03rem;
  height: 0.03rem;
}
.icon_3{
  background-image: url("../assets/联系我们/icon3.png");
  background-size: 100% 100%;
  margin-top:0.05rem;
  display: inline-block;
  width: 0.03rem;
  height: 0.03rem;
}
.word{
  display: inline-block;
  text-align: center;
  color: black;
  line-height: 0.3rem;
  font-size: 0.2rem;
  cursor:default;
}
.coloum_1{
  display: inline-block;
}
.coloum_2{
  margin-left: 0.41rem;
  margin-bottom:0.05rem;
  background-image: url("../assets/联系我们/pic1.jpg");
  background-size: 100% 100%;
  display: inline-block;
  width: 0.10rem;
  height: 0.10rem;
}
.inro{
	height:1rem;
	line-height:0.29rem;
	font-size:0.18rem;
	letter-spacing:0.2em;
	margin-top:-1rem;
	margin-bottom:0.5rem;
	background-image: url("../assets/pic/气泡.png");
    background-size: 100% 100%;
	align-self:center;
}
body{
  /*margin: 0;*/
  /*padding: 0;*/
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
  height: 8rem;
  width: 100%;

}
.head_content{
  width: 100%;
  padding-top:0.5rem;
  height: 5.40rem;
  background-image: url("../assets/pic/contact.png");
  background-size: 100% 5.40rem;
  background-repeat: no-repeat;
  min-width: 12rem;
}
.head_content .title{
  font-size: 0.46rem;
  font-weight:lighter;
  color: white;
  margin-top: 1.4rem;
  margin-left: 1.639rem;
  cursor:default;
}
.head_content .content{
  font-size: 0.19rem;
  font-weight:lighter;
  color: white;
  margin-left: 1.639rem;
  width: 5.464rem;
  margin-top: 0.02rem;
  cursor:default;
}
.link_group{
  float: left;
  width: 3.415rem;
  height: 9.55rem;
  background-color: #fefeff;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.2rem 0 rgba(0, 0, 0, 0.19);
}
.from_group{
  display: flex;
  flex-direction: column;
  float: left;
  width: 9.245rem;
  height: 5rem;
}
.link_group .decorate_bar{
  margin-top: 0.9rem;
  padding-top:0.05rem;
  height: 0.32rem;
  display: inline-block;
  width: 0.041rem;
  background-color: #2285ea;
}
.link_group .title .word{
  line-height: 1.35rem;
  display: inline-block;
  font-size: 0.32rem;
  font-weight: 500;
  margin-top: 0.01rem;
  padding-bottom:0.1rem;

}
.link_group .title{
	margin-left:0.956rem;
  cursor:default;
}
.link_content{
  text-align: left;
  cursor:default;
  margin-left:0.137rem;
}
.link_content .title{
  margin-left: 0.82rem;
  text-decoration:underline;
  font-size: 0.24rem;
  margin-top: -0.5rem;
  margin-bottom: 0.2rem;
  font-weight: 400;
  cursor:pointer;
}
.link_content .content{
  margin-left: 0.915rem;
  cursor:pointer;
  margin-bottom:1.1rem;
}
.link_content .word{
  margin-top: 0.02rem;
  margin-bottom: 0.2rem;
  margin-left: -0.137rem;
  font-size: 0.22rem;
  font-weight: 400;
  cursor:pointer;
}
.from_group .decorate_bar{
  width: 6.83rem;
  height: 0.5rem;
  margin-top: 0.9rem;
  font-size:0.3rem;
  text-align:center;
  align-self: center;
}
.from_group .item_group{
  margin-top: 0.3rem;
  margin-left:0.3rem;
  align-self: center;
  width:85%;
}
.item_group .word{
  float: left;
  line-height: 0.36rem;
  margin-left: 0rem;
  font-size:0.24rem;
}
.icon_1{
  width: 0.273rem;
  height: 0.25rem;
  margin-right:0.0983rem;
  float: left;
  background-image: url("../assets/pic/icon1.png");
  background-size: 100% 100%;
  background-position: center;
}
.icon_2{
  width: 0.273rem;
  height: 0.25rem;
  margin-right:0.0983rem;
  float: left;
  background-image: url("../assets/pic/icon2.png");
  background-size: 100% 100%;
  background-position: center;
}
.icon_3{
  width: 0.273rem;
  height: 0.25rem;
  margin-right:0.0983rem;
  float: left;
  background-image: url("../assets/pic/icon3.png");
  background-size: 100% 100%;
  background-position: center;
}
.from_group .item_group .before_buy{
  margin-right: 0.683rem;
  margin-left: 0.383rem;
  display: inline-block;
}
.from_group .item_group .business{
  margin-right: 0.683rem;
  margin-left: 0.383rem;
  display: inline-block;
}
.from_group .item_group .question{
  margin-right: 0.683rem;
  margin-left: 0.383rem;
  display: inline-block;
}
.input_group {
  margin-top: 0.03rem;
  align-self: center;
}
.input_item_left{
  font-size: 0.2rem;
  float: left;
  width: 2.9rem;
}
.input{
  border: none;
  font-size: 0.2rem;
  border: #D1D1D1 0.01rem solid;
  border-radius: 0.05rem;
  margin-bottom: 0.35rem;
  height: 0.3rem;
  width: 2.322rem;
}
.input_textarea{
  border: none;
  padding: 0.05rem;
  font-size: 0.16rem;
  border: black 0.01rem solid;
  border-radius: 2%;
  margin-left: 0.137rem;
  height: 2.55rem;
  width: 3.415rem;
}
.input_textarea:hover{
	border:#A0A0A0 0.01rem solid;
	}
.input_textarea:focus{
	border:0px;
	}
.check_box{
  font-size: 0.2rem;
  font-weight: 100;
  margin-top: 0.4rem;
  align-self: center;
  margin-left: -1.94rem;
}
.box{
  margin-top: 0.1rem;
  margin-right: 0.137rem;
  float: left;
}
.check_box .word{
  float: left;
}
.submit{
  text-align: center;
  line-height: 0.4rem;
  color: white;
  font-size: 0.2rem;
  font-weight: 200;
  margin-top: 0.4rem;
  align-self: center;
  width: 1.367rem;
  height: 0.4rem;
  border-radius: 5%;
  background-color: #3765d5;
  cursor:pointer;
}

.input_textarea::-webkit-input-placeholder { color: #B0B0B0;font-size:0.16rem;}
.input::-webkit-input-placeholder { color: #B0B0B0;font-size:0.16rem;padding-left:0.068rem;}
.privacy{
  width:8rem;
  word-wrap: break-word; 
  word-break: normal;
  overflow:auto; 
  text-align:left;
  margin-left:0.5rem;
  height:3.5rem;
}
.p_content{
  width:7rem;
  text-align:left;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    font-size:0.15rem;
}
.el-dialog__footer {
  text-align:center;
}
.el-dialog__header {
  text-align:center;
}

</style>

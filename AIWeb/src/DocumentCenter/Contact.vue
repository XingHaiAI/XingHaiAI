<template>
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
                <div class="word"><router-link to="/ContactUs" style="text-decoration: none;color: black">售前咨询</router-link></div>
            </div>
            <div class="business">
                <div class="icon_2"></div>
                <div class="word"><router-link to="/ContactBussiness" style="text-decoration: none;color: black">商务咨询</router-link></div>
            </div>
            <div class="question">
                <div class="icon_3"></div>
                <div class="word"><router-link to="/ContactProblem" style="text-decoration: none;color: black">问题反馈</router-link></div>
            </div>
        </div>
        <div class="inro">
        	客服人员将解答您在购买产品前的一切疑问。请您在下方提供<br/>您的联系方式，并描述您的问题。
        </div>
        <div class="input_group">
            <div class="input_item_left">
              <el-form :model="formAdvice" ref="formAdvice" :rules="rulesAdvice">
                <el-form-item prop="name" style="height:0.6rem;">
                  <el-input placeholder="请输入姓名" v-model="formAdvice.name"></el-input>
                </el-form-item>
                <el-form-item prop="telephone" style="height: 0.6rem">
                  <el-input placeholder="请输入联系电话" v-model="formAdvice.telephone"></el-input>
                </el-form-item>
                <el-form-item prop="email" style="height: 0.6rem">
                  <el-input placeholder="请输入电子邮箱" v-model="formAdvice.email"></el-input>
                </el-form-item>
                <el-form-item prop="organization" style="height: 0.6rem">
                  <el-input placeholder="请输入机构名" v-model="formAdvice.organization"></el-input>
                </el-form-item>
              </el-form>

            </div>
            <textarea class="input_textarea" v-model="formAdvice.content" placeholder="请描述您的问题。"></textarea>
        </div>
        <div class="check_box">
          <el-checkbox v-model="checked">我已阅读并同意<span class="xinghai"> 《兴海物联隐私政策》 </span></el-checkbox>
            <!--<div class="word">/div>-->
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
      formAdvice:{
        name:'',
        telephone:'',
        email:'',
        organization:'',
        content:''
      },
      rulesAdvice:{
        name:[
          {required:true,message:'请输入姓名',trigger:'change'}
        ],
        telephone:[
          {required:true,message:'请输入联系电话',trigger:'change'}
        ],
        email:[
          {required:true,message:'请输入电子邮箱',trigger:'change'}
        ],
        organization:[
          {required:true,message:'请输入机构名',trigger:'change'}
        ],
        content:[
          {required:true,min:2,max:300,message:'请输入1-300以内的描述',trigger:'change'}
        ]
      }
    }
  },
  methods:{
      submit() {
        let _this=this;

        if (this.$data.formAdvice.content.length < 1 || this.$data.formAdvice.content.length > 300) {
          this.$message({
            type: 'error',
            message: '请输入1-300字以内的描述'
          })
        } else {
          this.$refs['formAdvice'].validate((valid) => {
            if (valid) {
              this.$axios({
                method:'get',
                url:'/account/ques',
                data:this.$qs.stringify(this.$data.formAdvice)
              }).then((res)=>{
                this.$message({
                  type:'success',
                  message:'信息反馈成功！'
                })
                _this.$data.formAdvice.content='';
                _this.$data.formAdvice.organization='';
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
	line-height:0.25rem;
	font-size:0.2rem;
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
  margin-top: 1rem;
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
  width: 2.732rem;
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
  font-size: 0.2rem;
  border: #D1D1D1 0.01rem solid;
  border-radius: 5%;
  margin-left: 0.137rem;
  height: 2.55rem;
  width: 3.415rem;
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

.input_textarea::-webkit-input-placeholder { color: #B0B0B0;font-size:0.18rem;}
.input::-webkit-input-placeholder { color: #B0B0B0;font-size:0.18rem;padding-left:0.068rem;}
</style>

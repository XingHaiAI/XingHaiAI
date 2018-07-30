<template>
  <div id="InfoModify">
  <div id="header"style="min-width: 13.6rem">
    <img src="../assets/控制台/banner.png">
  </div>
  <div id="body">
    <div id="aside">
      <sidebar></sidebar>
    </div>
    <div id="main">

      <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false" title="修改密码" style="width: 8rem">
        <el-form :model="formModifyPassword" :ref="formModifyPassword" :rules="rulesModifyPassword">
          <el-form-item prop="oldPassword" label="旧密码" style="width: 2.6rem;">
            <el-input type="password" style="font-size: 20px;width: 2rem" v-model="formModifyPassword.oldPassword"></el-input>
          </el-form-item>
          <el-form-item prop="newPassword" label="新密码" style="width: 2.6rem">
            <el-input type="password" class="k123" style="height: 0.5rem;width: 2rem;font-size: 20px;" v-model="formModifyPassword.newPassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="confirmModify" style="color: white;background-color: cornflowerblue;width: 1rem;height: 0.4rem">确定</el-button>
            <el-button @click="cancelModify" style="color: white;background-color: crimson;width: 1rem;height: 0.4rem;border-color: crimson">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>


      <div id="search">
        <p class="route"><router-link to="" class="linkto">控制台</router-link>&gt账号信息</p>
      </div>
      <div style="height: 30px;"></div>
      <div class="line">
        <div class="title">用户名：</div>
        <input class="searchInput" v-model="userInfo.account" style="width: 70%;height:10%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;margin-top: 0.15rem;" disabled placeholder="用户名"/>
      </div>

      <div class="line">
        <div class="title">邮箱：</div>
        <input class="searchInput" style="width: 70%;height:10%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;margin-top: 0.15rem;float: left" v-model="userInfo.email" disabled placeholder="输入邮箱"/>
      </div>


      <div class="line">
        <el-button type="primary"  class="bg_btn" id="find"  v-model="userInfo.password" style="width: 1.4rem;height: 0.4rem;margin-top: 0.13rem;background-color: #2285ea;color: white;" @click="dialogVisible=true">修改密码</el-button>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
  import sidebar from './SideBar.vue'
  export default {
    name:"ControllerInfo",
    components: {sidebar},
    data() {
      return {
        isCollapse: true,
        userInfo:{
          username:'',
          password:'',
          email:'',
        },
        dialogVisible:false,
        formModifyPassword:{
          oldPassword:'',
          newPassword:''
        },
        rulesModifyPassword:{
          newpassword:[
            {required:true,min:6,max:18,message:'请输入6-18位的新密码',trigger:'change'}]
        }
      };
    },
    mounted(){
      let token=document.cookie.split(';');

      let account=token[0].split('=')[1]
      /**
       * 获取用户的个人信息
       */
      let _this=this;
      this.$axios({
        method:'get',
        url:'/adm/getAccountMore',
        params:{
          account:account
        }
      }).then(function (response) {
        _this.$data.userInfo=response.data;
      })

    },
    methods: {
      confirmModify(){
        let temp=document.cookie.split(';');

        let account=temp[0].split('=')[1]


        let _this=this;
        this.$axios({
          method:'get',
          url:'/account/updatePassword',
          params:{
            account:account,
            oldpassword:this.$data.formModifyPassword.oldPassword,
            newpassword:this.$data.formModifyPassword.newPassword
          }
        }).then(function (response) {
          if(response.data===true){
            alert('修改成功！');
            _this.dialogVisible=false;
          }else{
            alert('修改失败!请检查旧密码是否输入正确')
          }
        }).catch(function (error) {
          alert('修改失败！')
        })
      },
      cancelModify(){
        this.$data.formModifyPassword.newPassword='';
        this.$data.formModifyPassword.oldPassword='';
        this.$data.dialogVisible=false;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped >


  #find{
    width: 10%;
    height: 25%;
    margin: 0;
    position: relative;
    right:0.5%;
  }
  .linkto{
    color: #4096ff;
    text-decoration: none
  }
  body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
  textarea{
    overflow:auto;
    background: transparent;
    color: black;
    border: none;
    resize: none;
    font-weight:lighter;
    margin-bottom:0.3rem;
  }

  .line{
    width: 8.5rem;
    margin-left: 1rem;
    margin-bottom: -2.5rem;
    height: 3.5rem;
  }

  .route{
    float: left;
    position: relative;
    top: 40%;
  }
  #search{
    height: 11%;
    padding-top:3%;
    padding-left: 5%;
    padding-bottom: 0;
  }
  #main{
    float: left;
    height:100%;
    width: 74%;
    margin: 0;
    font-size: 0.21rem;
  }
  #aside{
    float: left;
    height: 15.3rem;
    width: 24%;
    margin: 0;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
  }
  #body{
    height:73.42%;
    width: 100%;
    margin: 0;
  }
  img{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #header{
    height:5rem;
    width: 100%;
    background-color: black;
    margin: 0;
    padding: 0;
  }
  span{
    font-size:0.22rem;
    margin-left: 0.6rem;
  }
  button{
    width: 1.20rem;
    height: 0.25rem;
    text-align: center;
    background: transparent;
    position: relative;
    border-width: 0.01rem;
    border-color: #4096ff;
    color:#4096ff;
    font-size: 0.15rem;
    cursor:pointer;
  }
  button:hover{
    background: white;
    border-width: 0.02rem;
    border-color: #4096ff;
  }
  button:active{
    background: #4096ff;
    border-color: transparent;
    color:white;
  }
  .searchInput{
    font-size:0.16rem;
    padding-left:0.137rem;
  }
</style>

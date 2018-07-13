<template>
  <div id="UseTestStartController">
    <body>
	    <div class="UseTestStartController_Title">开始打造属于你自己的应用</div>
	    <div class="UseTestStartController_Button_Group">
        <router-link to="/Teaching"><div class="UseTestStartController_Button_Left">API文档</div></router-link>
        <div class="UseTestStartController_Button_Center"@click="VerifyAcc">申请接口</div>
        <div class="UseTestStartController_Button_Right"@click="VerifyAcc2">SDK下载</div>
	    </div>
	</body>
  </div>
</template>

<script>
export default {
  name: 'UseTestStartController',
  methods:{
    VerifyAcc(){
      if(this.GLOBAL.token===true){
        this.$router.push('/Controller/ControllerUseList')
      }else{
        this.$router.push('/login')
      }
    },
    VerifyAcc2(){
      if(this.GLOBAL.token===true){
        this.$router.push('/Controller/ControllerSDKDownload')
      }else{
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: url("StartControllerImg/bg.jpg");
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    flex-direction: column;
    font-size: 62.5%;
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
div{
    margin: 0;
    padding: 0;
}

.UseTestStartController_Title{
  font-size: 0.4rem;
  color: white;
  text-align: center;
  margin-top: 2.0rem;
}

.UseTestStartController_Button_Group{
  margin-top: 1.2rem;
  align-self: center;
  height: 2.5rem;
}

.UseTestStartController_Button_Left{
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  width:2.732rem;
  margin-right: 0.3rem;
  font-size: 0.2rem;
  color: white;
  border: solid 0.01rem white;
  display: inline-block;
  cursor:pointer;
}

.UseTestStartController_Button_Center{
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  width:2.732rem;
  margin-right: 0.3rem;
  font-size: 0.2rem;
  color: white;
  border: solid 0.01rem white;
  display: inline-block;
  cursor:pointer;
}

.UseTestStartController_Button_Right{
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  width:2.732rem;
  margin-right: 0.3rem;
  font-size: 0.2rem;
  color: white;
  border: solid 0.01rem white;
  display: inline-block;
  cursor:pointer;
}
</style>

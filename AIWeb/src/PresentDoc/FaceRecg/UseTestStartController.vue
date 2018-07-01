<template>
  <div id="UseTestStartController">
    <body>
	    <div class="UseTestStartController_Title">开始打造属于你自己的应用</div>
	    <div class="UseTestStartController_Button_Group">
	        <div class="UseTestStartController_Button_Left">API文档</div>
	        <div class="UseTestStartController_Button_Center">申请接口</div>
	        <div class="UseTestStartController_Button_Right">SDK下载</div>
	    </div>
	</body>
  </div>
</template>

<script>
export default {
  name: 'UseTestStartController'
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("StartControllerImg/bg.jpg");
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    flex-direction: column;
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
div{
    margin: 0;
    padding: 0;
}

.UseTestStartController_Title{
    font-size: 3vw;
    color: white;
    text-align: center;
    margin-top: 35vh;
}

.UseTestStartController_Button_Group{
    margin-top: 10vh;
    align-self: center;
    height: 30vh;
}

.UseTestStartController_Button_Left{
    text-align: center;
    height: 9vh;
    line-height: 9vh;
    width:20vw;
    margin-right: 4vw;
    font-size: 2vw;
    color: white;
    border: solid 1px white;
    display: inline-block;
    cursor:pointer;
}

.UseTestStartController_Button_Center{
    text-align: center;
    height: 9vh;
    line-height: 9vh;
    width: 20vw;
    font-size: 2vw;
    color: white;
    border: solid 1px white;
    display: inline-block;
    cursor:pointer;
}

.UseTestStartController_Button_Right{
    text-align: center;
    height: 9vh;
    line-height: 9vh;
    width: 20vw;
    margin-left: 4vw;
    font-size: 2vw;
    color: white;
    border: solid 1px white;
    display: inline-block;
    cursor:pointer;
}
</style>
<template>
  <div id="Try">
    <div class="Title">现在，来体验一下吧</div>
    <div class="info">无需注册，在线就可体验所有开放内容，体验人工智能的世界</div>
	<div class="line">
    <router-link to="/Useplace"><div class="btn_coloum">应用场景</div></router-link>
    <router-link to="/Teaching"><div class="btn_coloum">API文档</div></router-link>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Try'
}
</script>

<style scoped>
#Try{
    background:url("./try/bg.jpg");
  background-size: 100% 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-size: 62.5%;
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
div{
    margin: 0;
    padding: 0;
    vertical-align: top;
}

.Title{
    opacity: 0.8;
    margin-top: 0.6rem;
    width: 13.6rem;
    height: 0.6rem;
    font-size: 0.36rem;
    font-weight: 500;
    text-align: center;
    line-height: 0.6rem;
}

.info{
    opacity: 0.8;
    margin-top: 0.15rem;
    width: 13.6rem;
    height: 0.45rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.45rem;
}

.line{
    margin-top: 0.375rem;
    align-self: center;
}

.btn_coloum{
  text-align: center;
  line-height: 1.09rem;
  font-size: 0.24rem;
  font-weight: normal;
  opacity: 0.7;
  width: 3.41rem;
  margin-left: 0.41rem;
  margin-right: 0.41rem;
  height: 1.09rem;
  color:black;
  border: 0.01rem black solid;
  display: inline-block;
  cursor:pointer;
}
</style>

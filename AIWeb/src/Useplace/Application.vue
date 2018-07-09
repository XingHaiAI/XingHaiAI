<template>
    <div id="application">
        <div id="AIhead">
            <img src="../assets/应用场景/banner.jpg" class="background">
            <a id="title">应用场景</a>
            <textarea id="titlecontent" rows="2"cols="40" disabled>在面临人力成本高、服务同质化的现代产业中，深度学习技术能有效地减少人工成本、提高企业竞争力。</textarea>
            <el-button class="button4contact" style="border-color: #060606;border-width: 0.015rem;color:#060606;font-weight: lighter">商务咨询</el-button>
        </div>
        <wisedomPark class="content1"></wisedomPark>
        <usePlace class="content2"></usePlace>
    </div>
</template>

<script>
import usePlace from "./UsePlace.vue"
import wisedomPark from "./WisedomPark.vue"
export default {
    name: 'application',
    components: {
    usePlace,
    wisedomPark
  }
}
</script>

<style scoped>
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
#AIhead{
    width: 100%;
    height: calc(22.08/100*23rem);
    font-size: 62.5%;
}
#ContactUs{
   background-color: blue;
   background-image: url("../assets/联系我们/bg.jpg");
   background-size: 100% 100%;
   width: 13.66rem;
   height: 2.44rem;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
 }
.background {
    width:100%;
    height:100%;
}





button{
    cursor:pointer;
}
textarea{
    border: none;
    resize: none;
    background-color: white;
    color: black;
    height:0.70rem;
    overflow:auto;
    cursor:default;
}
#title{
    position: relative;
    bottom: 70%;
    left: 15%;
    font-size: 0.43rem;
    color: black;
    font-weight: lighter;
}
button{
    width: 2rem;
    height: 0.5rem;
    text-align: center;
    background: transparent;
    position: relative;
    bottom: 45%;
    right: 26.5%;
    border-color: white;
    color:black;
    font-size: 0.2rem;
    font-weight: lighter;
    outline:0 none !important; blr:expression(this.onFocus=this.blur());
}
#titlecontent{
    background: transparent;
    color:black;
    position: relative;
    margin-left:0.2rem;
    font-size: 0.15rem;
    line-height:0.22rem;
    height:0.7rem;
    width:3.50rem;
    bottom: 51%;
    cursor:default;
}
.content1{
    position: relative;
    border: none;
    z-index: 5;
    /*margin-top:15vh;*/
    width: 100%;
    height: 6.5rem;
}
.content2{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 10rem;
}
.content3{
    position: relative;
    border: none;
    z-index: 5;
    width: 13.66rem;
    height: 2rem;
}
</style>

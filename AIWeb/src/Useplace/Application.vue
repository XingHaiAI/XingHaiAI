<template>
	<div id="application">
        <div id="AIhead">
            <img src="../assets/应用场景/banner.jpg" class="background">
            <a id="title">应用场景</a>
            <textarea id="titlecontent" rows="2"cols="40" disabled>在面临人力成本高、服务同质化的现代产业中，深度学习技术能有效地减少人工成本、提高企业竞争力。</textarea>
            <button>商务咨询</button>
        </div>
        <wisedomPark class="content1"></wisedomPark>
		<usePlace class="content2"></usePlace>
        <div id="ContactUs">
            <img src="../assets/联系我们.png" class="background">
        </div>
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

#AIhead{
    width: 100%;
    height: calc(22.08/100*2300px);
}

#ContactUs{
   background-color: blue;
   background-image: url("../assets/联系我们/bg.jpg");
   background-size: 100% 100%;
   width: 100vw;
   height: 35vh;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
 }

.background {
    width:100%;
    height:100%;
}

textarea{
    border: none;
    resize: none;
    background-color: white;
    color: black;
    height:70px;
    overflow:auto;
}

#title{
    position: relative;
    bottom: 70%;
    left: 15%;
    font-size: 40px;
    color: black;
    font-weight: lighter;
}

button{
    width: 200px;
    height: 50px;
    text-align: center;
    background: transparent;
    position: relative;
    bottom: 45%;
    right: 23%;
    border-color: white;
    color:black;
    font-size: 25px;
    font-weight: lighter;
}

#titlecontent{
    background: transparent;
    color:black;
    position: relative;
    left: 3%;
    font-size: 13px;
    height:70px;

    width:350px;
    bottom: 51%;
}

.content1{
    position: relative;
    border: none;
    z-index: 5;
    margin-top:15vh;
    width: 100vw;
    height: 95vh;
}

.content2{
    position: relative;
    border: none;
    z-index: 5;
    width: 100vw;
    height: 140vh;
}

.content3{
    position: relative;
    border: none;
    z-index: 5;
    width: 100vw;
    height: 25vh;
}
</style>
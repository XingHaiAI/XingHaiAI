<template>
  <div id="FaceRecg">
    <UseTestFunctionShow class="content"></UseTestFunctionShow>
    <div style="height: 7.5rem"></div>
    <UseTestStartController class="content2"></UseTestStartController>
    <UseTestUsePlace class="content3"></UseTestUsePlace>
  </div>
</template>

<script>
import UseTestFunctionShow from "./UseTestFunctionShow.vue"
import UseTestStartController from "./UseTestStartController.vue"
import UseTestUsePlace from "./UseTestUsePlace.vue"
export default {
    name: 'FaceRecg',
    components: {
    UseTestUsePlace,
    UseTestStartController,
    UseTestFunctionShow
  }

}
</script>
#FaceRecg{
    margin: 0;
    padding: 0;
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
div{
    margin: 0;
    padding: 0;
}

.content{
    border: none;
    width: 100vw;
    height: 90vh;
}

.content2{
    border: none;
    width: 100vw;
    height: 60vh;
}

.content3{
    border: none;
    width: 100vw;
    height: 100vh;
}

<style scoped>

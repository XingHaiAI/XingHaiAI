<template>
  <div id="PicRecg">
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
    name: 'PicRecg',
    components: {
    UseTestUsePlace,
    UseTestStartController,
    UseTestFunctionShow
  }

}
</script>
#PicRecg{
    margin: 0;
    padding: 0;
}

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

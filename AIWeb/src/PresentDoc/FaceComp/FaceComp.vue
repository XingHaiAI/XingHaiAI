<template>
  <!--人脸检测-->
  <div id="FaceRecg"style="min-width: 13.6rem">
    <UseTestFunctionShow class="content"></UseTestFunctionShow>
    <div style="height: 8.5rem"></div>
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


<style scoped>
</style>

<template>
  <div id="LPR"style="min-width: 13.6rem">
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
    components: {
      UseTestUsePlace,
      UseTestStartController,
      UseTestFunctionShow
    }

  }
</script>


<style scoped>
</style>

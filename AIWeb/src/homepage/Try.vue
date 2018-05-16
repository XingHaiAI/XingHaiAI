<template>
  <div id="Try">
    <div class="Title">现在，来体验一下吧</div>
    <div class="info">无需注册，在线就可体验所有开放内容，体验人工智能的世界</div>
	<div class="line">
	    <div class="btn_coloum">应用场景</div>
	    <div class="btn_coloum">API文档</div>
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
    background-color: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

div{
    margin: 0;
    padding: 0;
    vertical-align: top;
}

.Title{
    opacity: 0.8;
    margin-top: 8vh;
    width: 100vw;
    height: 8vh;
    font-size: 2.5vw;
    font-weight: 500;
    text-align: center;
    line-height: 8vh;
}

.info{
    opacity: 0.8;
    margin-top: 2vh;
    width: 100vw;
    height: 6vh;
    font-size: 1.5vw;
    text-align: center;
    line-height: 6vh;
}

.line{
    margin-top: 5vh;
    align-self: center;
}

.btn_coloum{
    text-align: center;
    line-height: 8vw;
    font-size: 2vw;
    font-weight: 300;
    opacity: 0.7;
    width: 25vw;
    margin-left: 3vw;
    margin-right: 3vw;
    height: 8vw;
    border: 1px black solid;
    display: inline-block;
}
</style>
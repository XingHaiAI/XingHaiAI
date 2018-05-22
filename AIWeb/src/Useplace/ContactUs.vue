<template>
  <div id="ContactUs">
    <div class="word_head">联系我们：欢迎联系，真诚期待与您携手合作！</div>
	<div class="line">
	    <div class="coloum_1">
	        <div class="step_line">
	            <div class="icon_1"></div>
	            <div class="word">深圳市南山区科技园科技南八道豪威科技大厦8B</div>
	        </div>
	        <div class="step_line">
	            <div class="icon_2"></div>
	            <div class="word">wudan1@copm.co.cn</div>
	        </div>
	        <div class="step_line">
	            <div class="icon_3"></div>
	            <div class="word">+866 0755-82896160</div>
	        </div>
	    </div>
	    <div class="coloum_2"></div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
#ContactUs{
    background-color: #383838;
    
    background-size: 100% 100%;
    width: 100vw;
    height: 25vh;
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

.word_head{
    margin-top: 3vh;
    margin-left: -6.5vw;
    text-align: center;
    color: white;
    font-size: 1.5vw;
}

.line{
    align-self: center;
    margin-top: 2vh;
}

.step_line{
    margin-top: 1.5vh;
}

.icon_1{
    background-image: url("contact_us/icon1.png");
    background-size: 100% 100%;
    display: inline-block;
    width: 2.5vh;
    height: 2.5vh;
}

.icon_2{
    background-image: url("contact_us/icon2.png");
    background-size: 100% 100%;
    display: inline-block;
    width: 2.5vh;
    height: 2.5vh;
}

.icon_3{
    background-image: url("contact_us/icon3.png");
    background-size: 100% 100%;
    display: inline-block;
    width: 2.5vh;
    height: 2.5vh;
}

.word{
    display: inline-block;
    text-align: center;
    color: white;
    line-height: 2.5vh;
    font-size: 1.3vw;
}

.coloum_1{
    display: inline-block;
}

.coloum_2{
    margin-left: 3vw;
    background-image: url("contact_us/pic1.jpg");
    background-size: 100% 100%;
    display: inline-block;
    width: 10vh;
    height: 10vh;
}
</style>
<template>
  <div id="AboutUs">
    <div class="Title">兴海物联 关于我们</div>
	<div class="line">
	    <div class="Item_content_coloum">
	        <div class="pic_1"></div>
	        <div class="info">
	            <div class="info_item_title"><p>让生活更便捷</p><p>让物管更智慧</p><p>让建筑更节能</p></div>
	        </div>
	    </div>
	    <div class="Item_content_coloum">
	        <div class="pic_2"></div>
	        <div class="info">
	            <div class="info_item_title"><p>布局全国</p><p>五十余城</p></div>
	        </div>
	    </div>
	    <div class="Item_content_coloum">
	        <div class="pic_3"></div>
	        <div class="info">
	            <div class="info_item_title"><p>合作共赢</p><p>与你同行</p></div>
	        </div>
	    </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
#AboutUs{
    background-color: white;
    margin: 0;
    padding: 0;
    background-image: url("./about_us/bg.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
}
p{
    margin: 0;
}

div{
    margin: 0;
    padding: 0;
    vertical-align: top;
}

.Title{
    opacity: 0.8;
    margin-top: 8vh;
    width: 100%;
    height: 10vh;
    font-size: 3.3vw;
    font-weight: 300;
    text-align: center;
    color: white;
    line-height: 10vh;
}

.pic_1{
    background-image: url("./about_us/pic1.png");
    background-size: 100% 100%;
    width: 100%;
    height: 55%;
}

.pic_2{
    background-image: url("./about_us/pic2.png");
    background-size: 100% 100%;
    width: 100%;
    height: 55%;
}

.pic_3{
    background-image: url("./about_us/pic3.png");
    background-size: 100% 100%;
    width: 100%;
    height: 55%;
}

.info_item_title{
    opacity: 0.8;
    font-weight: 300;
    color: white;
    text-align: center;
    font-size: 1.7vw;
    margin-top: 20%;
}

.info_item_content{
    font-size: 1vw;
    font-weight: 300;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    color: grey;
}

.line{
    align-self: center;
}

.Item_content_coloum {
    margin-top: 8vh;
    width: 13vw;
    height: 30vh;
    display: inline-block;
    margin-left: 8vw;
    margin-right: 8vw;
}
</style>
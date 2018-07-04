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
    height: 5.7rem;
    display: flex;
    flex-direction: column;
    font-size: 62.5%;
}

body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
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
    margin-top: 0.8rem;
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    font-weight: 500;
    text-align: center;
    color: white;
    line-height: 1rem;
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
    font-size: 0.2rem;
    margin-top: 20%;
}

.info_item_content{
    font-size: 0.2rem;
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
    margin-top: 0.8rem;
    width: 1.776rem;
    height: 3rem;
    display: inline-block;
    margin-left: 1.09rem;
    margin-right: 1.09rem;
}
</style>

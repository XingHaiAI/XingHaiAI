<template>
  <div id="UseTestUsePlace">
    <body>
		<div class="UseTestUsePlace_Title">应用场景</div>
		<div class="UseTestUsePlace_Item_Group">
		    <div class="UseTestUsePlace_Item_Group_Item_Left">
		        <div class="UseTestUsePlace_Item_Group_Item_Img_Left"></div>
		        <div class="UseTestUsePlace_Item_Group_Item_Word">
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Title">图片分类标签</div>
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Content">使用场景与物体检测，为图片或视频添加智能分类标签。广泛运用于智能相册、视频结构化处理等场景中</div>
		        </div>
		    </div>
		    <div class="UseTestUsePlace_Item_Group_Item_Right">
		        <div class="UseTestUsePlace_Item_Group_Item_Img_Right"></div>
		        <div class="UseTestUsePlace_Item_Group_Item_Word">
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Title">特定物体检测</div>
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Content">识别并匹配特定物体，并支持定制化需求。适合自动化监控，社交游戏等场景。</div>
		        </div>
		    </div>
		</div>
	</body>
  </div>
</template>

<script>
export default {
  name: 'UseTestUsePlace'
}
</script>

<style scoped>
body{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    font-size: 62.5%;
    background-color: #F2F2F2;
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
div{
    padding: 0;
    margin: 0;
}

.UseTestUsePlace_Title{
    width: 100vw;
    height: 5vh;
    text-align: center;
    font-size: 0.4rem;
    margin-top: 6vh;
}

.UseTestUsePlace_Item_Group{
    vertical-align: top;
    align-self: center;
    margin-top: 10vh;
}

.UseTestUsePlace_Item_Group_Item_Left{
    margin-right: 5vw;
    display: inline-block;
    width: 25vw;
    background-color: white;
    height: 32vw;
    cursor:default;
}

.UseTestUsePlace_Item_Group_Item_Left:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.UseTestUsePlace_Item_Group_Item_Right{
    display: inline-block;
    margin-left: 5vw;
    width: 25vw;
    background-color: white;
    height: 32vw;
    cursor:default;
}

.UseTestUsePlace_Item_Group_Item_Right:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.UseTestUsePlace_Item_Group_Item_Img_Left{
    background-image: url("pic/item_1.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 65%;
}

.UseTestUsePlace_Item_Group_Item_Img_Right{
    background-image: url("pic/item_2.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 65%;
}

.UseTestUsePlace_Item_Group_Item_Word_Title{
    font-size: 0.2rem;
    text-align: center;
    margin-top: 3%;
    height: 9%;
}

.UseTestUsePlace_Item_Group_Item_Word_Content{
    font-size: 0.15rem;
    font-weight: 300;
    height: 17%;
    margin-top: 3%;
    padding-left:4%;
    padding-right:4%;
}
</style>

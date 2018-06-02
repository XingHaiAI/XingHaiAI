<template>
  <div id="UseTestUsePlace">
    <body>
		<div class="UseTestUsePlace_Title">应用场景</div>
		<div class="UseTestUsePlace_Item_Group">
		    <div class="UseTestUsePlace_Item_Group_Item_Left">
		        <div class="UseTestUsePlace_Item_Group_Item_Img_Left"></div>
		        <div class="UseTestUsePlace_Item_Group_Item_Word">
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Title">银行卡识别</div>
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Content">在支付绑卡环节，使用银行卡OCR实现银行卡的拍照自动识别，提升数据录入的准确性和效率，提高用户体验</div>
		        </div>
		    </div>
		    <div class="UseTestUsePlace_Item_Group_Item_Right">
		        <div class="UseTestUsePlace_Item_Group_Item_Img_Right"></div>
		        <div class="UseTestUsePlace_Item_Group_Item_Word">
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Title">身份证识别</div>
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Content">在身份验证场景，应用身份证OCR实现实名身份识别和认证，减少人工录入成本，提高用户体验</div>
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
    background-color: #F2F2F2;
}

div{
    padding: 0;
    margin: 0;
}

.UseTestUsePlace_Title{
    width: 100vw;
    height: 5vh;
    text-align: center;
    font-size: 2vw;
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
    width: 30vw;
    background-color: white;
    height: 40vw;
}



.UseTestUsePlace_Item_Group_Item_Right{
    display: inline-block;
    margin-left: 5vw;
    width: 30vw;
    background-color: white;
    height: 40vw;
}

.UseTestUsePlace_Item_Group_Item_Img_Left{
    background-image: url("word/item_1.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 70%;
}

.UseTestUsePlace_Item_Group_Item_Img_Right{
    background-image: url("word/item_2.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 70%;
}

.UseTestUsePlace_Item_Group_Item_Word_Title{
    font-size: 1.6vw;
    text-align: center;
    margin-top: 1%;
    height: 9%;
}

.UseTestUsePlace_Item_Group_Item_Word_Content{
    font-size: 1.5vw;
    font-weight: 300;
    height: 17%;
    margin-top: 3%;
}
</style>
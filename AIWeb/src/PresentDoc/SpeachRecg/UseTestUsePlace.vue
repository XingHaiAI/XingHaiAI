<template>
  <div id="UseTestUsePlace">
    <body>
		<div class="UseTestUsePlace_Title">应用场景</div>
		<div class="UseTestUsePlace_Item_Group">
		    <div class="UseTestUsePlace_Item_Group_Item_Left">
		        <div class="UseTestUsePlace_Item_Group_Item_Img_Left"></div>
		        <div class="UseTestUsePlace_Item_Group_Item_Word">
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Title">语音输入法</div>
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Content">摆脱生僻字和拼音障碍，将所输入文字，直接用语音的方式输入，让输入法更加便捷</div>
		        </div>
		    </div>
		    <div class="UseTestUsePlace_Item_Group_Item_Right">
		        <div class="UseTestUsePlace_Item_Group_Item_Img_Right"></div>
		        <div class="UseTestUsePlace_Item_Group_Item_Word">
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Title">语音搜索</div>
		            <div class="UseTestUsePlace_Item_Group_Item_Word_Content">搜索内容直接以语音的方式输入，让搜索更加高效</div>
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
    background-image: url("voice/item_1.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 70%;
}

.UseTestUsePlace_Item_Group_Item_Img_Right{
    background-image: url("voice/item_2.jpg");
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
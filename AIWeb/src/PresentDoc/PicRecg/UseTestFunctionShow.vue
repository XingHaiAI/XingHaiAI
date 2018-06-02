<template>
  <div id="UseTestFunctionShow">
  	<body>
   		<div class="UseTestFunctionShow_Title">功能演示</div>
		<div class="UseTestFunctionShow_Group">

		    <div class="UseTestFunctionShow_Left_Group">

		        <div class="UseTestFunctionShow_Left_Group_Top">
		            <div class="UseTestFunctionShow_Left_Group_Top_Content"></div>
		        </div>

		        <div class="UseTestFunctionShow_Left_Group_Center">
		            <div class="UseTestFunctionShow_Left_Group_Center_Left"><p><</p></div>
		            <div class="UseTestFunctionShow_Left_Group_Center_Center"></div>
		            <div class="UseTestFunctionShow_Left_Group_Center_Right"><p>></p></div>
		        </div>

		        <div class="UseTestFunctionShow_Left_Group_Bottom">
		            <div class="UseTestFunctionShow_Left_Group_Bottom_Left"><p>本地上传</p></div>
		            <div class="UseTestFunctionShow_Left_Group_Bottom_Center"><p>语音URL</p></div>
		            <div class="UseTestFunctionShow_Left_Group_Bottom_Right"><p>检测</p></div>
		        </div>

		    </div>

		    <div class="UseTestFunctionShow_Right_Group">
		        <div class="UseTestFunctionShow_Right_Group_Top">
		            <div class="UseTestFunctionShow_Right_Group_Top_Left">分析结果</div>
		            <div class="UseTestFunctionShow_Right_Group_Top_Right">JSON</div>
		        </div>
		        <div class="UseTestFunctionShow_Right_Group_Bottom">
		        </div>
		    </div>
		</div>
	</body>
  </div>
</template>

<script>
export default {
  name: 'UseTestFunctionShow'
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

p{
    width: 100%;
    text-align: center;
    align-self: center;
}

.UseTestFunctionShow_Title{
    width: 100vw;
    height: 5vh;
    text-align: center;
    font-size: 2vw;
    margin-top: 6vh;
}

.UseTestFunctionShow_Group{
    margin-top: 3vh;
    height: 75vh;
    align-self: center;
}

.UseTestFunctionShow_Left_Group{
    display: inline-block;
    width: 35vw;
    height: 75vh;
    margin-right: 5vw;
}

.UseTestFunctionShow_Left_Group_Top_Content{
    margin-left: 11%;
    width: 78%;
    height: 50%;
    background-color: white;
}
.UseTestFunctionShow_Left_Group_Center{
    margin-top: 1%;
    margin-bottom: 1%;
}

.UseTestFunctionShow_Left_Group_Center_Left{
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 4vw;
    width: 10%;
    height: 28%;
    float: left;
    background-color: #BDBDBD;
}

.UseTestFunctionShow_Left_Group_Center_Center{
    width: 78%;
    margin-left: 1%;
    margin-right: 1%;
    height: 28%;
    float: left;
    background-color: white;
}

.UseTestFunctionShow_Left_Group_Center_Right{
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 4vw;
    width: 10%;
    height: 28%;
    float: left;
    background-color: #BDBDBD;
}

.UseTestFunctionShow_Left_Group_Bottom{
    width: 100%;
    margin-top: 5%;
}

.UseTestFunctionShow_Left_Group_Bottom_Left{
    margin-top: 6%;
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    float: left;
    width: 30%;
    height: 8%;
    margin-left: 11%;
}

.UseTestFunctionShow_Left_Group_Bottom_Center{
    margin-top: 6%;
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    width: 46%;
    float: left;
    height: 8%;
    margin-left: 1%;
}

.UseTestFunctionShow_Left_Group_Bottom_Right{
    margin-top: 6%;
    display: flex;
    flex-direction: column;
    float: left;
    height: 8%;
    margin-left: 1%;
}

.UseTestFunctionShow_Right_Group{
    display: inline-block;
    width: 35vw;
    height: 75vh;
    margin-left: 5vw;
}

.UseTestFunctionShow_Right_Group_Top{
    width: 100%;
}

.UseTestFunctionShow_Right_Group_Top_Left{
    margin-left: 11%;
    float: left;
    line-height: 4vh;
    text-align: center;
    width: 18%;
    height: 4vh;
    border: 1px black solid;
    background-color: white;
}

.UseTestFunctionShow_Right_Group_Top_Right{
    text-align: center;
    float: left;
    line-height: 4vh;
    width: 18%;
    height: 4vh;
    border: 1px black solid;
    background-color: white;
}

.UseTestFunctionShow_Right_Group_Bottom{
    width: 78%;
    margin-left: 11%;
    border: 1px black solid;
    height: 86%;
    background-color: white;
    float: left;
}
</style>


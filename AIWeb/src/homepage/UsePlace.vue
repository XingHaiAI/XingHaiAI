<template>
  <div id="UsePlace">
    <div class="head_line">
	    <div class="pic_left"></div>
	    <div class="Title">使用场景</div>
	    <div class="pic_right"></div>
	</div>
	<div class="line">
	    <div class="step_line_center_control">
	        <div class="Item_content_coloum">
	            <div class="pic_1"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">公安视频监控</div>
	                    <div class="info_item_content">针对中远距离的人脸监控识别，整合人脸识别、人体识别、实时监控等功能，为刑侦人员提供快速准确的取证手段</div>
	                </div>
	            </div>
	        </div>

	        <div class="Item_content_coloum">
	            <div class="pic_2"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">人流量统计</div>
	                    <div class="info_item_content">利用人体检测技术，你的应用能够轻松识别出图像或视频中人体并计数，从而在零售商业、机场或学校等场所进行基于人体的人流量或到场率统计</div>
	                </div>
	            </div>
	        </div>

	        <div class="Item_content_coloum">
	            <div class="pic_3"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">远程实名认证</div>
	                    <div class="info_item_content">识别客户上传的身份证信息，并进行证件图片真实性鉴别，用于远程身份核实、信息绑定场景。已经被互联网金融、电商等行业广泛采用</div>
	                </div>
	            </div>
	        </div>


	        <div class="Item_content_coloum">
	            <div class="pic_4"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">人脸解锁</div>
	                    <div class="info_item_content">运用人脸比对技术，您的应用能够比对实拍照片与底图，核验用户身份。这被广泛应用于打造刷脸登录或远程核身功能中。</div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	<div class="line">
	    <div class="step_line_center_control">
	        <div class="Item_content_coloum">
	            <div class="pic_5"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">相机美化</div>
	                    <div class="info_item_content">基于五官及轮廓关键点识别，对人脸特定位置进行修饰加工，实现人脸的特效美颜、特效相机、贴片等互动娱乐功能</div>
	                </div>
	            </div>
	        </div>

	        <div class="Item_content_coloum">
	            <div class="pic_6"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">驾驶员监控系统</div>
	                    <div class="info_item_content">基于人脸检测、疲惫检测、注意力检测，兼顾了安全、驾驶辅助</div>
	                </div>
	            </div>
	        </div>

	        <div class="Item_content_coloum">

	            <div class="pic_7"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">舆情监控</div>
	                    <div class="info_item_content">通过对需要舆情监控的实时文字数据流进行情感倾向性分析，把握用户对热点信息的情感倾向性变化</div>
	                </div>
	            </div>
	        </div>


	        <div class="Item_content_coloum">

	            <div class="pic_8"></div>
	            <div class="info">
	                <div>
	                    <div class="info_item_title">智能客服</div>
	                    <div class="info_item_content">集成知识问答接口，可准确回答各知识领域的专业问题。拒绝生硬回答，提升用户体验</div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'UsePlace'
}
</script>

<style scoped>

div{
    margin: 0;
    padding: 0;
    vertical-align: top;
}

#UsePlace{
    background-color: #F2F2F2;
    margin: 0;
    padding: 0;
}

.Title{
    padding-top: 6vh;
    width: 100%;
    height: 10vh;
    font-size: 2.5vw;
    font-weight: 500;
    text-align: center;
    line-height: 10vh;
}

.pic_1{
    background-image: url("use_place/pic1.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}

.pic_2{
    background-image: url("use_place/pic2.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}

.pic_3{
    background-image: url("use_place/pic3.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}

.pic_4{
    background-image: url("use_place/pic4.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}
.pic_5{
    background-image: url("use_place/pic5.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}

.pic_6{
    background-image: url("use_place/pic6.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}

.pic_7{
    background-image: url("use_place/pic7.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}

.pic_8{
    background-image: url("use_place/pic8.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 60%;
}
.info_item_title{
    font-size: 0.9vw;
    font-weight: 600;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    color: black;
}

.info_item_content{
    font-size: 0.8vw;
    font-weight: 300;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    color: grey;
}

.line{
    display: flex;
    flex-direction: column;
    margin-top: 1vw;
    height: 40vh;
}

.step_line_center_control{
    align-self: center;
    display:flex;
    justify-content:center;
}


.Item_content_coloum {
    margin-left: 2vw;
    margin-right: 2vw;
    background-color: white;
    width: 240px;
    height: 40vh;
    display: inline-block;
}

.Item_content_coloum:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
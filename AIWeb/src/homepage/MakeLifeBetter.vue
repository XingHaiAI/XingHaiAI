<template>
  <div id="MakeLifeBetter" class="MLBdiv">
    <div class="MLBTitle MLBdiv">兴海物联 让生活更美好</div>

    <div class="MLBinfo_show_group MLBdiv">
        <div class="MLBinfo_item MLBdiv" id="info_item1"  v-on:mouseover="changeBGto1() ">
            <div class="MLBinfo_pic MLBpic1 MLBdiv"></div>
            <div class="MLBinfo_title MLBdiv">人脸识别</div>
        </div>
        <div class="MLBinfo_item MLBdiv" id="info_item2" v-on:mouseover="changeBGto2()">
            <div class="MLBinfo_pic MLBpic2 MLBdiv"></div>
            <div class="MLBinfo_title MLBdiv">证件识别</div>
        </div>
        <div class="MLBinfo_item MLBdiv" id="info_item3"  v-on:mouseover="changeBGto3()">
            <div class="MLBinfo_pic MLBpic3 MLBdiv"></div>
            <div class="MLBinfo_title MLBdiv">语音识别</div>
        </div>
        <div class="MLBinfo_item MLBdiv" id="info_item4"  v-on:mouseover="changeBGto4()">
            <div class="MLBinfo_pic MLBpic4 MLBdiv"></div>
            <div class="MLBinfo_title MLBdiv">智能客服</div>
        </div>
    </div>
    <div id="info_show_content" :is="currentTabComponent"></div>
    </div>
</template>

<script>
const card_detect= {
    template:`
        <div class="info_show_content_2">
            <div class="step_info_item">
                <div class="step_info_pic step_pic2_1"></div>
                <div class="step_info_title">身份证识别</div>
                <div class="step_info_content">识别二代身份证上正反面文字并返回结构化数据，可用于区分复印件、屏幕翻拍、合成图片等。</div>
            </div>
            <div class="step_info_item">
                <div class="step_info_pic step_pic2_2"></div>
                <div class="step_info_title">银行卡识别</div>
                <div class="step_info_content">识别各类的银行卡主页正面的文字并返回结构化数据。</div>
            </div>
            <div class="step_info_item">
                <div class="step_info_pic step_pic2_3"></div>
                <div class="step_info_title">驾驶证识别</div>
                <div class="step_info_content">识别机动车驾驶证主页正面的文字并返回结构化数据，用于各类驾驶证验证场景。</div>
            </div>
            <div class="step_info_item">
                <div class="step_info_pic step_pic2_4"></div>
                <div class="step_info_title">行驶证识别</div>
                <div class="step_info_content">识别机动车行驶证主页正面的文字并返回结构化数据，用于各类行驶证验证场景。</div>
            </div>
        </div>
        `
}
const face_detect={
    template:`
        <div class="info_show_content_1">
            <div class="step_info_item">
                <div class="step_info_pic step_pic1_1"></div>
                <div class="step_info_title">人脸检测</div>
                <div class="step_info_content">检测图片或视频流中的人脸并返回人脸框坐标。支持储存检测到的人脸数据，用于后续人脸比对、人脸搜索等高级功能。</div>
            </div>
            <div class="step_info_item">
                <div class="step_info_pic step_pic1_2"></div>
                <div class="step_info_title">人脸对比</div>
                <div class="step_info_content">精准判断两张人脸是否是同一个人，并返回置信度分数和相应的阈值，以便评估相似度。可定制更贴合各场景的解决方案。</div>
            </div>
            <div class="step_info_item">
                <div class="step_info_pic step_pic1_3"></div>
                <div class="step_info_title">人脸查找</div>
                <div class="step_info_content">在预置的人脸集合中搜索相似的人脸。通过人脸搜索可确认人员身份，目前已广泛用于人脸门禁、安防监控等场景。</div>
            </div>
        </div>
        `
}

const sound_detect= {
    template:`
        <div class="info_show_content_3">
            <div class="step_info_item">
                <div class="step_info_pic step_pic3_1"></div>
                <div class="step_info_title">语音识别</div>
                <div class="step_info_content">提供近场、远场、长语音等多场景高精度语音识别服务。</div>
            </div>
            <div class="step_info_item">
                <div class="step_info_pic step_pic3_2"></div>
                <div class="step_info_title">语音合成</div>
                <div class="step_info_content">语音合成服务，将文本转换为可以播放的mp3文件。</div>
            </div>
        </div>
        `
}
const smart_server={
    template:`
       <div class="info_show_content_4">
            <div class="step_info_item">
                <div class="step_info_pic step_pic4_1"></div>
                <div class="step_info_title">智能客服</div>
                <div class="step_info_content">领先的产品、技术、服务优势，由表及里打造的智能电话机器人服务，助力您的业务高效运转。</div>
            </div>
        </div>
        `
}
var currentTabComponent;
export default {
  name: 'MakeLifeBetter',
  data: function () {
  return {
    currentTabComponent:face_detect,
    //frame:document.getElementById("frame")
  }
},
  methods: {
        changeBGto1:function(){
            //info_show_content.className="info_show_content_1";
            this.currentTabComponent=face_detect;
            //frame.src="./face_detect.html";
        },
        changeBGto2:function(){
            //info_show_content.className="info_show_content_2";
            this.currentTabComponent=card_detect;
            //frame.src="./card_detect.html";
        },
        changeBGto3:function(){
            //info_show_content.className="info_show_content_3";
            this.currentTabComponent=sound_detect;
            //frame.src="./sound_detect.html";
        },
        changeBGto4:function(){
            //info_show_content.className="info_show_content_4";
            this.currentTabComponent=smart_server;
            //frame.src="./smart_server.html";
        }
    }
}

</script>

<style>
#MakeLifeBetter{
    margin: 0;
    padding: 0;
    font-size: 62.5%;
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
MLBdiv{
    margin: 0;
    padding: 0;
    vertical-align: top;
}
p{
    text-align: center;
}


.MLBTitle{
    margin-top: 0.6rem;
    width: 100%;
    height: 1.0rem;
    font-size: 0.4rem;
    font-weight: 500;
    color:black;
    text-align: center;
    line-height: 0.6rem;
}

.MLBinfo_pic{
    width: 1.5rem;
    height: 1.1rem;
    margin-left: 0.48rem;
}

.MLBinfo_title{
    margin-top: 0.11rem;
    font-size: 0.18rem;
    text-align: center;
    width: 2.46rem;
}

.MLBinfo_show_group{
    margin-top: 0.3rem;
    height: 2rem;
}

.MLBinfo_item{
    display: inline-block;
    margin-left: 1.1rem;
    width: 2.05rem;
    height: 1.91rem;
}
.MLBpic1{
    background-image: url("make_life_pretty/main/pic1.png");
    background-size: 100% 100%;
    background-position: center;
}

.MLBpic2{
    background-image: url("make_life_pretty/main/pic2.png");
    background-size: 100% 100%;
    background-position: center;
}

.MLBpic3{
    background-image: url("make_life_pretty/main/pic3.png");
    background-size: 100% 100%;
    background-position: center;
}

.MLBpic4{
    background-image: url("make_life_pretty/main/pic4.png");
    background-size: 100% 100%;
    background-position: center;
}

.info_show_content_1{
    opacity: 0.8;
    display: flex;
    justify-content:center;
    margin-top: 0.5rem;
    background-image: url("make_life_pretty/content/item1/bg/bg.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 5rem;
}

.info_show_content_2{
    opacity: 0.8;
    display: flex;
    justify-content:center;
    margin-top: 0.5rem;
    background-image: url("make_life_pretty/content/item2/bg/bg.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 5rem;
}
.info_show_content_3{
    opacity: 0.8;
    display: flex;
    justify-content:center;
    margin-top: 0.5rem;
    background-image: url("make_life_pretty/content/item3/bg/bg.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 5rem;
}
.info_show_content_4{
    opacity: 0.8;
    display: flex;
    justify-content:center;
    margin-top: 0.5rem;
    background-image: url("make_life_pretty/content/item4/bg/bg.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 5rem;
}

.step_info_show_group{
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 0.4rem;
    width: 100%;
    border: none;
    height: 2.5rem;
}

.step_info_show_step_group{
    display:flex;
    justify-content:center;
}

.step_info_pic{
    width: 1.5rem;
    height: 1.1rem;
    margin-left: 0.546rem;
}

.step_info_content{
    color: white;
    font-size: 0.14rem;
}

.step_info_title{
    color: white;
    margin-top: 0.082rem;
    font-size: 0.18rem;
    text-align: center;
    width: 2.6rem;
}

.step_info_item{
    vertical-align: top;
    margin-left: 0.273rem;
    margin-right: 0.273rem;
    padding-top:1.5rem;
    display: inline-block;
    width: 2.6rem;
    height: 2.32rem;
}

.step_pic1_1{
    background-image: url("make_life_pretty/content/item1/step_item/pic1.png");
    background-size: 100% 100%;
    background-position: center;
}

.step_pic1_2{
    background-image: url("make_life_pretty/content/item1/step_item/pic2.png");
    background-size: 100% 100%;
    background-position: center;
}

.step_pic1_3{
    background-image: url("make_life_pretty/content/item1/step_item/pic3.png");
    background-size: 100% 100%;
    background-position: center;
}


.step_pic2_1{
    background-image: url("make_life_pretty/content/item2/step_item/pic1.png");
    background-size: 100% 100%;
    background-position: center;
}

.step_pic2_2{
    background-image: url("make_life_pretty/content/item2/step_item/pic2.png");
    background-size: 100% 100%;
    background-position: center;
}

.step_pic2_3{
    background-image: url("make_life_pretty/content/item2/step_item/pic3.png");
    background-size: 100% 100%;
    background-position: center;
}


.step_pic2_4{
    background-image: url("make_life_pretty/content/item2/step_item/pic4.png");
    background-size: 100% 100%;
    background-position: center;
}

.step_pic3_1{
    background-image: url("make_life_pretty/content/item3/step_item/pic1.png");
    background-size: 100% 100%;
    background-position: center;
}


.step_pic3_2{
    background-image: url("make_life_pretty/content/item3/step_item/pic2.png");
    background-size: 100% 100%;
    background-position: center;
}
.step_pic4_1{
     background-image: url("make_life_pretty/content/item4/step_item/pic1.png");
     background-size: 100% 100%;
     background-position: center;
 }
</style>

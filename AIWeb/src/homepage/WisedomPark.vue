<template>
  <div id="WisedomPark">
    <div class="Title">智慧园区</div>

    <div class="content_group">
        <div class="item pic1">
            <div class="word">人脸闸机</div>
            <div class="info_show">
                <div class="info_show_item_title">人脸闸机</div>
                <div class="info_show_item_content"><p>针对闸机及门禁场景，提供</p><p>行业定制的全流程解决方案</p></div>
            </div>
        </div>
        <div class="item pic2">
            <div class="word">人型识别</div>
            <div class="info_show">
                <div class="info_show_item_title">人型识别</div>
                <div class="info_show_item_content"><p>识别图片中的人，并在视频中</p><p>跟踪，加大小区的安全系数。</p></div>
            </div>
        </div>
        <div class="item pic3">
            <div class="word">车牌识别</div>
            <div class="info_show">
                <div class="info_show_item_title">车牌识别</div>
                <div class="info_show_item_content"><p>自动识别车牌号码，实现无卡</p><p>无人的停车场管理，方便快捷。</p></div>
            </div>
        </div>
        <div class="item pic4">
            <div class="word">车型识别</div>
            <div class="info_show">
                <div class="info_show_item_title">车型识别</div>
                <div class="info_show_item_content"><p>在摄像头中加入车型车牌识别</p><p>对黑名单车辆进行自动识别，实现自动化的违章审计</p></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WisedomPark'
}
</script>

<style scoped>
#WisedomPark{
    background-color: white;
    margin: 0;
    padding: 0;
}

div{
    margin: 0;
    padding: 0;
    vertical-align: top;
}

p{
    margin: 0;
}

.Title{
    margin-top: 7vh;
    width: 100vw;
    height: 10vh;
    font-size: 2.5vw;
    font-weight: 500;
    text-align: center;
    line-height: 10vh;
}

.content_group{
    margin-top:2vh;
    background-color: green;
    width: 100vw;
    height: 66vh;
}

.item{
    display: flex;
    position: relative;
    width: 25vw;
    float: left;
    background-color: red;
    height: 66vh;
}
.pic1{
    background-image: url("wisdom_park/pic1.jpg");
    background-size: 100% 100%;
    background-position: center;
}
.pic2{
    background-image: url("wisdom_park/pic2.jpg");
    background-size: 100% 100%;
    background-position: center;
}
.pic3{
    background-image: url("wisdom_park/pic3.jpg");
    background-size: 100% 100%;
    background-position: center;
}
.pic4{
    background-image: url("wisdom_park/pic4.jpg");
    background-size: 100% 100%;
    background-position: center;
}

.word{
    align-self: center;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 3vw;
}

.info_show{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: blue;
    height: 0;
    font-size: 1vw;
    color: transparent;
}

.info_show_item_title{
    margin-top: 20%;
    font-size: 3vw;
    align-self: center;
    text-align: center;
}

.info_show_item_content{
    font-size: 1.5vw;
    width: 100%;
    text-align: center;
}


@keyframes info_show_ani {
    to {height: 100%}
    to{color: white}
}

.item:hover .info_show{
    animation: info_show_ani 0.6s forwards;
}

</style>
<template>
  <div id="WisedomPark">
    <div class="Title">智慧园区</div>

    <div class="content_group">
        <div class="item pic1" @mouseover="infoPop" @mouseleave="back" id="id1">
            <transition-group name="slide">
                <div class="word" v-show="!show1" key="title1">人脸闸机</div>
                <div class="info_show" v-show="show1" key="info1">
                    <div class="info_show_item_title">人脸闸机</div>
                    <div class="info_show_item_content"><p>针对闸机及门禁场景，提供</p><p>行业定制的全流程解决方案</p></div>
                </div>
            </transition-group>
        </div>
        <div class="item pic2" @mouseover="infoPop"  @mouseleave="back" id="id2">
            <transition-group name="slide">
                <div class="word" v-show="!show2" key="title2">人型识别</div>
                <div class="info_show" v-show="show2" key="info2">
                    <div class="info_show_item_title">人型识别</div>
                    <div class="info_show_item_content"><p>识别图片中的人，并在视频中</p><p>跟踪，加大小区的安全系数。</p></div>
                </div>
            </transition-group>
        </div>
        <div class="item pic3" @mouseover="infoPop"  @mouseleave="back" id="id3">
            <transition-group name="slide">
                <div class="word" v-show="!show3" key="title3">车牌识别</div>
                <div class="info_show" v-show="show3" key="info3">
                    <div class="info_show_item_title">车牌识别</div>
                    <div class="info_show_item_content"><p>自动识别车牌号码，实现无卡</p><p>无人的停车场管理，方便快捷。</p></div>
                </div>
            </transition-group>
        </div>
        <div class="item pic4" @mouseover="infoPop"  @mouseleave="back" id="id4">
            <transition-group name="slide">
                <div class="word" v-show="!show4" key="title4">车型识别</div>
                <div class="info_show" v-show="show4" key="info4">
                    <div class="info_show_item_title">车型识别</div>
                    <div class="info_show_item_content"><p>在摄像头中加入车型车牌识别</p><p>对黑名单车辆进行自动识别，实现自动化的违章审计</p></div>
                </div>
            </transition-group>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'WisedomPark',
    data:  function (){
        return{
            show1:false,
            show2:false,
            show3:false,
            show4:false
        }
    },
    methods: {
        infoPop(event) {
            var el=event.currentTarget
            if(el.id=='id1')
                this.show1=true
            else if(el.id=='id2')
                this.show2=true
            else if(el.id=='id3')
                this.show3=true
            else if(el.id=='id4')
                this.show4=true
        },
        back(){
            this.show1=false
            this.show2=false
            this.show3=false
            this.show4=false
        }
    }
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

.slide-enter-active{
    transform:translateY(0);
    transition:all 0.7s ease;
}

.slide-leave-active{
    transform:translateY(200%);
    transition:all 1s ease;
}

.slide-enter{
    transform:translateY(100%);
}

.slide-leave{
    transform:translateY(0);
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
    margin-bottom:0;
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
    height:100%;
    width: 25vw;
    display:flex;
    justify-content:center;
    align-items:center;
    color: white;
    font-size: 3vw;
}

.info_show{
    position: absolute;
    bottom:0;
    width: 100%;
    color:white;
    background-color: rgba(112,112,112,0.75);
    height:100%;
    
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


</style>
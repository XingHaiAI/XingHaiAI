<template>
  <div id="PictureRotation">
    <div class="carousel-wrap" id="carousel">
        <transition-group tag="ul" class='slide-ul' name="image">
          <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
            <a :href="list.clickUrl" >
              <img :src="list.image" :alt="list.desc" height="100%" weight="100%">
            </a>
          </li>
        </transition-group>
        <div class="carousel-items">
          <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'PictureRotation',
  data:  function (){
    return{
        slideList: [
         {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": require("./pic_rotate/index_pic1.jpg")
            },
            {
                "clickUrl": "#",
                "desc": "hxrj",
                "image": require("./pic_rotate/index_pic2.jpg")
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": require("./pic_rotate/index_pic3.jpg")
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": require("./pic_rotate/index_pic4.jpg")
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": require("./pic_rotate/index_pic5.jpg")
            }
    ],
    currentIndex: 0,
    timer: ''
    }
    },
    methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    }

}
</script>

<style scoped>

div{
    margin: 0;
    padding: 0;
}


#PictureRotation{
    height: 70vh;
    width:100vw;
    margin: 0;
    padding:0;
    list-style: none;
}

.image-enter-active{
    transform:translateX(0);
    transition:all 1s ease;
}

.image-leave-active{
    transform:translateX(-100%);
    transition:all 1s ease;
}

.image-enter{
    transform:translateX(100%);
}

.image-leave{
    transform:translateX(0);
}

img{
    height:70vh;
    width:100vw;
    display: inline-block;
}
.slide-ul,li,img {
    margin: 0;
    padding: 0;
    list-style: none;
}
.carousel-wrap {
  position: relative;
  height: 453px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;

}

li {
    position: absolute;
    width: 100%;
    height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 420px;
  width: 100%;
  height:7vh;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

span {
    display: inline-block;
    height: 0.7vh;
    width: 2vw;
    margin: 0 1vh;
    background-color: white;
    cursor: pointer;
}
.active {
    background-color: grey;
  }
</style>
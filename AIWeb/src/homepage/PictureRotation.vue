<template>
  <div id="PictureRotation">
    <div class="lunbo">
        <div class="imgGroup">
            <div class="img1"/>
            <div class="img2"/>
            <div class="img3"/>
            <div class="img4"/>
            <div class="img5"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PictureRotation'
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
}

.lunbo{
    height: 70vh;
    width:100vw;
    overflow-x: hidden;
    overflow: hidden;
}

.imgGroup{
    animation: ma 15s ease-out forwards infinite;
    width: 500vw;
    height: 70vh;
    white-space: nowrap;
    font-size:0px;
}
.img1,.img2,.img3,.img4,.img5{
    display: inline-block;
}
.img1{
    background-image: url("pic_rotate/index_pic1.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100vw;
    height: 70vh;
}

.img2{
    background-image: url("pic_rotate/index_pic2.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100vw;
    height: 70vh;
}

.img3{
    background-image: url("pic_rotate/index_pic3.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100vw;
    height: 70vh;
}

.img4{
    background-image: url("pic_rotate/index_pic4.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100vw;
    height: 70vh;
}

.img5{
    background-image: url("pic_rotate/index_pic5.jpg");
    background-size: 100% 100%;
    background-position: center;
    width: 100vw;
    height: 70vh;
}

@keyframes ma {
    0%,15% {        margin-left: 0vw;       }
    20%,35% {       margin-left: -100vw;    }
    40%,55% {       margin-left: -200vw;    }
    60%,75% {       margin-left: -300vw;    }
    80%,95% {       margin-left: -400vw;    }
}
</style>
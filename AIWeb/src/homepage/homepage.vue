<template>
	<div id="homepage">
        <pictureRotation class="content"></pictureRotation>
		<makeLifeBetter class="content2"></makeLifeBetter>
        <wisedomPark class="content3"></wisedomPark>
		<usePlace class="content4"></usePlace>
        <aboutUs class="content5"></aboutUs>
        <Try class="content6"></Try>

	</div>
</template>

<script>
import pictureRotation from "./PictureRotation.vue"
import makeLifeBetter from "./MakeLifeBetter.vue"
import usePlace from "./UsePlace.vue"
import aboutUs from "./AboutUs.vue"
import wisedomPark from "./WisedomPark.vue"
import Try from "./Try.vue"
export default {
    name: 'homepage',
    components: {
    pictureRotation,
    makeLifeBetter,
    usePlace,
    aboutUs,
    wisedomPark,
    Try
  }

}
</script>

<style scoped>
#homepage{
    width:100%;
    min-width: 13.6rem;
    /*width:expression(document.body.clientWidth < 900? "900px":"auto" );*/
}
body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
#ContactUs{
   background-color: blue;
   background-image: url("../assets/联系我们/bg.jpg");
   background-size: 100% 100%;
   width: 100%;
   height: 2.44rem;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
 }
.content{
    margin-top: -0.6rem;
    padding:0;
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 6.7rem;
    min-width: 9rem;
    /*width:expression(document.body.clientWidth < 900? "900px":"auto" );*/
}

.content2{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 8rem;
}

.content3{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 6.5rem;
}

.content4{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 10rem;
}

.content5{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 6rem;
}

.content6{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 4rem;
}
.background{
  height:3.5rem;
  width:100%;
}
</style>

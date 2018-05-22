<template>
	<div id="homepage">
        <pictureRotation class="content"></pictureRotation>
		<makeLifeBetter class="content2"></makeLifeBetter>
        <wisedomPark class="content3"></wisedomPark>
		<usePlace class="content4"></usePlace>
        <aboutUs class="content5"></aboutUs>
        <Try class="content6"></Try>
        <contactUs class="content7"></contactUs>
	</div>
</template>

<script>
import pictureRotation from "./PictureRotation.vue"
import makeLifeBetter from "./MakeLifeBetter.vue"
import usePlace from "./UsePlace.vue"
import aboutUs from "./AboutUs.vue"
import wisedomPark from "./WisedomPark.vue"
import Try from "./Try.vue"
import contactUs from "./ContactUs.vue"
export default {
    name: 'homepage',
    components: {
    pictureRotation,
    makeLifeBetter,
    usePlace,
    aboutUs,
    wisedomPark,
    Try,
    contactUs
  }

}
</script>

<style scoped>
#homepage{
    width:100%;
    min-width: 900px;
    width:expression(document.body.clientWidth < 900? "900px":"auto" );
}
.content{
    margin-top: -8vh;
    padding:0;
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 90vh;
    min-width: 900px;
    width:expression(document.body.clientWidth < 900? "900px":"auto" );
}

.content2{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 100vh;
}

.content3{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 76vh;
}

.content4{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 110vh;
}

.content5{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 65vh;
}

.content6{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 60vh;
}

.content7{
    position: relative;
    border: none;
    z-index: 5;
    width: 100%;
    height: 25vh;
}
</style>
<template>
  <div class="blog_bg" style="min-width: 13.6rem">
    <div class="head_content1">
    </div>
    <div class="blog_menu" style="display: flex;min-height:10rem;">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-menu
              :default-active="activeTab"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              style="text-align: left;width:3.2rem;position: absolute;top:0;bottom: 0;box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);">
              <el-menu-item index="1" style="height: 0.7rem;margin-top:0.6rem;">

                <span slot="title" style="font-size: 0.32rem;margin-left: 0.55rem;">全部类别</span>
              </el-menu-item>
              <el-menu-item index="2" style="height: 0.6rem">

                <span slot="title" style="font-size: 0.22rem;margin-left: 0.6rem">产品更新</span>
              </el-menu-item>
              <el-menu-item index="3" style="height: 0.6rem">

                <span slot="title" style="font-size: 0.22rem;margin-left: 0.6rem">服务公告</span>
              </el-menu-item>
              <el-menu-item index="4" style="height: 0.6rem">

                <span slot="title" style="font-size: 0.22rem;margin-left: 0.6rem">优惠服务</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="height: 0.2rem;"></div>
          <div v-if="activeTab==='1'" class="animated bounceInRight" style="width: 8rem;margin-left: 4.2rem">
            <div v-if="total4All!==0">
              <el-card style="width: 100%;margin-top: 0.3rem;" v-for="(item,index) in blogAll" :key="index">
                <div style="background-color: bisque">
                  <span style="font-size:0.24rem;font-weight: bold;float: left;max-width: 6.7rem" class="name"><i class="el-icon-caret-right" style="color: cornflowerblue;"/> {{item.logtitle}}</span>
                  <span style="float:right;font-size:0.12rem;"><a style="color: darkgray;text-align: center;float: right;font-size: 0.15rem"><i class="el-icon-tickets"/>{{item.logtype}}</a></span>
                </div>
                <div style="height: 0.6rem"></div>
                <div class="texts4blogUpdate" style="padding: 0.1rem" >
                  <span style="margin-left: 0.22rem;font-size: 0.16rem;color: darkgray">{{item.brief}}</span>
                </div>
                <el-collapse-transition>
                  <div style="padding: 0.1rem" v-show="item.ashow">
                    <!--<p style="font-size: 0.2rem">具体内容</p>-->
                    <div style="height: 0.15rem"></div>
                    <p style="font-size: 0.16rem;float:left;margin-left: 0.25rem">{{item.logcontent}}</p>
                  </div>
                </el-collapse-transition>
                <div style="position: relative;margin-bottom:5%;margin-top: 2%;" >
                  <div style="height: 0.2rem"></div>
                  <span style="float: left;font-size: 0.15rem;margin-left: 0.32rem;margin-top: 0.05rem">发布于{{item.time}}</span>
                  <el-button type="text"   @click="item.ashow=!item.ashow" style="font-size: 0.15rem;float: right">{{item.ashow?'收起详情':'查看详情'}}</el-button>
                </div>
              </el-card>
              <div class="pageDiv">
                <div class="block">
                  <el-pagination
                    :current-page="page4All"
                    @current-change="blogAllChange"
                    layout="prev, pager, next"
                    :total="total4All">
                  </el-pagination>
                </div>
              </div>
            </div>
            <div v-else style="font-size: 0.16rem;text-align: center">暂无更新信息哦~</div>
          </div>
          <div v-if="activeTab==='2'" class="animated bounceInRight" style="width: 8rem;margin-left: 4.2rem">
            <div v-if="total4Update!==0">
              <el-card style="width: 100%;margin-top: 0.3rem;" v-for="(item,index) in blogUpdate" :key="index">
                <div style="background-color: bisque">
                  <span style="font-size:0.24rem;font-weight: bold;float: left;max-width: 6.7rem" class="name"><i class="el-icon-bell" style="color: cornflowerblue;"/> {{item.logtitle}}</span>
                  <span style="float:right;font-size:0.12rem;"><a style="color: darkgray;text-align: center;float: right;font-size: 0.15rem"><i class="el-icon-tickets"/>{{item.logtype}}</a></span>
                </div>
                <div style="height: 0.6rem"></div>
                <div class="texts4blogUpdate" style="padding: 0.1rem">
                  <span style="margin-left: 0.22rem;font-size: 0.16rem;color: darkgray">{{item.brief}}</span>
                </div>
                <el-collapse-transition>
                  <div style="padding: 0.1rem" v-show="item.ashow">
                    <!--<p style="font-size: 0.2rem">具体内容</p>-->
                    <div style="height: 0.15rem"></div>
                    <p style="font-size: 0.16rem;float:left;margin-left: 0.25rem">{{item.logcontent}}</p>
                  </div>
                </el-collapse-transition>
                <div style="position: relative;margin-bottom:5%;margin-top: 2%;" >
                  <div style="height: 0.2rem"></div>
                  <span style="float: left;font-size: 0.15rem;margin-left: 0.32rem;margin-top: 0.05rem">发布于{{item.time}}</span>
                  <el-button type="text"   @click="item.ashow=!item.ashow" style="font-size: 0.15rem;float: right">{{item.ashow?'收起详情':'查看详情'}}</el-button>
                </div>
              </el-card>
              <div class="pageDiv">
                <div class="block">
                  <el-pagination
                    :current-page="page4Update"
                    @current-change="blogUpdateChange"
                    layout="prev, pager, next"
                    :total="total4Update">
                  </el-pagination>
                </div>
              </div>
            </div>
            <div v-else style="font-size: 0.16rem;text-align: center">暂无更新信息哦~</div>
          </div>
          <div v-if="activeTab==='3'" class="animated bounceInRight" style="width: 8rem;margin-left: 4.2rem">
            <div v-if="total4Service!==0">
              <el-card style="width: 100%;margin-top: 0.3rem;" v-for="(item,index) in blogService" :key="index">
                <div style="background-color: bisque">
                  <span style="font-size:0.24rem;font-weight: bold;float: left;max-width: 6.7rem" class="name"><i class="el-icon-goods" style="color: cornflowerblue;"/> {{item.logtitle}}</span>
                  <span style="float:right;font-size:0.12rem;"><a style="color: darkgray;text-align: center;float: right;font-size: 0.15rem"><i class="el-icon-tickets"/>{{item.logtype}}</a></span>
                </div>
                <div style="height: 0.6rem"></div>
                <div class="texts4blogUpdate" style="padding: 0.1rem" >
                  <span style="margin-left: 0.22rem;font-size: 0.16rem;color: darkgray">{{item.brief}}</span>
                </div>
                <el-collapse-transition>
                  <div style="padding: 0.1rem" v-show="item.ashow">
                    <!--<p style="font-size: 0.2rem">具体内容</p>-->
                    <div style="height: 0.15rem"></div>
                    <p style="font-size: 0.16rem;float:left;margin-left: 0.25rem">{{item.logcontent}}</p>
                  </div>
                </el-collapse-transition>
                <div style="position: relative;margin-bottom:5%;margin-top: 2%;" >
                  <div style="height: 0.2rem"></div>
                  <span style="float: left;font-size: 0.16rem">发布于{{item.time}}</span>
                  <el-button type="text"   @click="item.ashow=!item.ashow" style="font-size: 0.15rem;float: right">{{item.ashow?'收起详情':'查看详情'}}</el-button>
                </div>
              </el-card>
              <div class="pageDiv">
                <div class="block">
                  <el-pagination
                    :current-page="page4Service"
                    @current-change="blogServiceChange"
                    layout="prev, pager, next"
                    :total="total4Service">
                  </el-pagination>
                </div>
              </div>
            </div>
            <div v-else style="font-size: 0.16rem;text-align: center">暂无更新信息哦~</div>
          </div>
          <div v-if="activeTab==='4'" class="animated bounceInRight" style="width: 8rem;margin-left: 4.2rem">
            <div v-if="total4Discount!==0">
              <el-card style="width: 100%;margin-top: 0.3rem;" v-for="(item,index) in blogDiscount" :key="index">
                <div style="background-color: bisque">
                  <span style="font-size:0.24rem;font-weight: bold;float: left;max-width: 6.7rem" class="name"><i class="el-icon-bell" style="color: cornflowerblue;"/> {{item.logtitle}}</span>
                  <span style="float:right;font-size:0.12rem;"><a style="color: darkgray;text-align: center;float: right;font-size: 0.15rem"><i class="el-icon-tickets"/>{{item.logtype}}</a></span>
                </div>
                <div style="height: 0.6rem"></div>
                <div class="texts4blogUpdate" style="padding: 0.1rem" >
                  <span style="margin-left: 0.22rem;font-size: 0.16rem;color: darkgray">{{item.brief}}</span>
                </div>
                <el-collapse-transition>
                  <div style="padding: 0.1rem" v-show="item.ashow">
                    <!--<p style="font-size: 0.2rem">具体内容</p>-->
                    <div style="height: 0.15rem"></div>
                    <p style="font-size: 0.16rem;float:left;margin-left: 0.25rem">{{item.logcontent}}</p>
                  </div>
                </el-collapse-transition>
                <div style="position: relative;margin-bottom:5%;margin-top: 2%;" >
                  <div style="height: 0.2rem"></div>
                  <span style="float: left;font-size: 0.16rem">发布于{{item.time}}</span>
                  <el-button type="text"   @click="item.ashow=!item.ashow" style="font-size: 0.15rem;float: right">{{item.ashow?'收起详情':'查看详情'}}</el-button>
                </div>
              </el-card>
              <div class="pageDiv">
                <div class="block">
                  <el-pagination
                    :current-page="page4Discount"
                    @current-change="blogDiscountChange"
                    layout="prev, pager, next"
                    :total="total4Discount">
                  </el-pagination>
                </div>
              </div>
            </div>
            <div v-else style="font-size: 0.16rem;text-align: center">暂无更新信息哦~</div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>

</template>
<script>
  export default {
    name: 'ContactUs',
    data(){
      return{
        activeTab:'1',
        total4All:0,
        page4All:1,
        blogAll:[{
          logtitle:'语音视频的API更新',
          logtype:'服务公告',
          brief:'授权时长可灵活延长',
          logcontent:'具体内容内容内容',
          ashow:false,
          time:'2015-01-15'
        }
        ],
        total4Update:0,
        page4Update:0,
        blogUpdate:[{
          logtitle:'语音视频的API更新',
          logtype:'产品更新',
          brief:'授权时长可灵活延长',
          logcontent:'具体内容内容内容',
          ashow:false,
          time:'2015-01-15'
        },{
          time:'2015-01-15',
          logtitle:'语音视频的API更新',
          logtype:'产品更新',
          brief:'授权时长可灵活延长',
          logcontent:'具体内容内容内容',
          ashow:false
        }
        ],
        total4Service:0,
        page4Service:0,
        blogService:[
          {
            logtitle:'语音视频的API更新',
            logtype:'服务公告',
            brief:'授权时长可灵活延长',
            logcontent:'具体内容内容内容',
            ashow:false,
            time:'2015-01-15'
          },
          {
            logtitle:'语音视频的API更新',
            logtype:'服务公告',
            brief:'授权时长可灵活延长',
            logcontent:'具体内容内容内容',
            ashow:false,
            time:'2015-01-15'
          }
        ],
        total4Discount:0,
        page4Discount:0,
        blogDiscount:[
          {
            logtitle:'语音视频的API更新',
            logtype:'优惠服务',
            brief:'授权时长可灵活延长',
            logcontent:'具体内容内容内容',
            ashow:false,
            time:'2015-01-15'
          },

        ],

      }
    },
    methods:{
      handleSelect(index){
        this.$data.activeTab=index;
      },

      /**
       * 点击不同页数时重新请求页面内容
       */
      blogAllChange(){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/blog/get',
          params:{
            type:'4',
            page:this.$data.page4All
          }
        }).then(function (response) {
          for(let index=0;index<response.data.logcontents.length;index++){
            response.data.logcontents[index].ashow=false;
            if(response.data.logcontents[index].logtype==='1'){
              response.data.logcontents[index].logtype='产品更新'
            }else if(response.data.logcontents[index].logtype==='2'){
              response.data.logcontents[index].logtype='服务公告'
            }else{
              response.data.logcontents[index].logtype='优惠信息'
            }
          }
          _this.$data.blogAll=response.data.logcontents;
          // _this.$data.page4All=response.data.part;
          _this.$data.total4All=response.data.all;
        })
      },
      blogUpdateChange(){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/blog/get',
          params:{
            type:'1',
            page:this.$data.page4Update
          }
        }).then(function (response) {
          for(let index=0;index<response.data.logcontents.length;index++){
            response.data.logcontents[index].ashow=false;
            response.data.logcontents[index].logtype='产品更新'
          }
          _this.$data.blogUpdate=response.data.logcontents
          _this.$data.total4Update=response.data.all;
          // _this.$data.page4Update=response.data.part;
        })
      },
      blogServiceChange(){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/blog/get',
          params:{
            type:'2',
            page:this.$data.page4Service
          }
        }).then(function (response) {
          for(let index=0;index<response.data.logcontents.length;index++){
            response.data.logcontents[index].ashow=false;
            response.data.logcontents[index].logtype='服务公告'
          }
          _this.$data.blogService=response.data.logcontents
          _this.$data.total4Service=response.data.all;
          // _this.$data.page4Service=response.data.part;
        })
      },
      blogDiscountChange(){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/blog/get',
          params:{
            type:'3',
            page:this.$data.page4Discount
          }
        }).then(function (response) {
          for(let index=0;index<response.data.logcontents.length;index++){
            response.data.logcontents[index].ashow=false;
            response.data.logcontents[index].logtype='产品更新'
          }
          _this.$data.blogDiscount=response.data.logcontents
          _this.$data.total4Discount=response.data.all;
          _this.$data.page4Discount=response.data.part;
        })
      }
    },
    created(){

      let _this=this;

      /**
       * get请求获取全部类型的产品博客
       */
      this.$axios({
        method:'get',
        url:'/blog/get',
        params:{
          page:'1',
          type:'4'
        }
      }).then(function (response) {
        for(let index=0;index<response.data.logcontents.length;index++){
          response.data.logcontents[index].ashow=false;
          if(response.data.logcontents[index].logtype==='1'){
            response.data.logcontents[index].logtype='产品更新'
          }else if(response.data.logcontents[index].logtype==='2'){
            response.data.logcontents[index].logtype='服务公告'
          }else{
            response.data.logcontents[index].logtype='优惠信息'
          }
        }
        _this.$data.blogAll=response.data.logcontents;
        _this.$data.page4All=response.data.part;
        _this.$data.total4All=response.data.all;
      })


      /**
       * get请求获取全部产品更新的信息
       */
      this.$axios({
        method:'get',
        url:'/blog/get',
        params:{
          type:'1',
          page:'1'
        }
      }).then(function (response) {
        for(let index=0;index<response.data.logcontents.length;index++){
          response.data.logcontents[index].ashow=false;
          response.data.logcontents[index].logtype='产品更新'
        }
        _this.$data.blogUpdate=response.data.logcontents
        _this.$data.total4Update=response.data.all;
        _this.$data.page4Update=response.data.part;
      })


      /**
       * get请求获取全部服务公告
       */
      this.$axios({
        method:'get',
        url:'/blog/get',
        params:{
          type:'2',
          page:'1'
        }
      }).then(function (response) {
        for(let index=0;index<response.data.logcontents.length;index++){
          response.data.logcontents[index].ashow=false;
          response.data.logcontents[index].logtype='服务公告'
        }
        _this.$data.blogService=response.data.logcontents
        _this.$data.total4Service=response.data.all;
        _this.$data.page4Service=response.data.part;
      })


      /**
       * get请求获取所有优惠信息
       */
      this.$axios({
        method:'get',
        url:'/blog/get',
        params:{
          type:'3',
          page:'1'
        }
      }).then(function (response) {
        for(let index=0;index<response.data.logcontents.length;index++){
          response.data.logcontents[index].ashow=false;
          response.data.logcontents[index].logtype='产品更新'
        }
        _this.$data.blogDiscount=response.data.logcontents
        _this.$data.total4Discount=response.data.all;
        _this.$data.page4Discount=response.data.part;
      })

    }
  }
</script>

<style scoped>

  .head_content1{
    background-image: url("../assets/产品博客/pic.png");
    width: 100%;
    padding-top:3rem;
    background-size: 100% 3rem;
    background-repeat: no-repeat;
    min-width: 12rem;
  }

  /*.head_content1 .title{*/
  /*font-size: 3vw;*/
  /*color: white;*/
  /*margin-top: 7vh;*/
  /*margin-left: 12vw;*/
  /*}*/
  /*.head_content1 .logcontent{*/
  /*font-size: 1.2vw;*/
  /*color: white;*/
  /*margin-left: 12vw;*/
  /*width: 40vw;*/
  /*margin-top: 5vh;*/
  /*}*/
  /*.link_group{*/
  /*float: left;*/
  /*width: 25vw;*/
  /*height: 180vh;*/
  /*background-color: #f6faff;*/
  /*box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.19);*/
  /*}*/
  /*.from_group{*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*width: 75vw;*/
  /*height: 180vh;*/
  /*}*/
  /*.blogUpdate{*/
  /*margin-top:6vh;*/
  /*margin-bottom:3vh;*/
  /*margin-left:6vw;*/
  /*width:58vw;*/
  /*height:30vh;*/
  /*box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);*/
  /*cursor:default;*/
  /*}*/
  /*.bolg_title{*/
  /*margin-top:3vh;*/
  /*margin-bottom:1.5vh;*/
  /*margin-left:1vw;*/
  /*font-size:0.23rem;*/
  /*letter-spacing:0.03rem;*/
  /*}*/
  /*.icon{*/
  /*margin-right:1.2vw;*/
  /*}*/
  /*.blogUpdate_info{*/
  /*margin-top:10px;*/
  /*margin-bottom:10px;*/
  /*height:20px;*/
  /*}*/
  /*.time{*/
  /*font-size:0.15rem;*/
  /*color:grey;*/
  /*margin-top:0;*/
  /*margin-left:3vw;*/
  /*}*/
  /*.tip{*/
  /*font-size:0.15rem;*/
  /*color:red;*/
  /*margin-left:3vw;*/
  /*}*/
  /*.outline{*/
  /*margin-top:3vh;*/
  /*margin-left:3vw;*/
  /*font-size:0.15rem;*/
  /*color:  #303030;*/
  /*font-weight:300;*/
  /*}*/
  /*.read_more{*/
  /*margin-top:4vh;*/
  /*margin-left:3vw;*/
  /*font-size:0.15rem;*/
  /*color:#3399FF;*/
  /*letter-spacing:0.02rem;*/
  /*cursor:pointer;*/
  /*}*/
  /*.decorate_bar{*/
  /*margin-top: 5vh;*/
  /*margin-left:10.3vw;*/
  /*height: 4vh;*/
  /*display: inline-block;*/
  /*width: 0.2vw;*/
  /*background-color: white;*/
  /*}*/
  /*.decorate_bar_on{*/
  /*margin-top: 5vh;*/
  /*margin-left:10.3vw;*/
  /*height: 4vh;*/
  /*display: inline-block;*/
  /*width: 0.3vw;*/
  /*background-color: blue;*/
  /*}*/
  /*.link_group .title .word{*/
  /*line-height: 3.5vh;*/
  /*display: inline-block;*/
  /*font-size: 1.8vw;*/
  /*font-weight: 900;*/
  /*margin-top: 10vh;*/
  /*margin-left:8vw;*/
  /*}*/

  /*.link_content{*/
  /*text-align: left;*/
  /*}*/
  /*.link_content .content{*/
  /*margin-left: 7.1vw;*/
  /*}*/
  /*.link_content .word{*/
  /*margin-top: 2vh;*/
  /*margin-bottom: 2vh;*/
  /*margin-left: -1vw;*/
  /*font-size: 1vw;*/
  /*font-weight: 300;*/
  /*}*/
  /*.item_group .word{*/
  /*float: left;*/
  /*line-height: 6vh;*/
  /*margin-left: 0.8vw;*/
  /*}*/
  /*.options{*/
  /*font-size: 1.5vw;*/
  /*font-weight: 300;*/
  /*margin-left:8vw;*/
  /*display:inline-block;*/
  /*cursor:pointer;*/
  /*}*/
  /*.icon_1{*/
  /*width: 2vw;*/
  /*height: 4vh;*/
  /*margin-right:0.5vw;*/
  /*float: left;*/
  /*background-image: url("../assets/pic/icon1.png");*/
  /*background-size: 100% 100%;*/
  /*background-position: center;*/
  /*}*/
  /*.icon_2{*/
  /*width: 2vw;*/
  /*height: 4vh;*/
  /*margin-right:0.5vw;*/
  /*float: left;*/
  /*background-image: url("../assets/pic/icon2.png");*/
  /*background-size: 100% 100%;*/
  /*background-position: center;*/
  /*}*/
  /*.icon_3{*/
  /*width: 2vw;*/
  /*height: 4vh;*/
  /*margin-right:0.5vw;*/
  /*float: left;*/
  /*background-image: url("../assets/pic/icon3.png");*/
  /*background-size: 100% 100%;*/
  /*background-position: center;*/
  /*}*/
  /*.content{*/
  /*width: 100vw;*/
  /*height: 29.5vh;*/
  /*border: none;*/
  /*}*/
  /*.background{*/
  /*height:100%;*/
  /*width:100%;*/
  /*}*/

</style>

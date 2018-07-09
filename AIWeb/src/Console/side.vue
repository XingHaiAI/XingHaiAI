<template>
    <div id="aside">
      <el-row class="tac">
        <el-col :span="12" style="width:inherit">
          <el-menu
            :default-active="activeTabs"
            class="el-menu-vertical-demo"
            style="margin-top:1rem;"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1" style="text-align: center;min-height:0.6rem">
              <template slot="title">
                <span>功能</span>
              </template>
              <el-menu-item index="1-1" class="teach" popper-append-to-body="true"><router-link to="/Console/Speach" style="text-decoration: none;color: black">语言处理</router-link></el-menu-item>
              <el-menu-item index="1-2" class="teach"popper-append-to-body="true"><router-link to="/Console/WordRec" style="text-decoration: none;color: black">文字识别</router-link></el-menu-item>
              <el-menu-item index="1-3" class="teach"popper-append-to-body="true"><router-link to="/Console/FaceRec" style="text-decoration: none;color: black">人脸识别</router-link></el-menu-item>
              <el-menu-item index="1-4" class="teach"popper-append-to-body="true"><router-link to="/Console/PicRec" style="text-decoration: none;color: black">图像识别</router-link></el-menu-item>
              <el-menu-item index="1-5" class="teach"popper-append-to-body="true"><router-link to="/Console/NPL" style="text-decoration: none;color: black">自然语言处理</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="2" style="text-align: center;min-height:0.6rem">
               <span slot="title" >
                 <router-link to="/Console/APPList" style="text-decoration: none;color: black">应用列表</router-link>
               </span>
            </el-menu-item>
            <el-menu-item index="3" style="text-align: center;min-height:0.6rem">
               <span slot="title" >
                 <router-link to="" style="text-decoration: none;color: black">监控报表</router-link>
               </span>
            </el-menu-item>
            <el-menu-item index="4" style="text-align: center;min-height:0.6rem">
               <span slot="title">
                 <router-link to="/Console/SDK" style="text-decoration: none;color: black">SDK下载</router-link>
               </span>
            </el-menu-item>
            <el-submenu index="5" style="text-align: center;min-height:0.6rem">
              <template slot="title">
                <span>财务中心</span>
              </template>
              <el-menu-item index="5-1" class="teach" popper-append-to-body="true">账户余额</el-menu-item>
              <el-menu-item index="5-2" class="teach"popper-append-to-body="true">我的订单</el-menu-item>
            </el-submenu>
            <el-menu-item index="6" style="text-align: center;min-height:0.6rem">
               <span slot="title" >
                 <router-link to="" style="text-decoration: none;color: black">账号信息</router-link>
               </span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col>
          <div style="width: 100%"></div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Try',
    data() {
      return {
        isCollapse: true,
        activeTabs:'1'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(index){
        this.$data.activeTabs=index;
      }
    }
}
</script>

<style scoped>
  body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
  .tac{
    height: 100%;
    width: 100%;
  }
  #aside{
    float: left;
    height: 100%;
    width: 26%;
    margin: 0;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
  }
  .el-menu-vertical-demo{
  height:15.0rem;
}
span{
  font-size:0.22rem;
}
</style>

<template>
  <div id="UseTestFunctionShow">
    <div style="height: 0.5rem;"></div>
    <div style="width: 100%;height: 1rem;text-align: center">
      <span style="font-size: 0.4rem;">功能演示</span>
    </div>
    <div style="width: 100%">
      <el-card style="width: 37.041%;height:7rem;float: left;margin-left: 1rem;">
          <div class="photoDisplay" style="width: 94%;height:40%;margin-left: auto;margin-right: auto;margin-top:0.2rem;">
            <span style="font-size: 0.2rem;text-align: left">选择图片：</span>
            <div style="height: 0.05rem"></div>
           <el-card style="text-align: center">
            <img :src="imgURLSelect"/>
           </el-card>
          </div>
        <div class="example" style="margin-top: 0.3rem;width: 94%;margin-left: auto;margin-right: auto">
          <span style="font-size: 0.2rem;">图片示例：</span>
        </div>
          <div class="photoSelect" style="width: 94%;height: 27%;margin-left: auto;margin-right: auto;overflow-x: scroll;overflow-y: hidden;overflow-wrap: normal;white-space: nowrap;">
            <div style="height: 0.1rem;"></div>
            <el-row :gutter="20" style="width: 4.8rem;">
              <el-col style="width:2.3rem" v-for="(item,index) in image" :key="index">
                <el-card style="width: 2.1rem;">
                <img :src="item.src" @click='selectPhoto(item)' style="width: 100%;"/>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div style="height: 0.2rem;"></div>
          <div style="height: 15%;width: 100%;">
            <el-row>
              <el-col>
                <div style="width: 100%">
                  <el-input class="input11" placeholder="请输入图片的URL" v-model="inputUrl" style="width: 60%;float: left"></el-input>
                  <el-button style="margin-left: 0.2rem">检测图片</el-button>
                </div>
                <div style="height: 0.2rem"></div>
                <div style="float: left">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChange"
                    :file-list="fileList3">
                    <el-button size="small" type="primary">本地上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
                  </el-upload>
                </div>
              </el-col>
            </el-row>
          </div>
      </el-card>
      <div style="width: 37.041%;float: right;margin-right: 2rem">
        <el-tabs type="border-card">
          <el-tab-pane label="分析结果">

          </el-tab-pane>
          <el-tab-pane label="JSON">

          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>



export default {
  name: 'UseTestFunctionShow',
  data(){
    return{
      inputUrl:'',
      imgURL:'',
      imgURLSelect:require('./image/视频主播身份认证.png'),
      image:[
        {src:require('./image/视频主播身份认证.png')},
        {src:require('./image/远程身份认证.png')},
      ],
      test:{
        image:'dafafkjke213nfnjdnonon12onoi421n4o',
        userCode: '13688980285'
      }
    }
  },
  methods:{
    selectPhoto(item){
      this.$data.imgURLSelect=item.src;


      this.$axios({
        headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin":"*"
        },
        method:'post',
        url:'http://47.94.242.44/feature/get_encoding',
        data:{
          'image':'dafafkjke213nfnjdnonon12onoi421n4o',
          'userCode':'13688980285'
        }
      }).then(function (response) {
        alert('111');
      })

    },
  },

}
</script>

<style lang="less">

</style>


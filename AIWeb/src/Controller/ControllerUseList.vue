<template>
  <body id="all"style="min-width: 13.6rem">
  <div id="header">
    <img src="../assets/控制台/banner.png">
  </div>
  <div id="body">
    <div id="aside">
      <el-row class="tac">
        <el-col :span="12" style="width:inherit">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1" style="text-align: left;margin-top:0.5rem;min-height:0.6rem">
              <template slot="title">
                <span>功能</span>
              </template>
              <el-menu-item index="2-1" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerSpeachAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">语音处理</router-link></el-menu-item>
              <el-menu-item index="2-2" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerWordAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">文字识别</router-link></el-menu-item>
              <el-menu-item index="2-3" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerFaceAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">人脸识别</router-link></el-menu-item>
              <el-menu-item index="2-4" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerPictureAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">图像识别</router-link></el-menu-item>
              <el-menu-item index="2-5" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerNPLAPI" style="text-decoration: none;color: black;margin-left: 0.6rem;">自然语言处理</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="2"style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerUseList" style="text-decoration: none;color: black;">应用列表</router-link></span>
            </el-menu-item>
            <el-menu-item index="4" style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerSDKDownload" style="text-decoration: none;color: black;">SDK下载</router-link></span>
            </el-menu-item>
            <el-submenu index="5" style="text-align: left;min-height:0.6rem">
              <template slot="title">
                <span>财务中心</span>
              </template>
              <el-menu-item index="1-1" class="teach" popper-append-to-body="true"><router-link to="/Controller/ControllerMoneyLeft" style="text-decoration: none;color: black;margin-left: 0.6rem;">账户余额</router-link></el-menu-item>
              <el-menu-item index="1-2" class="teach"popper-append-to-body="true"><router-link to="/Controller/ControllerOrderList" style="text-decoration: none;color: black;margin-left: 0.6rem;">我的订单</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="4" style="text-align: left;min-height:0.6rem">
              <span slot="title"><router-link to="/Controller/ControllerInfo" style="text-decoration: none;color: black;">账号信息</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div id="main">
      <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false" title="新建API" style="width: 17rem">
        <el-form :model="formChoose" :ref="formChoose" :rules="rulesChoose">
          <el-form-item style="width: 50%" label="应用名称：">
            <el-input v-model="formChoose.name" style="width: 70%;"></el-input>
          </el-form-item>
          <el-form-item label="付费选择：">
            <el-select v-model="formChoose">
              <!--<el-option value="1" label="付费"></el-option>-->
              <el-option value="2" label="免费"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span style="font-size: 0.25rem;font-weight: bold;margin-left: 0.03rem">接口选择：</span>
        <div style="height: 0.1rem"></div>
        <el-card>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">自然语言处理</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group v-model="formTypes.languages">
              <el-checkbox label="语义相似度" value="1"></el-checkbox>
              <el-checkbox label="短文本相似度" value="2"></el-checkbox>
              <el-checkbox label="评论观点提取" value="3"></el-checkbox>
              <el-checkbox label="情感倾向分析" value="4"></el-checkbox>
              <el-checkbox label="AI客服" value="5"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem;">语音识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group v-model="formTypes.languages">
              <el-checkbox label="语音识别" value="6"></el-checkbox>
              <el-checkbox label="语音合成" value="7"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">人脸识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group v-model="formTypes.languages">
              <el-checkbox label="人脸识别" value="8"></el-checkbox>
              <el-checkbox label="人脸对比" value="9"></el-checkbox>
              <el-checkbox label="人脸查找" value="10"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">文字识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group v-model="formTypes.languages">
              <el-checkbox label="通用文字识别" value="11"></el-checkbox>
              <el-checkbox label="手写识别" value="12"></el-checkbox>
              <el-checkbox label="身份证识别" value="13"></el-checkbox>
              <el-checkbox label="银行卡识别" value="14"></el-checkbox>
              <el-checkbox label="车牌识别" value="15"></el-checkbox>
              <el-checkbox label="驾驶证识别" value="16"></el-checkbox>
              <el-checkbox label="行驶证识别" value="17"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">图像识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group v-model="formTypes.languages">
              <el-checkbox label="通用图像分析" value="18"></el-checkbox>
              <el-checkbox label="去模糊化" value="19"></el-checkbox>
              <el-checkbox label="人像识别" value="20"></el-checkbox>
              <el-checkbox label="车型识别" value="21"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-card>
        <div style="height: 0.1rem;"></div>
        <span style="margin-left: 0.05rem">应用平台</span>
          <div style="height: 0.1rem"></div>
          <div>
            <el-checkbox-group v-model="formTypes.platform">
              <el-checkbox label="ANDROID" value="1"></el-checkbox>
              <el-checkbox label="IOS" value="2"></el-checkbox>
              <el-checkbox label="WINDOWS" value="3"></el-checkbox>
              <el-checkbox label="HTML5" value="4"></el-checkbox>
              <el-checkbox label="JAVA" value="5"></el-checkbox>
              <el-checkbox label="FLASH" value="6"></el-checkbox>
              <el-checkbox label="LINUX" value="7"></el-checkbox>
            </el-checkbox-group>
          </div>
        <div style="height: 0.1rem;"></div>
        <span  style="margin-left: 0.05rem">应用描述</span>
          <el-input type="textarea" :rows="8" v-model="description"></el-input>
        <div style="height: 0.15rem"></div>
        <div style="width: 100%;text-align: center">
          <el-button type="primary" @click="ConfirmAPI">确定</el-button>
          <el-button type="danger" @click="CancelAPI">取消</el-button>
        </div>
      </el-dialog>
      <el-dialog class="index1" :visible.sync="dialogVisible1" :modal-append-to-body="false" title="查看API" style="width: 17rem">
        <el-form >
          <el-form-item style="width: 50%" label="应用名称：">
            <el-input disabled v-model="APIName" style="width: 70%;"></el-input>
          </el-form-item>
          <el-form-item label="付费选择：">
            <el-select disabled v-model="formChoose">
              <!--<el-option value="1" label="付费"></el-option>-->
              <el-option value="2" label="免费"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span style="font-size: 0.25rem;font-weight: bold;margin-left: 0.03rem">接口选择：</span>
        <div style="height: 0.1rem"></div>
        <el-card>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">自然语言处理</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group disabled v-model="types">
              <el-checkbox label="语义相似度" value="1"></el-checkbox>
              <el-checkbox label="短文本相似度" value="2"></el-checkbox>
              <el-checkbox label="评论观点提取" value="3"></el-checkbox>
              <el-checkbox label="情感倾向分析" value="4"></el-checkbox>
              <el-checkbox label="AI客服" value="5"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem;">语音识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group disabled v-model="types">
              <el-checkbox label="语音识别" value="6"></el-checkbox>
              <el-checkbox label="语音合成" value="7"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">人脸识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group disabled  v-model="types">
              <el-checkbox label="人脸识别" value="8"></el-checkbox>
              <el-checkbox label="人脸对比" value="9"></el-checkbox>
              <el-checkbox label="人脸查找" value="10"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">文字识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group disabled v-model="types">
              <el-checkbox label="通用文字识别" value="11"></el-checkbox>
              <el-checkbox label="手写识别" value="12"></el-checkbox>
              <el-checkbox label="身份证识别" value="13"></el-checkbox>
              <el-checkbox label="银行卡识别" value="14"></el-checkbox>
              <el-checkbox label="车牌识别" value="15"></el-checkbox>
              <el-checkbox label="驾驶证识别" value="16"></el-checkbox>
              <el-checkbox label="行驶证识别" value="17"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="height: 0.1rem"></div>
          <span style="font-size: 0.18rem;margin-left: 0.05rem">图像识别</span>
          <div style="margin-top: 0.1rem">
            <el-checkbox-group disabled v-model="types">
              <el-checkbox label="通用图像分析" value="18"></el-checkbox>
              <el-checkbox label="去模糊化" value="19"></el-checkbox>
              <el-checkbox label="人像识别" value="20"></el-checkbox>
              <el-checkbox label="车型识别" value="21"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-card>
        <div style="height: 0.1rem;"></div>
        <span style="margin-left: 0.05rem">应用平台</span>
        <div style="height: 0.1rem"></div>
        <div>
          <el-checkbox-group disabled v-model="platform">
            <el-checkbox label="ANDROID" value="1"></el-checkbox>
            <el-checkbox label="IOS" value="2"></el-checkbox>
            <el-checkbox label="WINDOWS" value="3"></el-checkbox>
            <el-checkbox label="HTML5" value="4"></el-checkbox>
            <el-checkbox label="JAVA" value="5"></el-checkbox>
            <el-checkbox label="FLASH" value="6"></el-checkbox>
            <el-checkbox label="LINUX" value="7"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div style="height: 0.1rem;"></div>
        <span  style="margin-left: 0.05rem">应用描述</span>
        <el-input type="textarea" disabled :rows="8" v-model="APIdescription"></el-input>
        <div style="height: 0.15rem"></div>
        <div style="width: 100%;text-align: center">

          <el-button type="danger" @click="dialogVisible1=false">关闭</el-button>
        </div>
      </el-dialog>
      <div id="search">
        <p class="route"><router-link to="" class="linkto">控制台</router-link>&gt应用列表></p>
      </div>
      <div class="line">
        <div class="line_pic"></div>
        <el-button type="primary" class="bg_btn" id="find" @click="CreateAPI">创建API KEY</el-button>
      </div>
      <div class="table">
        <el-table v-bind:data="manifests" highlight-current-row border height="500">
          <el-table-column prop="name" label="应用名称"></el-table-column>
          <el-table-column prop="apikey" label="API KEY"></el-table-column>
          <el-table-column prop="apipassword" label="API密码"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="ForMore(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="deleteAPI(scope.row)">删除</el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  export default {
    name:"ControllerUseList",
    data() {
      return {
        dialogVisible1:false,
        APIName:'',
        types:[],
        platform:[],
        APIdescription:'',
        options:[
          {
            name:'游戏娱乐',
            value:'1'
          },
          {
            name:'游戏娱乐',
            value:'2'
          }
        ],
        isCollapse: true,
        total:0,
        page:1,
        manifests:[{name:'lalala',apikey:'121313',apipassword:'121212',status:"启用"}],
        dialogVisible:false,
        formChoose:{
          APIname:'',
          APItype:'',
          APIFree:''
        },
        formTypes:{
          languages:[],
          platform:[]
        },
        description:'',
        rulesChoose:{

        }
      };
    },
    methods: {
      ForMore(item){
        let _this=this;

        this.$axios({
          method:'get',
          url:'/api/getApiMore',
          params:{
            apikey:item.apikey
          }
        }).then(function (response) {
          _this.$data.APIName=response.data.name;
          _this.$data.types=response.data.apitype;
          _this.$data.platform=response.data.platform;
          _this.$data.APIdescription=response.data.descirbe;
          for(let index=0;index<_this.$data.types.length;index++) {
            switch (_this.$data.types[index]) {
              case 1:
                _this.$data.types[index] = '语义相似度';
                break;
              case 2:
                _this.$data.types[index] = '短文本相似度';
                break;
              case 3:
                _this.$data.types[index] = '评论观点抽取';
                break;
              case 4:
                _this.$data.types[index] = '情感倾向分析';
                break;
              case 5:
                _this.$data.types[index] = 'AI客服';
                break;
              case 6:
                _this.$data.types[index] = '语音识别';
                break;
              case 7:
                _this.$data.types[index] = '语音合成';
                break;
              case 8:
                _this.$data.types[index] = '人脸识别';
                break;
              case 9:
                _this.$data.types[index] = '人脸对比';
                break;
              case 10:
                _this.$data.types[index] = '人脸查找';
                break;
              case 11:
                _this.$data.types[index] = '通用文字识别';
                break;
              case 12:
                _this.$data.types[index] = '手写识别';
                break;
              case 13:
                _this.$data.types[index] = '身份证识别';
                break;
              case 14:
                _this.$data.types[index] = '银行卡识别';
                break;
              case 15:
                _this.$data.types[index] = '车牌识别';
                break;
              case 16:
                _this.$data.types[index] = '驾驶证识别';
                break;
              case 17:
                _this.$data.types[index] = '行驶证识别';
                break;
              case 18:
                _this.$data.types[index] = '通用图像分析';
                break;
              case 19:
                _this.$data.types[index] = '去模糊化';
                break;
              case 20:
                _this.$data.types[index] = '人重识别';
                break;
              case 21:
                _this.$data.types[index] = '车型识别';
                break;

            }
          }

          for(let index=0;index<_this.$data.platform.length;index++){
            switch(_this.$data.platform[index]){
              case 1:
                _this.$data.platform[index]='ANDROID';
                break;
              case 2:
                _this.$data.platform[index]='IOS';
                break;
              case 3:
                _this.$data.platform[index]='WINDOWS';
                break;
              case 4:
                _this.$data.platform[index]='HTML5';
                break;
              case 5:
                _this.$data.platform[index]='JAVA';
                break;
              case 6:
                _this.$data.platform[index]='FLASH';
                break;
              case 7:
                _this.$data.platform[index]='LINUX';
                break;
            }
          }

          console.log(_this.$data.types);
          _this.dialogVisible1=true;
        })


      },

      /**
       * 提交新API
       * @constructor
       */
      ConfirmAPI(){
        let types=this.$data.formTypes;
        let stringtypes=''
        for(let index=0;index<types.languages.length;index++){
          switch(types.languages[index]){
            case '语义相似度':
              types.languages[index]='1';
              break;
            case '短文本相似度':
              types.languages[index]='2';
              break;
            case '评论观点提取':
              types.languages[index]='3';
              break;
            case '情感倾向分析':
              types.languages[index]='4';
              break;
            case 'AI客服':
              types.languages[index]='5';
              break;
            case '语音识别':
              types.languages[index]='6';
              break;
            case '语音合成':
              types.languages[index]='7';
              break;
            case '人脸识别':
              types.languages[index]='8';
              break;
            case '人脸对比':
              types.languages[index]='9';
              break;
            case '人脸查找':
              types.languages[index]='10';
              break;
            case '通用文字识别':
              types.languages[index]='11';
              break;
            case '手写识别':
              types.languages[index]='12';
              break;
            case '身份证识别':
              types.languages[index]='13';
              break;
            case '银行卡识别':
              types.languages[index]='14';
              break;
            case '车牌识别':
              types.languages[index]='15';
              break;
            case '驾驶证识别':
              types.languages[index]='16';
              break;
            case '行驶证识别':
              types.languages[index]='17';
              break;
            case '通用图像分析':
              types.languages[index]='18';
              break;
            case '去模糊化':
              types.languages[index]='19';
              break;
            case '人像识别':
              types.languages[index]='20';
              break;
            case '车型识别':
              types.languages[index]='21';
              break;
          }
          if(index===types.languages.length-1) {
            stringtypes += types.languages[index];
          }else{
            stringtypes=stringtypes+ types.languages[index]+',';
          }
          }
          console.log(stringtypes);


        let stringplatform='';
        for(let index=0;index<types.platform.length;index++) {
          switch (types.platform[index]) {
            case 'ANDROID':
              types.platform[index] = '1'
              break;
            case 'IOS':
              types.platform[index] = '2';
              break;
            case 'WINDOWS':
              types.platform[index] = '3';
              break;
            case 'HTML5':
              types.platform[index] = '4';
              break;
            case 'JAVA':
              types.platform[index] = '5';
              break;
            case 'FLASH':
              types.platform[index] = '6';
              break;
            case 'LINUX':
              types.platform[index] = '7';
              break;
          }

          if(index===types.platform.length-1){
            stringplatform+=types.platform[index];
          }else {
            stringplatform = stringplatform+ types.platform[index] + ','
          }
        }

        console.log(stringplatform)

        let temp=document.cookie.split(';')
        let account=temp[0].split('=')[1];

        let _this=this;

        this.$axios({
          method:'get',
          url:'/api/newApi',
          params:{
            account:account,
            type:'7,13',
            name:this.$data.formChoose.name,
            platform:'4',
            describe:this.$data.description
          }
        }).then(function (response) {
          if(response.data===true){
            alert('提交成功！');
            _this.dialogVisible=false;
            _this.$router.push('/Controller/ControllerSpeachAPI')
          }else{
            alert('提交失败')
          }
        }).catch(function (err) {
          alert('提交失败')
        })


      },
      CancelAPI(){
        this.dialogVisible=false;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      CreateAPI(){
        this.$data.dialogVisible=true;
      },
      deleteAPI(row){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/api/delete',
          params:{
            apikey:row.apikey
          }
        }).then(function (response) {

            alert('删除成功！');
            _this.$data.manifests.splice(row,1);

        })
      }
    },
    created(){
      let temp=document.cookie.split(';')
      let account=temp[0].split('=')[1];
      let _this=this;
      this.$axios({
        method:'get',
        url:'/api/getApi',
        params:{
          account:account,
          page:1
        }
      }).then(function (response) {
        _this.$data.manifests=response.data.apiVos;
        _this.$data.total=response.data.all;
        _this.$data.page=response.data.part;
        for(let index=0;index<_this.$data.manifests.length;index++){
          if(_this.$data.manifests[index].status===1){
            _this.$data.manifests[index].status='未审核'
          }else if(_this.$data.manifests[index].status===2){
            _this.$data.manifests[index].status='已拒绝;'
          }else{
            _this.$data.manifests[index].status='已通过'
          }
        }
      })
    }
  }
</script>

<style scoped>

  body,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,table,tr,th,td,p,input,dl,dt,dd,ul,ol,li,input,textarea { font-family:"微软雅黑"!important;}
  .linkto{
    color: #4096ff;
    text-decoration: none
  }

  .line{
    width: 8.5rem;
    margin-left: 1rem;
    height: 3.5rem;
  }



  .line_pic{
    margin-left: -0.5rem;
    width: 9.4rem;
    height: 2.3rem;
    background-image: url("../assets/控制台/应用列表/背景.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .bg_btn{
    margin-left: 3.65rem;
    margin-top: -0.8rem;

  }


  textarea{
    overflow:auto;
    background: transparent;
    color: black;
    border: none;
    resize: none;
    font-weight:lighter;
    margin-bottom:0.3rem;
  }

  .table{
    width: 9rem;
    margin-left: 1rem;
  }

  .route{
    float: left;
    position: relative;
    top: 10%;
  }
  #search{
    height: 11%;
    padding-top:3%;
    padding-left: 5%;
    padding-bottom: 0;
  }
  .tac{
    height: 100%;
    width: 100%;
  }
  .teach{
    width: 100%;
    font-size: 0.15rem;
    margin-top: 0.1rem;
  }
  #main{
    float: left;
    height:100%;
    width: 74%;
    margin: 0;
    font-size: 0.21rem;
  }
  #aside{
    float: left;
    height: 15.3rem;
    width: 24%;
    margin: 0;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
  }
  #body{
    height:73.42%;
    width: 100%;
    margin: 0;
  }
  img{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #header{
    height:5rem;
    width: 100%;
    background-color: black;
    margin: 0;
    padding: 0;
  }
  #all{
    height: 18rem;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #end{
    height: 2.47rem;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .el-menu-vertical-demo{
    height:15.0rem;
  }
  span{
    font-size:0.22rem;
    margin-left: 0.6rem;
  }
  .searchInput{
    font-size:0.16rem;
    padding-left:0.137rem;
  }
</style>

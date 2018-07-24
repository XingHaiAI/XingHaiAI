<template>
  <body id="all">
  <div id="header"style="min-width: 13.6rem">
    <img src="../assets/控制台/banner.png">
  </div>
  <div id="body">
    <div id="aside">
      <sidebar></sidebar>
    </div>
    <div id="main">
      <div id="search">
        <p class="route"><router-link to="" class="linkto">控制台</router-link>&gt账户余额</p>
      </div>
      <div class="line">
        <div class="column">
          <div class="column_pic1"></div>
          <div class="column_right">
            <div class="money_left">余额：1000</div>
            <div class="right">
              <el-button type="primary" id="find" class="line_column_btn2" style="width: 0.6rem;float: left;margin-left: 0.05rem;margin-top: 0.1rem;">充值</el-button>
              <el-button type="primary" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-left: 0.05rem;margin-top: 0.1rem;">短信提醒</el-button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column_pic2"></div>
          <div class="column_right">
            <div class="order_p">待支付订单:<span style="color: red;margin-left: -0.01rem">1</span></div>
            <div class="order_e">已完成订单:<span style="color: blue;margin-left: -0.01rem">1</span></div>
          </div>
        </div>
        <div class="column">
          <div class="column_pic3"></div>
          <div class="column_right">

            <div class="up" style="margin-top: 0.2rem;font-size: 0.2rem;">套餐详情</div>
            <el-button type="primary" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-left: 0.37rem;margin-top: 0.1rem;">离线API</el-button>
            <el-button type="primary" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-left: 0.37rem;margin-top: 0.1rem;">包年使用</el-button>

          </div>
        </div>
      </div>
      <div class="line2">
        <div class="line_word_left" style="width: 28%;float: left">时间范围</div>
        <div class="line_input_right">
          <input class="searchInput" style="width: 30%;height:25%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;float: left" />——<input class="searchInput" style="width: 30%;height:25%;margin-right:0.7%;border: #989898 0.01rem solid;border-radius: 0.05rem;" />
        </div>
      </div>
      <div class="line2">
        <div class="line_word_left" style="width: 28%;float: left">消费趋势</div>
        <div class="line_input_right" style="float: left;margin-left: 2.36rem;margin-top: -0.45rem">
          <el-button type="" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-top: 0.1rem;margin-left: -0.03rem;">全部</el-button>
          <el-button type="" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-top: 0.1rem;margin-left: -0.02rem;">一年</el-button>
          <el-button type="" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-top: 0.1rem;margin-left: -0.02rem;">半年</el-button>
          <el-button type="" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-top: 0.1rem;margin-left: -0.02rem;">一月</el-button>
          <el-button type="" id="find" class="line_column_btn2" style="width: 0.9rem;float: left;margin-top: 0.1rem;margin-left: -0.02rem;">一周</el-button>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
  import sidebar from './SideBar.vue'
  export default {
    name:"ControllerMoneyLeft",
    components: {sidebar},
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
    width: 9.6rem;
    margin-left: 1rem;
    height: 3.5rem;
  }

  .line2{
    width: 8.5rem;
    margin-left: 1rem;
    height: 2rem;
  }

  .money_left{
    margin-top: 0.5rem;
    font-size: 0.16rem;
  }

  .order_p{
    margin-top: 0.5rem;
    margin-left: -5.5rem;
    font-size: 0.16rem;
  }

  .order_e{
    margin-top: 0.2rem;
    margin-left: -0.5rem;
    font-size: 0.16rem;
  }

  .column{
    background-color:white;
    float: left;
    margin-left: -0.5rem;
    width: 2.9rem !important;
    height: 1.8rem !important;
    margin-right: 0.6rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
  }

  .column_title{
    width: 3.4rem;
    text-align: center;
    margin-bottom: 0.1rem;
  }



  .column_pic1{
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.2rem;
    margin-top: 0.25rem;
    float: left;
    background-image: url("../assets/控制台/账户余额/余额图标.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic2{
    width: 1.2rem;
    float: left;
    height: 1.2rem;
    margin-left: 0.2rem;
    margin-top: 0.25rem;
    background-image: url("../assets/控制台/账户余额/订单图标.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_pic3{
    width: 1.2rem;
    float: left;
    height: 1.2rem;
    margin-left: 0.2rem;
    margin-top: 0.25rem;
    background-image: url("../assets/控制台/账户余额/套餐详情图标.png") !important;
    background-position: center;
    background-size: 100% 100%;
  }

  .column_word{
    color: grey;
    font-size: 0.15rem;
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
  }

  .column_btn{
    width: 70%;
    margin-left: 15%;
    color: white;
    font-weight: 600;
    line-height: 0.5rem;
    background-color: blue;
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

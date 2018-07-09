<template>
  <body id="all">
  <div id="header">
    <img src="../assets/控制台/banner.png">
  </div>
  <div id="body">
    <Side id="aside"></Side>
    <div id="main">
      <div id="search">
        <p class="route">控制台&nbsp&nbsp&gt<router-link to="" class="linkto">&nbsp&nbsp应用列表</router-link></p>
      </div>
      <div class="APPBackground">
        <el-button class="button4bg">创建API KEY</el-button>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="name"
            label="应用名称"
            width="130">
          </el-table-column>
          <el-table-column
            prop="KEY"
            label="API KEY"
            width="220">
          </el-table-column>
          <el-table-column
            prop="password"
            label="API 密码"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="100">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import Side from "./side.vue"
  export default {
    name:"APPList",
    components: {
    Side
    }, data() {
      return {
        tableData: [{
          name: '接口一',
          KEY: '456sldkjio7434',
          password: '********',
          status:'启用'
        }, {
          name: '接口二',
          KEY: '856sjdkfdoi8564',
          password: '********',
          status:'启用'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
  #text{
    text-align: center;
    margin-right:5%;
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
    top: 40%;
  }
  .tac{
    height: 100%;
    width: 100%;
  }
  .leftTitle{
    font-size:0.25rem;
  }
  .teach{
    width: 100%;
    font-size: 0.2rem;
    font-weight:lighter;
  }
  #main{
    float: left;
    height:100%;
    width: 74%;
    margin: 0;
    font-size: 0.21rem;
  }
    #search{
    font-size:0.25rem;
    height: 5%;
    padding-top:3%;
    padding-left: 5%;
    padding-bottom: 0;
  }
  #aside{
    float: left;
    height: 100%;
    width: 26%;
    margin: 0;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.2), 0 0.06rem 0.20rem 0 rgba(0, 0, 0, 0.10);
  }
  #body{
    height:79.15%;
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
    height:20.85%;
    width: 100%;
    background-color: black;
    margin: 0;
    padding: 0;
  }
  #all{
    height: 25rem;
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
}
.APPBackground{
  margin-top:0.5rem;
  margin-left:0.4rem;
  margin-right:0.4rem;
  height:3rem;
  background-image: url("../assets/控制台/应用列表/背景.png");
  background-size: 100% 100%;
}
.button4bg{
  margin-left:4rem;
  margin-top:2rem;
  font-size:0.2rem;
  color:white;
  background-color:#0099FF;
  border-color:#0099FF;
  box-shadow: 0.05rem 0.05rem 0.05rem 0 rgba(0, 0, 0, 0.5);
}
.table{
  margin:0.7rem;
  height:10rem;
  background-image: url("../assets/控制台/应用列表/接口列表贴图.png");
  background-size: 3.5rem 3.5rem;
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-position:90% 100%;
}
.el-table tr {
  font-size:0.25rem;
  color:black;
}
</style>

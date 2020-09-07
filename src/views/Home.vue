<template>
<div class="Home">
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" class="mgb20" style="height:252px;">
        <div class="userInfo">
          <img src="../assets/img/home/img.jpg" alt="">
          <div class="userInfoContent">
            <div>{{name}}</div>
            <div>{{role}}</div>
          </div>
        </div>
        <div class="userInfoList">
          上次登陆时间
          <span>2019-11-01</span>
        </div>
        <div class="userInfoList">
          上次登陆地点
          <span>四川成都</span>
        </div>        
      </el-card>
      <el-card shadow="hover" style="height:252px;">
        <div slot="header" class="clearfix">
          <span>语言详情</span>
        </div>
        Vue <el-progress :percentage="71.3" color="#42b983"></el-progress>
        JavaScript <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
        CSS <el-progress :percentage="13.7"></el-progress>
        HTML <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
      </el-card>
    </el-col>

    <el-col :span="16">
      <!-- gutter代表下面每个col之间的间隔 -->
      <el-row :gutter="20" class="mgb20">
        <el-col :span="8">
          <el-card shadow="hover" :body-style="{padding: '0px'}">
            <!-- 自定义高度撑开盒子 -->
            <div class="grid-content grid-con-1">
              <div class="el-icon-user grid-con-icon" ></div>
                <div class="grid-cont-right">
                  <div class="grid-num">2222</div>
                  <div>用户访问量</div>
                </div> 
            </div> 
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" :body-style="{padding: '0px'}">
            <div class="grid-content grid-con-2">
              <div class="el-icon-bell grid-con-icon"></div>
                <div class="grid-cont-right ">
                  <div class="grid-num">44</div>
                  <div>系统消息</div>
                </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" :body-style="{padding: '0px'}">
            <div class="grid-content grid-con-3">
              <div class="el-icon-goods grid-con-icon"></div>
                <div class="grid-cont-right ">
                  <div class="grid-num">300</div>
                  <div>数量</div>                  
                </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-card shadow="hover" style="height:403px;">
        <div slot="header" class="clearfix">
          <span>待办事项</span>
        </div>
        <el-table :show-header="false" :data="todoList" style="width:100%;">
          <el-table-column width="40px">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.status"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <div class="todo-item" :class="{'todo-item-del': scope.row.status}">
                {{scope.row.title}}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card shadow="hover">
        <schart ref="line" canvasId="line" class="schart" :options="options"></schart>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover">
        <schart ref="bar" canvasId="bar" class="schart" :options="options2"></schart>
      </el-card>
    </el-col>    
  </el-row>
</div>
</template>

<script>
import Schart from 'vue-schart';
export default {
  name: 'Home',
  components: {
    Schart
  },
  data() {
    return {
      name: localStorage.getItem('userName'),
      todoList: [
        {
          title: '今天需要修复10个bug',
          status: true
        },
        {
          title: '今天需要新增一个功能',
          status: false
        }
      ],
      data: [
        {
          date: '2018/09/04',
          value: 1083
        },
        {
          date: '2018/09/05',
          value: 941
        }
      ],
      options: {
        type: 'bar',
        title: {
          text: '最近一周各品类销售图'
        },
        xRorate: 25,
        labels: ['周一', '周二', '周三', '周四', '周五'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 190, 135, 160]
          },
          {
            label: '食品',
            data: [144, 198, 150, 235, 120]
          } 
        ]
      },
      options2: {
        type: 'line',
        title: {
            text: '最近几个月各品类销售趋势图'
        },
        labels: ['6月', '7月', '8月', '9月', '10月'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 150, 135, 160]
          },
          {
            label: '食品',
            data: [74, 118, 200, 235, 90]
          }
        ]
      }
    }
  },
  computed: {
    role() {
      return this.name === 'admin' ? '管理员' : '普通用户';
    }
  },
  methods: {
    handleDelet(){
      todoList
    }
  }
}
</script>
<style scoped>
.schart{
  width: 100%;
  height: 300px;
}
.todo-item {
  font-size: 14px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.mgb20{
  margin-bottom: 20px;
}
.userInfo{
  display: flex;
}
.userInfoContent{
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.userInfoContent div:first-child {
  font-size: 30px;
  color: #222;
}
.userInfoList{
  font-size: 14px;
  color: #999;
  line-height: 25px; 
}
.userInfoList span {
  margin-left: 70px;
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.grid-content{
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}
.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

</style>
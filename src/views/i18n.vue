<template>
<div class="i18n">
  <div class="crumbs">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-ht-lipinka"></i> mock测试</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="container">
        <div class="plugins-tips">
          此User数据是从mock获取的假数据,用于前后端分离调试用
          <div class="userdata">User: {{user}}</div>
        </div>
      </div>
  </div>  
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'i18n',
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    axios.get('/user/userInfo').then(res => {
      this.user = res.data.user
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
.userdata{
  font-size: 22px;
}
</style>
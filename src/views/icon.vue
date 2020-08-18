<template>
<div class="icon">
  <div class="crumbs">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-emoji"></i> 自定义图标</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="container">
    <h2>使用方法</h2>
    <p style="line-height: 50px;">
        直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共{{iconList.length}}个图标）
    </p>

    <h2>图标</h2>

    <ul>
      <li class="icon-li" v-for="(item,index) in list" :key="index">
        <div class="icon-li-content">
          <i :class="`el-icon-ht-${item}`"></i>
          <span>{{item}}</span>
        </div>
      </li>
    </ul>

  </div>
</div>
</template>

<script>
export default {
  name: 'icon',
  computed: {
    list(){
      return this.iconList.filter((item) => {
        return item.indexOf(this.keyword) !== -1;
      })
    }
  }, 
  data() {
    return {
      keyword: '',
      iconList: [
        'lihe',
        'paihangbang',
        'edit',
        'attentionfill',
        'lipinka',
        'mingxinghuodong',
        'people',
        'peoplefill',
        'notice',
        'noticefill',
        'mobile',
        'mobilefill',
        'voice',
        'voicefill',
        'unlock',
        'lock',
        'home',
        'homefill',
        'delete',
        'deletefill',
        'notification',
        'notificationfill',
        'notificationforbidfill',
        'like',
        'likefill',
        'comment',
        'commentfill',
        'camera',
        'camerafill',
        'warn'
      ]      
    }
  }
}
</script>
<style scoped>
.icon-li{
  display: inline-block;
  padding: 10px;
  width: 120px;
  height: 120px;
}
.icon-li-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-li-content i{
  font-size: 36px;
  color: #606266;
}
</style>
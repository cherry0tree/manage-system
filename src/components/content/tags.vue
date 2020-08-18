<template>
<div class="tags">
  <ul>
    <li class="tags-li" v-for="(item, index) in tagsList" :key="index" :class="{active: isActive(item.path)}">
      <router-link :to="item.path" class="tags-li-title">
        {{item.title}}
      </router-link>
      <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
    </li>
  </ul>
  <div class="tags-close-box">
    <el-dropdown @command="handleTags">
      <el-button size="mini" type="primary">
        标签选项<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu size="small" slot="dropdown">
        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>
export default {
  name: 'tags',
  data() {
    return {
      tagsList: []
    }
  },
  methods: {
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    },
    isActive(path){
      return path === this.$route.fullPath;
    },
    // 关闭其他
    closeOther(){
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      })
      this.tagsList = curItem;
    },
    // 关闭所有
    closeAll(){
      this.tagsList = [];
      this.$router.push('/');
    },
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0]
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
      if (item) {
        this.$router.push(item.path);
      } else {
        this.$router.push('/');
      }
    },
    setTags(route) {
      console.log(route)
      const isExit = this.tagsList.some(item => {
        return item.path === route.fullPath;
      })
      if(!isExit){
        if(this.tagsList.length >= 8){
            this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath
        })
      }
      this.$bus.$emit('tags', this.tagsList)
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue)
    }
  },
  created() {
    this.setTags(this.$route);
  }
}
</script>
<style scoped>
.tags{
  position: relative;
  height: 30px;
  box-shadow: 0 5px 10px #ddd;
}
.tags ul{
  box-sizing: border-box;
}
.tags-li{
  float: left;
  height: 23px;
  line-height: 23px;
  margin: 3px 5px 2px 3px;
  font-size: 12px;
  border: 1px solid #e9eaec;
  padding: 0 5px 0 12px;
  background: #fff;
  cursor: pointer;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
  transition: all .3s ease-in;
}
.tags-close-box{
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 100px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
}
/* 为true才显示 */
.tags-li.active .tags-li-title{
  color: #fff;
}
.tags-li.active{
  color: #fff;
  background-color: #409EFF;
}

.tags-li.active .el-icon-close{
  color: #fff;
}
</style>
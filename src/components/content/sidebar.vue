<template>
<div class="sidebar">
  <el-menu class="sidebar-el-menu"
           :default-active="onRoutes"
           :collapse="collapse"
           background-color="#324157"
           text-color="#bfcbd9"
           active-text-color="#20a0ff"
           unique-opened
           router>
    <template v-for="item in items">
      <template v-if="item.subs">
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.subs">
            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
              <template slot="title">{{ subItem.title }}</template>
              <el-menu-item v-for="(item, indey) in subItem.subs" :key="indey" :index="item.index">
                {{item.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else
                          :index="subItem.index"
                          :key="subItem.index">
              {{subItem.title}}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>  
      </template>
    </template> 
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'sidebar',
  data(){
    return {
      collapse: false,
      items: [
          {
            icon: 'el-icon-s-home',
            index: 'home',
            title: '系统首页'
          },
          {
            icon: 'el-icon-menu',
            index: 'basetable',
            title: '基础表格'
          },
          {
            icon: 'el-icon-document-copy',
            index: 'message',
            title: '系统消息'
          },
          {
            icon: 'el-icon-document-copy',
            index: 'svg',
            title: 'svg测试'
          },          
          {
            icon: 'el-icon-tickets',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'baseform',
                title: '基本表单'
              },
              {
                index: '3-2',
                title: '三级菜单',
                subs: [
                  {
                    index: 'editor',
                    title: 'markdown编辑器'
                  }
                ]
              }
            ]          
          },
          {
            icon: 'el-icon-star-off',
            index: 'icon',
            title: '自定义图标'
          },
          {
            icon: 'el-icon-picture-outline',
            index: 'charts',
            title: 'schart图表'            
          },
          {
            icon: 'el-icon-rank',
            index: '6',
            title: '拖拽组件',
            subs: [
              {
                index: 'draglist',
                title: '拖拽列表'
              },
              {
                index: 'draglog',
                title: '拖拽对话弹窗'
              }              
            ]
          },
          { 
            icon: 'el-icon-warning',
            index: '7',
            title: '权限',
            subs: [
              {
                index: 'permission',
                title: '权限测试'
              }     
            ]
          },
          {
            icon: 'el-icon-mic',
            index: 'i18n',
            title: 'mock测试'
          },
          {
            title: '预留界面'
          }             
      ]
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  },
  created() {
    this.$bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  }
}
</script>
<style scoped>
.sidebar-el-menu:not(.el-menu--collapse){
  width: 250px;
}
.sidebar{
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar > ul {
  height: 100%;
}
</style>
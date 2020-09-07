import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const login = () => import('../views/login.vue')
const home = () => import('../views/home.vue')
const dashboard = () => import('../views/dashboard.vue')
const icon = () => import('../views/icon.vue')
const basetable = () => import('../views/basetable.vue')
const message = () => import('../views/message.vue')
const charts = () => import('../views/charts.vue')
const i18n = () => import('../views/i18n.vue') 
const upload = () => import('../views/upload.vue')
const form = () => import('../views/baseform.vue')
const editor = () => import('../views/editor.vue')
const draglist = () => import('../views/draglist.vue')
const draglog = () => import('../views/draglog.vue')
const permission = () => import('../views/permission.vue')

const routes = [
  {
     path: '/',
     redirect: '/home'
  },
  {
    path: '/',
    component: dashboard,
    children: [
      {
        path: '/home',
        component: home,
        meta: {title: '系统首页'}
      },
      {
        path: '/icon',
        component: icon,
        meta: {title: '自定义图标'}
      },
      {
        path: '/basetable',
        component: basetable,
        meta: {title: '基础表格'}
      },
      {
        path: '/message',
        component: message,
        meta: {title: '系统消息'}
      },        
      {
        path: '/charts',
        component: charts,
        meta: {title: 'schart图表'}
      },     
      {
        path: '/i18n',
        component: i18n,
        meta: {title: 'mock测试'}
      },
      {
        path: '/403',
        component: () => import('../views/403.vue'),
        meta: {title: '403'}
      },        
      {
        path: '/upload',
        component: upload,
        meta: {title: '上传文件'}
      },          
      {
        path: '/baseform',
        component: form,
        meta: {title: '基本表单'}
      },   
      {
        path: '/editor',
        component: editor,
        meta: {title: '文本编辑'}
      },        
      {
        path: '/draglist',
        component: draglist,
        meta: {title: '拖拽列表'}
      },   
      {
        path: '/draglog',
        component: draglog,
        meta: {title: '拖拽对话'}
      },   
      {
        path: '/permission',
        component: permission,
        meta: {title: '权限测试', permission: true}
      },                    
    ]
  },
  {
    path: '/login',
    component: login,
    meta: { title: '登录' }
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

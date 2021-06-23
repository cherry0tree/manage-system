import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import './components/common/directives'
import '@/icons' // icon

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(ElementUI, {
  size: 'small'
});

// 全局的路由导航
router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title}`

  const role = localStorage.getItem('userName');

  if (!role && to.path !== '/login'){
    next('/login');
  } else if(to.meta.permission) {
    role === 'admin' ? next() : next('/403'); //两句代码实现权限管理
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

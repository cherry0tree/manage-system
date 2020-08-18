<template>
<div class="dashboard">
  <vHeader></vHeader>
  <sidebar></sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <tags></tags>
    <div class="content">
      <router-view></router-view>
    </div>
    <el-backtop target=".content"></el-backtop>
  </div>
</div>
</template>

<script>

import vHeader from '@/components/content/header.vue';
import sidebar from '@/components/content/sidebar.vue';
import tags from '@/components/content/tags.vue';

export default {
  name: 'dashboard',
  components: {
    vHeader,
    sidebar,
    tags
  },
  data() {
    return {
      collapse: false
    }
  },
  created() {
    console.log(this.$route)
    this.$bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  }
}
</script>
<style scoped>

</style>
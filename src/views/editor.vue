<template>
<div class="editer">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-ht-edit"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <div class="container">
        <div class="plugins-tips">
            基于Vue的markdown编辑器。
        </div>
        <mavon-editor v-model="content" ref="md" style="min-height: 600px" @imgAdd="$imgAdd" @change="change"></mavon-editor>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>

</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'

export default {
  name: 'editer',
  components: {
    mavonEditor
  },
  data() {
      return {
        html:'',
        content:''
      }
  },
  methods: {
    submit(){
        this.$message.success('提交成功！');
    },
    $imgAdd(pos, $file){
        //上传到服务器
        var formdata = new FormData();
        formdata.append('file', $file);
        let config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        axios.post('./table.json', formdata, config).then(res => {
            console.log('hutao sucess')
        }).catch(err => {console.log('rejected', err)})


        // this.$axios({
        //     url: '/upload',
        //     method: 'post',
        //     data: formdata,
        //     headers: {'Content-Type': 'multipart/form-data'}
        // }).then((url) => {
        //     console.log('hutao scucess')
        //     this.$refs.md.$img2Url(pos, url);
        // }).catch((err) => console.log('rejected', err))
    },
    change(value, render){
        // render 为 markdown 解析后的结果
        this.html = render;
    }
  }
}
</script>
<style scoped>

</style>
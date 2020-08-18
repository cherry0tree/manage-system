<template>
<div class="login">
  <div class="loginPanel">
    <div class="loginTitle">后台管理系统</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="loginContent">
        <el-form-item prop="userName">
          <el-input v-model="param.userName" placeholder="userName">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input type="password" placeholder="passWord" v-model="param.passWord">
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="loginBtn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="loginTips">填写任意的用户名和密码</p>
      </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      param: {
        userName: 'admin',
        passWord: '123123'
      },
      rules: {
        userName: { required: true, message: '请输入用户名', trigger: 'blur' },
        passWord: { required: true, message: '请输入密码', trigger: 'blur' }
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success('登录成功');
          localStorage.setItem('userName', this.param.userName);
          this.$router.push('/');
        } else {
          this.$message.error('请输入账号和密码');
          return false;
        }
      })
    }
  }
}
</script>
<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.loginPanel{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.loginTitle{
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: black;
  border-bottom: 1px solid #ddd;
}
.loginContent{
  padding: 30px 30px;
}
.loginBtn{
  text-align: center;
}
.loginTips{
  font-size: 12px;
  line-height: 30px;
  text-align: center;
}
</style>
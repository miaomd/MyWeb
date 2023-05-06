<template>
  <div class="login">
   <p class="login-title">芳芳带你学前端</p>
      <div class="login-content">
        <div class="login-main">
        <div class="login-container">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!-- 姓名 -->
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <!-- 密码 -->
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>

            <!-- 提交按钮 -->
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api'

export default {
  data(){
    return {
      ruleForm:{ //初始化
        name:'admin123',
        password:'admin123'
      },
      rules: {  //验证
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],
      }
    }
  },
  methods:{
    submitForm(formName){
      let {name,password} = this.ruleForm;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              method:'post',
              url:'get_login',
              data:{user:name,password:password}
            }).then(res=>{
              console.log(res);
              let {code,msg} = res.data;
              if(code == 200){
                this.$router.push("/home");//页面跳转
              }else {
                alert(msg);
              }
            }).catch(err=>{
              console.log(err)
            })
          } else {
            alert('error submit!!');
            return false;
          }
        });
      //
    }
  }
}
</script>



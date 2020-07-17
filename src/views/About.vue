
<template>
<div class="box">
  <div class="grid-content bg-purple login-box">
  <el-form :model="ruleForm" :hide-required-asterisk="true" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
   <el-form-item label="用户账号" prop="user">
    <el-input type="text" v-model="ruleForm.user"></el-input>
  </el-form-item>
 <el-form-item label="用户密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" :show-password="true" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" style="width:100%"  @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>
</el-form>
</div>
</div>

</template>
<script>
  export default {
    data() {
      var checkUser = (rule, value, callback) => {
        console.log(value)
        console.log(rule)
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else{
          callback();

        }
      };
      var validatePass = (rule, value, callback) => {
        console.log(value)
        console.log(rule)
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          user: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: checkUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>

  .login-box{
    padding: 30px 50px 20px 10px; 
    width: 400px ;
    height: 200px;
    margin: 140px auto;
    
  }

  .bg-purple {
   background: #f5f6fa;

  }

  .box{
   position: relative;
  }
</style>
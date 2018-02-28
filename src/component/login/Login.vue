<template>
    <div class="login">
        <section>
            <!-- model用来设置表单所有字段, rules用来设置表单校验规则的(可省略, 但是如果需要表单校验功能, 必须写)  -->
            <el-form :model="ruleForm2" label-position="top" status-icon :rules="rules2" ref="abc" label-width="100px" class="demo-ruleForm">

                <!-- label用来设置表单提示文字, prop用来指定当前表单代表的字段名(可省略, 但是如果需要表单校验与重置功能, 必须写) -->
                <el-form-item label="账号" prop="uname">
                    <el-input type="txet" v-model="ruleForm2.uname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('abc')">登录</el-button>
                    <el-button @click="resetForm('abc')">重置</el-button>
                </el-form-item>

            </el-form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // 这里的字段要按照接口文档进行修改
      ruleForm2: {
        uname: "",
        upwd: ""
      },
      // 这里添加的校验规则, 每个字段可以加多个, 所以是个数组
      rules2: {
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        upwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      // post请求的第二个参数是发送的数据, 这里直接把data里的表单对象传过去
      this.$http.post(this.$api.login, this.ruleForm2).then(() => {
        this.$alert("登陆成功");
      });
    },
    // 登陆按钮方法
    // this.$refs用来获取页面中的元素或组件, 这里通过它拿到form表单组件, 调用validate方法, 给所有表单进行校验
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$alert("账号或密码不合格!");
        }
      });
    },

    // 重置按钮方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style scoped lang="less">
.login {
  height: 100%;
  background-color: #3ba4e0;
  section {
    padding: 20px;
    width: 400px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: 3px solid #fff;
    border-radius: 5px;
  }
}
</style>
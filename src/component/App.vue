
<template>
  <div>
    <p>{{val}}</p>
    <router-view></router-view>
    <el-switch v-model="fufei" active-text="按月付费" inactive-text="按年付费">
    </el-switch>

  </div>
</template>



<script>
export default {
  data() {
    return {
      val: "vue脚手架测试",
      fufei: true
    };
  },
  // 生命周期函数, vue会自动调用
  created() {
    this.$http.get(this.$api.logout).then(() => console.log("退出登陆"));
  }
};
</script>


<style scoped>

</style>

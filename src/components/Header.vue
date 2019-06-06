<template>
  <div class="top">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="证查查">
        </div>
      </el-col>
      <el-col :span="11">
        &emsp;
        <div v-show="show">
          <select @click="gotoa" value="企业查询" name="sousuo" id="1" style="width:150px">
            <option value="企业查询">企业查询</option>
            <option value="商品物码">商品物码</option>
            <option value="证件查询">证件查询</option>
          </select>
          <!-- <span>{{qiye}}</span> -->
          <input type="text">
        </div>
      </el-col>
      <el-col :span="5" class="top-right">
        <i class="el-icon-s-home"></i>
        <div v-if="num" class="user-login">
          <router-link :to="{}">
            <span>登陆</span>
          </router-link>
          <router-link :to="{}">
            <span>注册</span>
          </router-link>
        </div>
        <div v-else class="user-login">{{username}}</div>
        <!-- <a href="http://test.zhchacha.com/index.html">退出</a> -->
        <span @click="gotoLogin">退出</span>
      </el-col>
    </el-row>
    <h2>{{show}}</h2>
  </div>
</template>
<style lang="scss">
.logo {
  width: 100%;
  height: 69px;
  img {
    width: 100px;
    height: 35px;
    margin-top: 17px;
  }
}
.top {
  width: 1870px;
  background-color: #255fc6;
}
.top-right {
  overflow: hidden;
  span {
    width: 50px;
    float: left;
    margin-right: 15px;
    height: 69px;
    line-height: 69px;
  }
  i {
    float: left;
    width: 40px;
    height: 69px;
    line-height: 69px;
    font-size: 25px;
  }
  .user-login {
    width: 130px;
    text-align: center;
    float: left;
    height: 69px;
    line-height: 69px;
  }
}
</style>

<script>
export default {
  props: ["show"],
  data() {
    return {
      num: false,
      username: localStorage.username
    };
  },
  methods: {
    gotoa(e) {
      console.log(e.target.value);
    },
    gotoLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>


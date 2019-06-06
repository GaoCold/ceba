<template>
  <ul class="sidebar_nav">
    <li>
      <a href="/home/homeye">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </a>
    </li>
    <li>
      <i class="el-icon-menu"></i>
      <span>应用</span>
    </li>
    <li>
      <router-link :to="{name:'hezuo'}">
        <i></i>
        <span>合作伙伴</span>
      </router-link>
    </li>
    <!-- <li>
      <router-link :to="{name:'mywuma'}">
        <i></i>
        <span>我的物码</span>
      </router-link>
    </li>-->
    <li>
      <router-link :to="{name:'fenxian'}">
        <i></i>
        <span>风险预警</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'zhengjian'}">
        <i></i>
        <span>证件核验</span>
      </router-link>
    </li>
    <!-- <li>
      <router-link :to="{name:'myzhengjian'}">
        <i></i>
        <span>我的证件</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'myzhengjian'}">
        <i></i>
        <span>账号管理</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'myzhengjian'}">
        <i></i>
        <span>角色管理</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'myzhengjian'}">
        <i></i>
        <span>核验管理</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'myzhengjian'}">
        <i></i>
        <span>检测机构</span>
      </router-link> 
    </li>-->
    <li>
      <i class="el-icon-user"></i> 个人中心
    </li>
    <li>
      <router-link :to="{name:'shezhi'}">
        <i></i>
        <span>账号设置</span>
      </router-link>
    </li>
    <!-- <li>
      <router-link :to="{name:'shiming'}">
        <i></i>
        <span>实名认证</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'shiming'}">
        <i></i>
        <span>企业认证</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'shiming'}">
        <i></i>
        <span>认证信息</span>
      </router-link>
    </li>-->
  </ul>
</template>
<style lang="scss" scoped>
.sidebar_nav {
  position: absolute;
  top: 92px;
  left: 0;
  width: 200px;
  margin-right: -2px;
  border-right: 2px solid #ddd;
  height: 90%;
  li {
    width: 100%;
    font-size: 15px;
    height: 40px;
    text-align-last: left;
    line-height: 40px;
    a {
      padding: 12px 0;
      padding-right: 50px;
      height: 40px;
      line-height: 40px;
      span {
        width: 94px;
        display: inline-block;
      }
    }
  }
}

.nav-active,
.router-link-exact-active {
  color: #000;
  border-color: #fff;
  border-right: 2px solid #255fc6;
}
i {
  width: 18px;
  height: 18px;
  display: inline-block;
  margin: 0 18px 0 18px;
}
</style>
<script>
export default {
  methods: {
    gotohomeye() {
      this.$router.push({ name: "homeye" });
    }
  }
};
</script>


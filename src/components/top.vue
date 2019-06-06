<template>
  <div class="paddin">
    <div class="top">
      <div class="logon">
        <img src="../assets/images/logo.png" alt="证查查">
      </div>
      <div class="serch">
        <div class="serch_qiye" @click="showchecked">
          <p>{{qiye}}</p>
          <i class="el-icon-arrow-down"></i>
          <span></span>
        </div>
        <input type="text" class="serch_input">
        <span class="cuowu">x</span>
        <div class="sousuo">
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="top_name">
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
      </div>

      <ul v-show="checked" class="check-select">
        <li @click="setname" data-checka="0" :class="check==0?selec:seleca">企业查询</li>
        <li @click="setname" data-checka="1" :class="check==1?selec:seleca">证件查询</li>
        <li @click="setname" data-checka="2" :class="check==2?selec:seleca">商品物码</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {
      qiye: "企业搜索",
      seleca: "seta",
      selec: "setb",
      check: 0,
      input: "",
      checked: false,
      num: false
    };
  },
  methods: {
    setname(e) {
      console.log(e.target.dataset.checka);
      this.check = e.target.dataset.checka;
      this.qiye = e.target.textContent;
      this.checked = false;
    },
    showchecked() {
      this.checked = true;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.top_name {
  float: left;
  width: 335px;
  height: 46px;
  padding-top: 12px;
}
.paddin {
  height: 80px;
  background-color: #fff;
  position: relative;
}
.top {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 80px;
}
.logon {
  float: left;
  padding-top: 15px;
  padding-right: 65px;
}
.serch {
  float: left;
  width: 700px;
  height: 46px;
  margin-top: 12px;
  border-radius: 40px;
  background-color: #fff;
  position: relative;
  .serch_qiye {
    float: left;
    width: 120px;
    height: 40px;
    margin-top: 3px;
    line-height: 40px;
    font-weight: 900;
    p {
      display: inline-block;
      padding-left: 15px;
      padding-right: 5px;
    }
    span {
      display: inline-block;
      width: 1px;
      height: 18px;
      line-height: 40px;
      // padding-top: 10px;
      margin-left: 5px;
      background-color: #000;
      vertical-align: top;
      margin-top: 12px;
    }
  }
  .serch_input {
    float: left;
    width: 480px;
    border: none;
    height: 46px;
  }
  .sousuo {
    float: left;
    width: 80px;
    height: 46px;
    margin-left: 20px;
    padding-top: 13px;
    i {
      display: inline-block;
      font-size: 24px;
    }
  }
  .cuowu {
    margin-left: -20px;
    float: left;
    width: 20px;
    border-radius: 50%;
    margin-top: 13px;
    background-color: #d5d5d5;
    font-size: 15px;
    height: 20px;
    color: #fff;
  }
}
.check-select {
  position: absolute;
  top: 59px;
  left: 195px;
  height: 60px;
  width: 100px;
  display: block;
  border-radius: 4px;
  background-color: #fff;
  li {
    height: 30px;
    border-radius: 4px;
    background-color: #fff;
  }
  li:hover {
    background-color: rgb(67, 165, 245);
  }
}
.seta {
  display: block;
}
.setb {
  display: none;
}
</style>



<template>
  <div class="serch_top">
    <div class="serch">
      <div class="serch_left" @click="showUl">
        <p class="serch_p">{{qiye}}</p>
        <i class="iconfont el-icon-arrow-down icon_down"></i>
      </div>
      <input type="text" :placeholder="qiyename" class="serch_inpu">
      <i class="iconfont el-icon-search icon_right"></i>
    </div>
    <ul v-show="show_s" class="serch_ul">
      <li @click="gotonamea" :class="show_name==0?activeClass:''">商品名称</li>
      <li @click="gotoname" :class="show_name==1?activeClass:''">生产企业</li>
    </ul>
    <!-- <div v-show="show_name==0" class="dailis">
      <span class="daili" @click="gotid" :class="id==0?activeClass:''">生产商</span>
      <span class="daili" @click="gotid1" :class="id==1?activeClass:''">代理商</span>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      qiye: "商品名称",
      show_s: false,
      show_name: 0,
      qiyename: "请输入你想要搜索的内容",
      activeClass: "aa",
      name: localStorage.username,
      id: 0
    };
  },
  methods: {
    showUl() {
      this.show_s = !this.show_s;
    },
    gotid() {
      this.id = "0";
      console.log("555");
    },
    gotid1() {
      this.id = "1";
      console.log("666");
    },
    gotonamea() {
      this.show_name = 0;
      console.log(this.show_name);
      this.qiye = "商品名称";
      this.show_s = !this.show_s;
    },
    gotoname() {
      this.show_name = 1;
      console.log(this.show_name);
      this.qiye = "生产企业";
      this.show_s = !this.show_s;
    }
  }
};
</script>

<style lang="scss" scoped>
.serch_top {
  width: 100%;
  height: 80px;
  padding: 31px 0;
  position: relative;
  text-align: left;
}
.aa {
  background-color: #1d33f5;
  color: #fff;
}
.bb {
  background-color: #fff;
}
.serch {
  // float: left;
  width: 520px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #dddddd;
  box-shadow: 2px 4px 6px #b3b3b3;
  position: relative;
  border: 1px solid #dddddd;
  display: inline-block;
  vertical-align: top;
  .icon_right {
    float: right;
    margin-right: 15px;
    font-size: 30px;
    font-weight: 900;
    padding-top: 18px;
  }
  .serch_inpu {
    margin-left: 130px;
    width: 300px;
    height: 58px;
    border: none;
  }
  .serch_left {
    position: absolute;
    top: 0;
    left: 15px;
    width: 120px;
    height: 60px;
    .serch_p {
      padding-top: 18px;
      display: inline-block;
      font-size: 18px;
      font-weight: 900;
    }
    .icon_down {
      display: inline-block;
      margin-left: 10px;
      font-size: 18px;
      padding-top: 18px;
      font-weight: 900;
    }
  }
}
.serch_ul {
  position: absolute;
  height: 70px;
  width: 100px;
  // background-color: #f00;
  top: 94px;
  left: 15px;
  z-index: 100;
  text-align: center;
  li {
    height: 35px;
    line-height: 30px;
    font-size: 18px;
  }
}
.selec {
  border: none;
}
.dailis {
  display: inline-block;
  // float: left;
  height: 62px;
  line-height: 1;

  .daili {
    text-align: center !important;
    // display: inline-block;
    float: left;
    border: 1px solid #1d33f5;
    border-radius: 20px;
    margin-left: 30px;
    width: 90px;
    height: 34px;
    margin-top: 14px;
    line-height: 34px;
  }
}
</style>


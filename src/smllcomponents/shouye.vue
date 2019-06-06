<template>
  <div class="shouye">
    <div class="serch_top">
      <div class="serch">
        <div class="serch_left" @click="showUl">
          <p class="serch_p">{{qiye}}</p>
          <i class="iconfont el-icon-arrow-down icon_down"></i>
          <span></span>
        </div>
        <input
          v-model="sousuovalue"
          @keyup.enter="getqiye2"
          type="text"
          :placeholder="qiyename"
          class="serch_inpu"
        >
        <i @click="getqiye2" class="iconfont el-icon-search icon_right"></i>
      </div>
      <ul v-show="show_s" class="serch_ul">
        <li @click="gotonamea" :class="show_name==1?activeClass:''">企业搜索</li>
        <li @click="gotoname" :class="show_name==0?activeClass:''">商品物码</li>
      </ul>
      <div v-show="show_name==1" class="dailis">
        <span class="daili" @click="gotid" :class="id==1?activeClass:(id==0?activeClass:'')">生产商</span>
        <span class="daili" @click="gotid1" :class="id==2?activeClass:''">代理商</span>
      </div>
      <div @click="goback" v-if="qiyeshu" class="fanhui">返回</div>
    </div>
    <div v-if="!qiyeshu">
      <div class="riska" style="borderBottom:1px solid #b3b3b3;">
        <!-- 风险预警 -->
        <risk op="!1"></risk>
      </div>
      <div>
        <div style="height:28px"></div>
        <!-- 核验机构 -->
        <heyan :homeyeList="homeyeList" show="!1"></heyan>
      </div>
    </div>
    <div
      v-if="wuma"
      v-show="index_show"
      style="width:100%;height:650px;background:#fff;position:relative;"
    >
      <!-- <div v-if="wuma"> -->
      <ul class="qiye_ul">
        <li>序号</li>
        <li>企业名称</li>
        <li>统一社会信用代码/组织机构代码</li>
      </ul>
      <ul class="qiye_ul" v-for="(qy,i) in qiyeList" :key="i">
        <li>{{i+1 +14*num}}</li>
        <li>
          <router-link :to="{name:'qiyezhenjian',params:{name:qy.orgName}}">{{qy.orgName}}</router-link>
        </li>
        <li>{{qy.orgCode}}</li>
      </ul>
      <div class="block fenye">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout=" prev, pager, next, jumper, total"
          :total="qiyeshu"
          :page-size="14"
          hide-on-single-page
          class="fenye_li"
        ></el-pagination>
      </div>
    </div>
    <div v-else style="width:100%;height:650px;background:#fff;position:relative;">
      <ul class="qiye_ul1">
        <li>序号</li>
        <li>商品物码</li>
        <li>名称</li>
        <li>生产商</li>
      </ul>
      <ul class="qiye_ul1" v-for="(qya,i) in qiyeList" :key="i">
        <li>{{i+1 +14*num}}</li>
        <li>{{qya.name}}</li>
        <li>
          <a
            :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+qya.name+'&type=1'"
          >{{qya.itemCode}}</a>
        </li>
        <li>{{qya.issuer}}</li>
      </ul>
      <div class="block fenye1">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout=" prev, pager, next, jumper, total"
          :total="qiyeshu"
          :page-size="14"
          hide-on-single-page
          class="fenye_li"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import risk from "../bigsmcomponents/risk.vue";
import heyan from "../bigsmcomponents/heyan.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      clla: "qiye_ula",
      cllb: "qiye_ulb",
      qiye: "企业搜索",
      show_s: false,
      show_name: 1,
      qiyename: "请输入企业名称",
      activeClass: "aa",
      name: localStorage.username,
      id: 1,
      sousuovalue: "",
      num: 0,
      zhonglei: 1,
      wuma: true,
      show_qiqye: false,
      index_show: false
    };
  },
  mounted() {
    this.getGoodListAJAX({
      url: "/local/getAbnormalCerts",
      pageSize: 8,
      cb: () => {}
    });
  },
  methods: {
    showUl() {
      this.show_s = !this.show_s;
    },
    goback() {
      this.$router.go(0);
    },
    gotoaaaa(e) {
      console.log(e.target.innerText);
    },
    gotid() {
      this.id = 1;
      this.zhonglei = 1;
      this.index_show = true;
      this.show_qiqye = true;
      if (this.sousuovalue) {
        this.wuma = true;
        this.getfuzzyQuery({
          url: "/workbench/search",
          codeToken: localStorage.codeToken,
          keyWord: this.sousuovalue,
          searchType: this.zhonglei,
          page: this.num,
          size: 14,
          cb: () => {}
        });
      }
      // console.log(this.id);
    },
    gotid1() {
      this.id = 2;
      this.zhonglei = 2;
      this.index_show = true;
      this.show_qiqye = true;
      if (this.sousuovalue) {
        this.getfuzzyQuery({
          url: "/workbench/search",
          codeToken: localStorage.codeToken,
          keyWord: this.sousuovalue,
          searchType: this.zhonglei,
          page: this.num,
          size: 14,
          cb: () => {}
        });
      }
      // console.log(this.id);
    },
    gotonamea() {
      this.show_name = 1;
      this.sousuovalue = "";
      console.log(this.show_name);
      this.qiye = "企业搜索";
      this.show_s = !this.show_s;
      this.qiyename = "请输入企业名称";
      if (qiyeshu) {
        this.$router.go(0);
      }
    },
    gotoname() {
      this.show_name = 0;
      this.zhonglei = 0;
      // this.id = 0;
      this.sousuovalue = "";
      console.log(this.show_name);
      this.qiye = "商品物码";
      this.show_s = !this.show_s;
      this.qiyename = "请输入物码信息";
      if (qiyeshu) {
        this.$router.go(0);
      }
    },
    handleCurrentChange(val) {
      console.log("当前页:" + val);
      this.num = val * 1 - 1;
      // console.log(this.statu);
      this.getfuzzyQuery({
        url: "/workbench/search",
        codeToken: localStorage.codeToken,
        keyWord: this.sousuovalue,
        searchType: this.zhonglei,
        page: this.num,
        size: 14,
        cb: () => {}
      });
    },
    getqiye2() {
      console.log(this.id);
      this.index_show = true;
      this.wuma = true;
      if (this.sousuovalue && this.show_name != 0) {
        console.log(this.id);
        console.log("8888");
        this.getfuzzyQuery({
          url: "/workbench/search",
          codeToken: localStorage.codeToken,
          keyWord: this.sousuovalue,
          searchType: this.zhonglei,
          page: this.num,
          size: 14,
          cb: () => {}
        });
      } else if (this.sousuovalue && this.show_name == 0) {
        console.log("6666");
        this.wuma = false;
        this.getfuzzyQuery({
          url: "/workbench/search",
          codeToken: localStorage.codeToken,
          keyWord: this.sousuovalue,
          searchType: this.zhonglei,
          page: this.num,
          size: 14,
          cb: () => {}
        });
      }
    },
    ...mapActions(["getGoodListAJAX", "getfuzzyQuery"])
  },
  components: {
    risk,
    heyan
  },
  computed: {
    ...mapState(["homeyeList", "qiyeshu", "qiyeList"])
  }
};
</script>

<style lang="scss" scoped>
.qiye_ula {
  display: none;
}
.qiye_ulb {
  display: block;
}
.fenye1 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 32px;
  padding: 0;
  background-color: #fff;
  .fenye_li {
    text-align: center !important;
  }
  .number {
    text-align: center !important;
  }
}
.fenye {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 32px;
  padding: 0;
  background-color: #fff;
  .fenye_li {
    text-align: center !important;
  }
  .number {
    text-align: center !important;
  }
}
.qiye_ul {
  width: 100%;
  overflow: hidden;
  padding-left: 30px;
  li {
    float: left;
    text-align: left;
    height: 40px;
    line-height: 40px;
    a {
      color: #1d33f5;
    }
  }
  li:first-child {
    width: 20%;
  }
  li:nth-child(2) {
    width: 35%;
  }
  li:nth-child(3) {
    width: 35%;
  }
}
.qiye_ul1 {
  width: 100%;
  overflow: hidden;
  padding-left: 30px;
  li {
    float: left;
    text-align: left;
    height: 40px;
    line-height: 40px;
    a {
      color: #1d33f5;
    }
  }
  li:first-child {
    width: 10%;
  }
  li:nth-child(2) {
    width: 30%;
  }
  li:nth-child(3) {
    width: 30%;
  }
  li:nth-child(4) {
    width: 30%;
  }
}
.shouye {
  width: 100%;
  height: 80vh;
  background-color: #f8f8f8;
}
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
    span {
      display: inline-block;
      background-color: #f00;
      margin: 0 8px;
      width: 1px;
      height: 18px;
      line-height: 60px;
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
.riska {
  border-radius: 8px;
  box-shadow: 0 0 2px 0 #b3b3b3;
}
.fanhui {
  color: #fff;
  float: right;
  margin-right: 20px;
  margin-top: 14px;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
  height: 35px;
  width: 80px;
  background-color: #1d33f5;
}
</style>


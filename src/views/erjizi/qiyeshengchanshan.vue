<template>
  <div class="zhengjian_home">
    <div v-if="show_daili" class="zhengjian">
      <div class="zhengjian_div">
        <p class="zhengjian_name">
          <span class="Mydaili">生产商：</span>
          <a
            :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+this.$route.params.name+'&type=1'"
          >{{this.$route.params.name}}</a>
        </p>
        <div @click="gotoMywuma" class="shanpin">导出</div>
        <div @click="setswitcha" style="backgroundColor:#d3d3d3;" class="shanpin shanpin1">
          {{shanpin_ul}}
          <i class="el-icon-caret-bottom"></i>
          <ul v-show="show_switcha" class="shanpin_ul">
            <li @click="setshanpin_ul">全部</li>
            <li @click="setshanpin_ul">正常</li>
            <li @click="setshanpin_ul">异常</li>
          </ul>
        </div>
        <div @click="gotoback" class="zhengjian_fanhui">返回</div>
      </div>
      <ul class="zhegjian_ul zhegjian_ul1 xian">
        <li>序号</li>
        <li>代理商名称</li>
        <li>资格合格证明</li>
        <li>资格状态</li>
        <li>操作</li>
      </ul>
      <ul class="zhegjian_ul" v-for="(qy,i) in qiyewumaList" :key="i">
        <li style="margin-top:30px;">{{i+1+14*num}}</li>
        <li style="margin-top:30px;">
          <a
            style="text-decoration: underline;"
            :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+qy.name+'&type=1'"
          >{{qy.name}}</a>
        </li>
        <li>
          <p v-for="(xh,p) in qy.certs" :key="p">
            {{xh.certTypeCn}}
            <span
              :class="xh.status.status=='正常'?claa:xh.status.status=='异常'?clab:clac"
            ></span>
            <br>
          </p>
        </li>
        <li style="margin-top:30px">{{qy.status}}</li>
        <li>
          <router-link
            :to="{name:'qiyewuma',params:{name:qy.name}}"
            style="margin-top:5px;height:30px;display:inline-block"
          >查看商品</router-link>
          <br>
          <a style="margin-top:10px" :data-name="qy.name" @click="setshengcahn">关联生产商</a>
        </li>
      </ul>
      <div class="block fenye">
        <div class="left">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout=" prev, pager, next, jumper, total"
            :total="qiyewumashu"
            :page-size="14"
            hide-on-single-page
            class="fenye_li"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div v-else class="zhengjian">
      <div class="zhengjian_div">
        <p class="zhengjian_name">
          <span class="Mydaili">代理商：</span>
          <a
            :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+this.$route.params.name+'&type=1'"
          >{{name}}</a>
        </p>
        <div @click="gotoMywuma" class="shanpin">导出a</div>
        <div @click="setswitcha" style="backgroundColor:#d3d3d3;" class="shanpin shanpin1">
          {{shanpin_ul}}
          <i class="el-icon-caret-bottom"></i>
          <ul v-show="show_switcha" class="shanpin_ul">
            <li @click="setshanpin_ul">全部</li>
            <li @click="setshanpin_ul">正常</li>
            <li @click="setshanpin_ul">异常</li>
          </ul>
        </div>
        <div @click="gotoback" class="zhengjian_fanhui">返回</div>
      </div>
      <ul class="zhegjian_ul zhegjian_ul1 xian">
        <li>序号</li>
        <li>代理商名称</li>
        <li>资格合格证明</li>
        <li>资格状态</li>
        <li>操作</li>
      </ul>
      <ul class="zhegjian_ul" v-for="(qy,i) in qiyewumaList" :key="i">
        <li style="margin-top:30px;">{{i+1+14*num}}</li>
        <li style="margin-top:30px;">
          <a
            style="text-decoration: underline;"
            :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+qy.name+'&type=1'"
          >{{qy.name}}</a>
        </li>
        <li>
          <p>{{qy.certs[0].certTypeCn}}</p>
          <p>{{qy.certs[1].certTypeCn}}</p>
        </li>
        <li style="margin-top:30px">{{qy.status}}</li>
        <li>
          <router-link
            :to="{name:'qiyewuma',params:{name:qy.name}}"
            style="margin-top:5px;height:30px;display:inline-block"
          >查看商品</router-link>
          <br>
          <a style="margin-top:10px" :data-name="qy.name" @click="settype">关联代理商</a>
        </li>
      </ul>
      <div class="block fenye">
        <div class="left">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout=" prev, pager, next, jumper, total"
            :total="qiyewumashu"
            :page-size="14"
            hide-on-single-page
            class="fenye_li"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.claa {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../assets/images/youxiao.png) no-repeat center center;
}
.clab {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../assets/images/yichang.png) no-repeat center center;
}
.clac {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../assets/images/loading.png) no-repeat center center;
}
.fenye {
  text-align: left;
  height: 32px;
  padding: 0;
  background-color: #fff;
  overflow: hidden;
  .left {
    float: left;
    .fenye_li {
      text-align: center !important;
    }
    .number {
      text-align: center !important;
    }
  }
}
.zhengjian_home {
  width: 1920px;
  margin: 0 auto;
  .zhengjian {
    margin-left: 232px;
    margin-top: 30px;
    padding-top: 10px;
    height: 700px;
    padding-left: 3%;
    width: 1450px;
    position: relative;
    overflow-y: scroll;
    background-color: #fff;
    .zhengjian_div {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #d5d5d5;
      .zhengjian_name {
        display: inline-block;
        span {
          color: #003;
        }
        a {
          color: #1d33f5;
          text-decoration: underline;
        }
      }
      .zhengjian_fanhui {
        float: right;
        margin-right: 30px;
        width: 120px;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        background-color: #1d33f5;
        color: #fff;
      }
      .shanpin {
        display: inline-block;
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #1d33f5;
        margin-left: 40px;
        text-align: center !important;
      }
      .shanpin:hover {
        background-color: #1d33f5;
        color: #fff;
      }
      .shanpin1:hover {
        color: #000;
      }
    }
    .xian {
      border-bottom: 1px solid #070606;
    }

    .zhegjian_ul {
      width: 100%;
      height: 90px;
      overflow: hidden;
      padding: 10px 0;
      li {
        float: left;
        text-align: left;
        height: 90px;

        p {
          height: 30px;
          line-height: 30px;
        }
        a {
          color: #1d33f5;
        }
      }
      li:first-child {
        width: 10%;
      }
      li:nth-child(2) {
        width: 20%;
      }
      li:nth-child(3) {
        width: 20%;
      }
      li:nth-child(4) {
        width: 20%;
      }
      li:nth-child(5) {
        width: 20%;
      }
    }
    .zhegjian_ul1 {
      height: 40px;
      line-height: 40px;
      li {
        height: 40px;
      }
    }
  }
  .shanpin1 {
    position: relative;
    width: 117px !important;
    i {
      display: inline-block;
      font-size: 18px;
    }
    .shanpin_ul {
      position: absolute;
      top: 41px;
      left: 0;
      width: 117px;
      height: 90px;
      background-color: #fff;
      color: #a1a1a1;
      li {
        height: 30px;
        border-radius: 8px;
        line-height: 30px;
        text-align: center;
      }
      li:hover {
        background-color: #1d33f5;
        color: #fff;
      }
    }
  }
}
</style>


<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      num: 0,
      show_daili: true,
      type: 1,
      name: this.$route.params.name,
      shanpin_ul: "资格状态",
      show_switcha: false,
      typetwo: 1,
      shanpin_ula: "",
      claa: "claa",
      clab: "clab",
      clac: "clac"
    };
  },
  mounted() {
    this.getRelatedEnt({
      url: "/workbench/getRelatedEnt",
      keyWord: this.$route.params.name,
      keyWordType: this.type,
      page: 0,
      size: 14,
      type: 2,
      cb: () => {}
    });
  },
  methods: {
    handleCurrentChange(val) {
      console.log("当前页:" + val);
      this.num = val * 1 - 1;
      // console.log(this.statu);
      this.getRelatedEnt({
        url: "/workbench/getRelatedEnt",
        keyWord: this.$route.params.name,
        keyWordType: this.type,
        page: this.num,
        size: 14,
        type: 2,
        cb: () => {}
      });
    },
    gotoback() {
      this.$router.go(-1);
    },
    settype(e) {
      this.type = 1;
      this.show_daili = !this.show_daili;
      this.name = e.target.dataset.name;
      this.shanpin_ul = "资格状态";
      this.getRelatedEnt({
        url: "/workbench/getRelatedEnt",
        keyWord: this.name,
        keyWordType: this.type,
        page: this.num,
        size: 14,
        type: 2,
        cb: () => {}
      });
    },
    setshengcahn(e) {
      this.type = 2;
      console.log(e);
      this.show_daili = !this.show_daili;
      this.name = e.target.dataset.name;
      console.log(this.name);
      this.shanpin_ul = "资格状态";
      this.getRelatedEnt({
        url: "/workbench/getRelatedEnt",
        keyWord: this.name,
        keyWordType: this.type,
        page: this.num,
        size: 14,
        type: 1,
        cb: () => {}
      });
    },
    gotoMywuma() {
      //导出模块
      // this.$router.push('{name:}')
      // this.$router.push({
      //   name: "qiyewuma",
      //   params: { name: this.$route.params.name }
      // });
      // },
    },
    setswitcha() {
      this.show_switcha = !this.show_switcha;
      console.log(this.show_switcha);
      console.log(222);
    },
    setshanpin_ul(e) {
      // this.show_switcha = !this.show_switcha;
      // console.log(this.shanpin_ul);
      this.shanpin_ul = e.target.textContent;
      if (this.show_daili) {
        this.type = 1;
        this.typetwo = 2;
        if (this.shanpin_ul == "全部") {
          this.shanpin_ula = "";
        } else {
          this.shanpin_ula = this.shanpin_ul;
        }
      } else {
        this.type = 2;
        this.typetwo = 1;
        if (this.shanpin_ul == "全部") {
          this.shanpin_ula = "";
        } else {
          this.shanpin_ula = this.shanpin_ul;
        }
      }

      console.log(this.type);

      console.log(this.shanpin_ul);
      this.getRelatedEnt({
        url: "/workbench/getRelatedEnt",
        keyWord: this.name,
        keyWordType: this.type,
        page: this.num,
        size: 14,
        type: this.typetwo,
        status: this.shanpin_ula,
        cb: () => {}
      });
    },
    ...mapActions(["getRelatedEnt"])
  },
  computed: {
    ...mapState(["qiyewumaList", "qiyewumashu"])
  }
};
</script>

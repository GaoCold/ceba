<template>
  <div class="zhengjian_home">
    <div class="zhengjian">
      <div class="zhengjian_div">
        <p class="zhengjian_name">
          <span>生产商：</span>
          <a
            :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+this.$route.params.name+'&type=1'"
          >{{this.$route.params.name}}</a>
        </p>
        <div @click="gotoMywuma" class="shanpin">查看商品物码</div>
        <div @click="gotoMydaili" class="shanpin">查看关联代理商</div>
        <div @click="gotoback" class="zhengjian_fanhui">返回</div>
      </div>
      <ul class="zhegjian_ul xian">
        <li>序号</li>
        <li>证件编号</li>
        <li>资格合格证明</li>
        <li>是否上传</li>
        <li>&emsp;</li>
      </ul>
      <ul class="zhegjian_ul" v-for="(qy,i) in qiyezhengshuList" :key="i">
        <li>{{i+1}}</li>
        <li>{{qy.certNo?qy.certNo:'-'}}</li>
        <li>{{qy.certTypeCn}}</li>
        <li>{{qy.status.isUpload}}</li>
        <li>
          <router-link :to="{}">查看详情</router-link>
        </li>
      </ul>
      <div class="block fenye">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout=" prev, pager, next, jumper, total"
          :total="qiyezhengshu"
          :page-size="14"
          hide-on-single-page
          class="fenye_li"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      num: 0
    };
  },
  mounted() {
    this.getCertsByEntName({
      url: "/workbench/getCertsByEntName",
      entName: this.$route.params.name,
      page: 0,
      size: 14,
      cb: () => {}
    });
  },
  methods: {
    handleCurrentChange(val) {
      console.log("当前页:" + val);
      this.num = val * 1 - 1;
      // console.log(this.statu);
      this.getCertsByEntName({
        url: "/workbench/getCertsByEntName",
        entName: this.$route.params.name,
        page: this.num,
        size: 14,
        cb: () => {}
      });
    },
    gotoback() {
      this.$router.go(-1);
    },
    gotoMywuma() {
      // this.$router.push('{name:}')
      this.$router.push({
        name: "qiyewuma",
        params: { name: this.$route.params.name }
      });
    },
    gotoMydaili() {
      this.$router.push({
        name: "qiyeshengchanshan",
        params: { name: this.$route.params.name }
      });
    },
    ...mapActions(["getCertsByEntName"])
  },
  computed: {
    ...mapState(["qiyezhengshuList", "qiyezhengshu"])
  }
};
</script>

<style lang="scss" scoped>
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
    }
    .xian {
      border-bottom: 1px solid #d5d5d5;
    }
    .zhegjian_ul {
      width: 100%;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      li {
        float: left;
        text-align: left;
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
  }
}
</style>


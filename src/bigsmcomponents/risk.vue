<template>
  <div class="risktop">
    <div class="early">
      <p class="xian"></p>
      <span>风险预警</span>
      <strong @click="gotoFenXian" v-if="op">更多>></strong>
    </div>
    <dl class="sequence">
      <dd>商品</dd>
      <dd>生产企业</dd>
      <dd>最后公告日期</dd>
      <dd>抽检不合格次数/抽检总数</dd>
      <dd>&emsp;</dd>
    </dl>
    <dl class="sequence" v-for="(fx,i) in fenxianList" :key="i">
      <dd>{{fx.productName}}</dd>
      <dd>{{fx.entName}}</dd>
      <dd>{{fx.lastNoticeDate}}</dd>
      <dd>{{fx.unqualifiedRate}}</dd>
      <dd>
        <router-link
          style="color:#255fc6;"
          :to="{name:'xiangqing',params:{enterprise:fx.entName}}"
        >查看详情</router-link>
      </dd>
    </dl>
    <div v-if="resul" class="kong"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["op"],
  data() {
    return {
      resul: true
    };
  },
  methods: {
    gotoFenXian() {
      this.$router.push({ name: "fenxian" });
    },
    ...mapActions(["getFenxianList"])
  },
  mounted() {
    // http.get("/local/getRiskWarns", {}).then(res => {
    //   this.fenxian.push(res.data.content);
    //   console.log(this.fenxian[0][0]);
    // });
    var that = this;
    that.getFenxianList({
      url: "/local/getRiskWarns",
      cb: () => {}
    });
  },
  computed: {
    ...mapState(["fenxianList"])
  }
};
</script>

<style lang="scss" scoped>
.risktop {
  width: 1640px;
  background-color: #fff;
  text-align-last: left;
  .early {
    height: 51px;
    border-bottom: 1px solid #eee;

    span {
      display: inline-block;
      line-height: 51px;
      color: #255fc6;
    }
    strong {
      float: right;
      margin-right: 20px;
      line-height: 51px;
      color: #255fc6;
      cursor: pointer;
    }
    .xian {
      display: inline-block;
      line-height: 51px;
      width: 4px;
      height: 30px;
      background-color: #255fc6;
      margin: 10px 8px 10px 0;
      vertical-align: top;
    }
  }
  .sequence {
    width: 100%;
    // padding-left: 0.35rem;
    padding-top: 15px;
    overflow: hidden;
    dd {
      float: left;
      // font-size: 0.18rem;
    }
    dd:first-child {
      width: 1rem;
      margin-left: 2%;
    }
    dd:nth-child(2) {
      width: 1.5rem;
    }
    dd:nth-child(3) {
      width: 2rem;
    }
    dd:nth-child(4) {
      width: 1rem;
    }
    dd:nth-child(5) {
      width: 0.4rem;
      color: #255fc6;
    }
  }
  .kong {
    height: 1rem;
  }
}
</style>


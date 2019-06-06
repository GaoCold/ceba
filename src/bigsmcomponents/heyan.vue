<template>
  <div class="risktop">
    <div class="early" v-if="show">
      <p class="xian"></p>
      <span>证件核验</span>
      <strong class="stong" @click="gotoFenXian">更多>></strong>
    </div>
    <ul :class="show?heyan_ul:heyan_ula">
      <li>序号</li>
      <li>证件编号</li>
      <li style="color:#000">企业名称</li>
      <li>证件类别</li>
      <li>颁发日期</li>
      <li>有效期至</li>
      <li>发证机构</li>
      <li>核验时间</li>
      <li>&emsp;</li>
      <li>&emsp;</li>
    </ul>
    <ul v-for="(ho,i) in homeyeList" :key="i" class="heyan_ul">
      <li>{{i+1}}</li>
      <li>{{ho.status}}</li>
      <li>{{ho.entName}}</li>
      <li style="color:#d8d8d8">{{ho.typeDetail.name}}</li>
      <li>-</li>
      <li>-</li>
      <li>暂无数据暂无数据啊</li>
      <li>{{ho.createTime.substring(0,19)}}</li>
      <li>
        <!-- 关联企业需要写一个大路由中嵌套小路由 -->
        <a
          target="_blank"
          style="text-align: center;paddingLeft:15px;"
          :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+ho.entName+'&type=1&from=core'"
        >关联企业</a>
      </li>
      <li>
        <a
          target="_blank"
          style="text-align: center;paddingLeft:15px;"
          :href="ho.typeDetail.name=='营业执照'?'http://test.zhchacha.com/detailed_infomation.html?txt='+ho.entName+'&type=1':
         'http://test.zhchacha.com/certificate_report_template.html?certid=null&name='+ho.entName+'&code='+ho.certType+'&type=1'"
        >查看详情</a>
      </li>
    </ul>
    <!-- <div v-if="resul" class="kong"></div> -->
  </div>
</template>
<script>
import { http } from "../utils";
import { mapState, mapActions } from "vuex";
export default {
  props: ["homeyeList", "show"],
  data() {
    return {
      resul: true,
      heyan_ul: "heyan_ul",
      heyan_ula: "heyan_ula"
    };
  },
  methods: {
    gotoFenXian() {
      this.$router.push({ name: "zhengjian" });
    }
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
    border-bottom: 1px solid #d4d4d4;
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
    }
    .stong {
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
  .heyan_ul {
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    li {
      float: left;
      a {
        color: #547bce;
      }
    }
    li:first-child {
      width: 4%;
      margin-left: 2%;
    }
    li:nth-child(2) {
      width: 13%;
    }
    li:nth-child(3) {
      color: #547bce;
      width: 18%;
    }
    li:nth-child(4) {
      width: 11%;
    }
    li:nth-child(5) {
      width: 8%;
    }
    li:nth-child(6) {
      width: 8%;
    }
    li:nth-child(7) {
      width: 11%;
    }
    li:nth-child(8) {
      width: 11%;
    }
    li:nth-child(9) {
      width: 6%;
      text-align: center;
    }
    li:nth-child(10) {
      width: 6%;
      text-align: center;
    }
  }
  .heyan_ula {
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    li {
      float: left;
      a {
        color: #547bce;
      }
    }
    li:first-child {
      width: 4%;
      margin-left: 2%;
    }
    li:nth-child(2) {
      width: 13%;
    }
    li:nth-child(3) {
      color: #547bce;
      width: 18%;
    }
    li:nth-child(4) {
      width: 11%;
    }
    li:nth-child(5) {
      width: 8%;
    }
    li:nth-child(6) {
      width: 8%;
    }
    li:nth-child(7) {
      width: 11%;
    }
    li:nth-child(8) {
      width: 11%;
    }
    li:nth-child(9) {
      width: 6%;
      text-align: center;
    }
    li:nth-child(10) {
      width: 6%;
      text-align: center;
    }
  }
  .kong {
    height: 1rem;
  }
}
</style>


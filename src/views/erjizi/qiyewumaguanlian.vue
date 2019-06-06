<template>
  <div class="zhengjian_home">
    <div class="zhengjian">
      <div class="zhengjian_div">
        <div class="zhengjian_diva">
          <p class="zhengjian_name">
            <span>物码:</span>
            <a
              :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+this.$route.params.name+'&type=1'"
            >{{this.$route.params.itemCode}}</a>
          </p>
          <p class="zhengjian_name">
            <span>生产商:</span>
            <a
              :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+this.$route.params.name+'&type=1'"
            >{{this.$route.params.name}}</a>
          </p>
        </div>
        <div class="souserch">
          <input
            type="text"
            v-model="souserchvalue"
            @keyup.enter="souserchwuma"
            placeholder="请输入商品物码"
          >
          <i class="el-icon-search" @click="souserchwuma"></i>
        </div>
        <div @click="gotoback" class="zhengjian_fanhui">返回</div>
      </div>
      <ul class="zhegjian_ul xian">
        <li>序号</li>
        <li>证件编号</li>
        <li>资格合格证明</li>
        <li>颁发日期</li>
      </ul>
      <ul class="zhegjian_ul" v-for="(qy,i) in qiyewumaList" :key="i">
        <li>{{i+1+14*num}}</li>
        <li>{{qy.certNo}}</li>
        <li>{{qy.certType}}</li>
        <li>{{qy.issueDate}}</li>
      </ul>
      <div class="block fenye">
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
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      num: 0,
      souserchvalue: "",
      itemCode: this.$route.params.itemCode
    };
  },
  mounted() {
    this.getCertsByItemCode({
      url: "/workbench/getCertsByItemCode",
      itemCode: this.$route.params.itemCode,
      page: 0,
      size: 14,
      cb: () => {}
    });
  },
  methods: {
    souserchwuma() {
      if (this.souserchvalue) {
        this.getCertsByItemCode({
          url: "/workbench/getCertsByItemCode",
          itemCode: this.$route.params.itemCode,
          page: 0,
          size: 14,
          cb: () => {}
        });
      }
    },
    gotoback() {
      this.$router.go(-1);
    },
    handleCurrentChange(val) {
      console.log("当前页:" + val);
      this.num = val * 1 - 1;
      // console.log(this.statu);
      this.getCertsByItemCode({
        url: "/workbench/getCertsByItemCode",
        itemCode: this.souserchvalue,
        page: 0,
        size: 14,
        cb: () => {}
      });
    },
    ...mapActions(["getCertsByItemCode"])
  },
  computed: {
    ...mapState(["qiyewumaList", "qiyewumashu"])
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
      height: 74px;
      line-height: 74px;
      text-align: left;
      margin-bottom: 20px;
      border-bottom: 1px solid #d5d5d5;
      .zhengjian_diva {
        display: inline-block;
        height: 70px;
        width: 300px;
        vertical-align: top;
        .zhengjian_name {
          float: left;
          height: 35px;
          font-size: 12px;
          width: 280px;
          line-height: 35px;
          span {
            color: #003;
          }
          a {
            color: #1d33f5;
            text-decoration: underline;
          }
        }
      }
      .souserch {
        display: inline-block;
        margin-left: 20px;
        width: 220px;
        border: 1px solid #d5d5d5;
        height: 38px;
        border-radius: 20px;
        margin-top: 10px;
        line-height: 38px;
        text-align: center;
        input {
          border: none;
          width: 120px;
          height: 36px;
          vertical-align: top;
        }
        i {
          display: inline-block;
          width: 26px;
          margin-left: 30px;
          font-size: 26px;
          height: 26px;
          margin-top: 6px;
        }
      }
      .zhengjian_fanhui {
        float: right;
        margin-right: 30px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
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
          text-decoration: underline;
        }
      }
      li:first-child {
        width: 15%;
      }
      li:nth-child(2) {
        width: 22%;
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

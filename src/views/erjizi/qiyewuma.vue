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
        <li>商品物码</li>
        <li>资格合格证明</li>
        <li>颁发日期</li>
        <li>&emsp;</li>
      </ul>
      <div v-if="qiyewumashu!=0">
        <ul class="zhegjian_ul" v-for="(qy,i) in qiyewumaList" :key="i">
          <li>{{i+1+14*num}}</li>
          <li>
            <router-link :to="{name:'wumaxiangqing',params:{code:qy.code}}">{{qy.code}}</router-link>
          </li>
          <li>{{qy.certi}}</li>
          <li>{{qy.issueDate}}</li>
          <li>
            <router-link
              :to="{name:'qiyewumaguanlian',params:{itemCode:qy.code,name}}"
              style="text-decoration:none"
            >关联证明</router-link>
          </li>
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
      <div v-else class="rever">
        <div class="noerve">
          <img src="../../assets/images/no_result.png" alt="什么都没有">
          <p>抱歉,没有找到相关的信息!</p>
        </div>
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
      name: this.$route.params.name
    };
  },
  mounted() {
    this.getItemCodesByEnt({
      url: "/workbench/getItemCodesByEnt",
      name: this.$route.params.name,
      page: 0,
      size: 14,
      type: 1,
      cb: () => {}
    });
  },
  methods: {
    souserchwuma() {
      if (this.souserchvalue) {
        this.getItemCodesByEnt({
          url: "/workbench/getItemCodesByEnt",
          name: this.$route.params.name,
          itemCode: this.souserchvalue,
          page: 0,
          size: 14,
          type: 1,
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
      this.getItemCodesByEnt({
        url: "/workbench/getItemCodesByEnt",
        name: this.$route.params.name,
        page: 0,
        size: 14,
        type: 1,
        cb: () => {}
      });
    },
    ...mapActions(["getItemCodesByEnt"])
  },
  computed: {
    ...mapState(["qiyewumaList", "qiyewumashu"])
  }
};
</script>


<style lang="scss" scoped>
.rever {
  width: 100%;
  //   background-color: #f00;
  height: 300px;
  text-align: center;
  .noerve {
    display: inline-block;
    width: 200px;
    height: 150px;
    margin-top: 75px;
    text-align: center;
    img {
      display: inline-block;
      width: 95px;
      height: 100%;
    }
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
      .souserch {
        display: inline-block;
        margin-left: 20px;
        width: 220px;
        border: 1px solid #d5d5d5;
        height: 38px;
        border-radius: 20px;
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

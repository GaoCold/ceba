<template>
  <div style="margin-left:232px;padding-top:30px;position:relative">
    <ul class="hezuo_ul const_ul">
      <li>序号</li>
      <li>企业名称</li>
      <li>企业产编</li>
      <li>大类</li>
      <li>上级企业</li>
      <li>&emsp;</li>
    </ul>
    <ul class="hezuo_ul" v-for="(hz,i) in hezuoList" :key="i">
      <li>{{i+1+14 * num}}</li>
      <li>{{hz.supplierName}}</li>
      <li>{{hz.supplierCode}}</li>
      <li>{{hz.cataName}}</li>
      <li>{{hz.chiefName}}</li>
      <li>
        <a
          :href="'http://test.zhchacha.com/detailed_infomation.html?txt='+hz.supplierName+'&type=1&from=core'"
        >关联企业</a>
      </li>
    </ul>
    <div style="height:32px;width:100%;background-color:#fff"></div>
    <div class="block fenye">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout=" prev, pager, next, jumper, total"
        :total="totalElements"
        :page-size="14"
        class="fenye_li"
      ></el-pagination>
    </div>
    <fenye :url="url" shoenum="14"></fenye>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      num: 0,
      url: "/local/getRelatedEnt"
    };
  },
  methods: {
    gotoHezuoList() {
      this.$router.push({ name: "zhengjian" });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = val * 1 - 1;
      this.gotoHezuoList({
        url: "/local/getRelatedEnt",
        codeToken: localStorage.codeToken,
        entName: "内蒙古蒙牛乳业(集团)股份有限公司",
        pageIndex: this.num,
        pageSize: 14,
        cb: () => {}
      });
    },
    ...mapActions(["gotoHezuoList"])
  },
  computed: {
    ...mapState(["hezuoList", "totalElements"])
  },
  mounted() {
    this.gotoHezuoList({
      url: "/local/getRelatedEnt",
      codeToken: localStorage.codeToken,
      entName: "内蒙古蒙牛乳业(集团)股份有限公司",
      pageIndex: 0,
      pageSize: 14,
      cb: () => {}
    });
  }
};
</script>


<style lang="scss" scoped>
.const_ul {
  border-bottom: 1px solid #d5d5d5;
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
.hezuo_ul {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  text-align-last: left;
  line-height: 50px;
  li {
    float: left;
    height: 50px;
    a {
      color: #547bce;
    }
  }
  li:first-child {
    width: 0.3rem;
    margin-left: 0.25rem;
  }
  li:nth-child(2) {
    width: 1.5rem;
  }
  li:nth-child(3) {
    width: 0.85rem;
  }
  li:nth-child(4) {
    width: 0.85rem;
  }
  li:nth-child(5) {
    width: 1.5rem;
  }
  li:nth-child(6) {
    width: 0.5rem;
  }
}
</style>


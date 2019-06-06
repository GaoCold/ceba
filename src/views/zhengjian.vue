<template>
  <div style="margin-left:232px;padding-top:30px;">
    <div class="heyan_list">
      <ul class="heyan_ul">
        <li data-id="0" :class="id==0?aa:(id==9?bb:bb)" @click="setOne" data-name="全部">全部</li>
        <li data-id="1" :class="id==1?aa:(id==9?bb:bb)" @click="setOne" data-name="有效">有效</li>
        <li data-id="2" :class="id==2?aa:(id==9?aa:bb)" @click="setOne" data-name="撤销">撤销</li>
        <li data-id="3" :class="id==3?aa:(id==9?aa:bb)" @click="setOne" data-name="暂停">暂停</li>
        <li data-id="4" :class="id==4?aa:(id==9?aa:bb)" @click="setOne" data-name="注销">注销</li>
        <li data-id="5" :class="id==5?aa:(id==9?aa:bb)" @click="setOne" data-name="过期失效">过期失效</li>
        <li data-id="6" :class="id==6?aa:(id==9?bb:bb)" @click="setOne" data-name="核验中">核验中</li>
        <li data-id="7" :class="id==7?aa:(id==9?aa:bb)" @click="setOne" data-name="不存在">不存在</li>
      </ul>
      <div class="heyan_div">
        <p>导入</p>
        <el-select class="sele" @change="optiona" v-model="value" clearable placeholder="请选择证件类型">
          <el-option
            v-for="item in zhengshuList"
            :key="item.name"
            :label="item.name"
            :value="item.id"
            :id="item.id"
            :classify="item.classify"
          >{{item.name}}</el-option>
        </el-select>
      </div>
    </div>
    <div style="height:100%;padding-bottom:50px;background-color:#fff;position:relative">
      <heyan :homeyeList="zhengjianList" :key="statu"></heyan>
      <div class="block fenye" v-if="zhengjianyeshu>16">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout=" prev, pager, next, jumper, total"
          :total="zhengjianyeshu"
          :page-size="16"
          class="fenye_li"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import heyan from "../bigsmcomponents/heyan.vue";
export default {
  components: {
    heyan
  },
  data() {
    return {
      sousuo: "",
      statu: "撤销,暂停,注销,过期失效,不存在",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      id: 9,
      aa: "aa",
      bb: "bb"
    };
  },
  methods: {
    setfalg() {},
    setOne(e) {
      this.id = e.target.dataset.id;

      //版本一 每次点击都会将value值设为0
      // this.value = "";
      console.log(e.target.dataset.id);
      // console.log(JSON.stringify(e.target.dataset.name));
      if (e.target.dataset.name == "全部") {
        this.statu = "";
      } else {
        this.statu = e.target.dataset.name;
      }
      this.getCertList({
        url: "/local/getCertList",
        codeToken: localStorage.codeToken,
        status: this.statu,
        certType: this.value,
        pageIndex: 0,
        pageSize: 16,
        cb: () => {}
      });
    },
    optiona(val) {
      console.log(val);
      console.log(this.statu);
      this.getCertList({
        url: "/local/getCertList",
        codeToken: localStorage.codeToken,
        pageIndex: this.num,
        status: this.statu,
        certType: val,
        pageSize: 16,
        cb: () => {}
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = val * 1;
      // console.log(this.statu);
      this.getCertList({
        url: "/local/getCertList",
        codeToken: localStorage.codeToken,
        pageIndex: this.num,
        status: this.statu,
        pageSize: 16,
        cb: () => {}
      });
    },
    ...mapActions(["getCertList", "getCertTypes"])
  },
  mounted() {
    console.log(this.statu);
    this.getCertList({
      url: "/local/getCertList",
      pageIndex: 0,
      pageSize: 16,
      status: this.statu,
      cb: () => {}
    });
    this.getCertTypes({
      url: "/local/getCertTypes",
      codeToken: localStorage.codeToken,
      cb: () => {}
    });
  },
  computed: {
    ...mapState(["zhengjianList", "zhengjianyeshu", "zhengshuList"])
  }
};
</script>


<style lang="scss" scoped>
.aa {
  background-color: #1d33f5;
  color: #fff;
}
.bb {
  background-color: #fff;
  color: #000;
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
.heyan_list {
  width: 100%;
  overflow: hidden;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  padding-bottom: 13px;
  border-bottom: 1px solid #d4d4d4;
  .heyan_ul {
    float: left;
    li {
      float: left;
      padding: 0 13px;
      margin-left: 20px;
      height: 45px;
      line-height: 45px;
      border-radius: 20px;
    }
  }
  .heyan_div {
    float: right;
    p {
      display: inline-block;
      width: 98px;
      height: 45px;
      background-color: #255fc6;
      border-radius: 30px;
      line-height: 45px;
      color: #fff;
    }
    .sele {
      display: inline-block;
      height: 45px;
      margin-left: 20px;
      border-radius: 20px;
      option {
        border-radius: 20px;
      }
    }
  }
}
</style>


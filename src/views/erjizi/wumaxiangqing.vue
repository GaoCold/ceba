<template>
  <div class="wuma_xqing">
    <div class="wuma_xqing_top">
      <div class="wuma_xqing_top_left">
        <img src="../../assets/images/gs.png" alt="暂无数据">
      </div>
      <ul class="wuma_xqing_top_right">
        <li class="wuma_xqing_top_right_left">
          <p>
            <span>商品条码：</span>
            <span>{{wumaxiangqingList.code}}</span>
          </p>
          <p>
            <span>产品商标：</span>
            <span>{{wumaxiangqingList.brandName}}</span>
          </p>
          <p>
            <span>型号规格：</span>
            <span>{{wumaxiangqingList.spec}}</span>
          </p>
          <p>
            <span>产品描述：</span>
            <span>-</span>
          </p>
        </li>
        <li class="wuma_xqing_top_right_left">
          <p>
            <span>名称：</span>
            <span>{{wumaxiangqingList.productName}}</span>
          </p>
          <p>
            <span>发布厂家：</span>
            <span>{{wumaxiangqingList.entName}}</span>
          </p>
        </li>
        <li class="wuma_xqing_top_right_left">
          <p>
            <span>条码状态：</span>
            <br>
            <span>{{wumaxiangqingList.checkResult}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="wuma_xqing_content">
      <h4>包装/尺寸/重量</h4>
      <ul class="wuma_xqing_content_ul">
        <li>
          <p>
            <span>最小包装：</span>
            <span>-</span>
          </p>
          <p>
            <span>重量：</span>
            <span>-</span>
          </p>
          <dl>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>正面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>侧面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>背面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>45°</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>垂直</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>俯视</p>
            </dd>
          </dl>
        </li>
        <li>
          <p>
            <span>中包装：</span>
            <span>-</span>
          </p>
          <p>
            <span>重量：</span>
            <span>-</span>
          </p>
          <dl>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>正面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>侧面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>背面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>45°</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>垂直</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>俯视</p>
            </dd>
          </dl>
        </li>
        <li>
          <p>
            <span>大包装：</span>
            <span>-</span>
          </p>
          <p>
            <span>重量：</span>
            <span>-</span>
          </p>
          <dl>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>正面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>侧面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>背面</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>45°</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>垂直</p>
            </dd>
            <dd>
              <div>
                <img src="../../assets/images/gs.png" alt>
              </div>
              <p>俯视</p>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="wuma_xqing_bottom">
      <ul class="wuma_xqing_bottom_ul">
        <li>序号</li>
        <li>商品合格证明</li>
        <li>颁发日期</li>
        <li>操作</li>
      </ul>
      <dl class="wuma_xqing_bottom_ul" v-for="(aaq,a) in wumaxiangqingzhengList" :key="a">
        <dd>{{a+1}}</dd>
        <dd>
          {{aaq.certType}}
          <span :class="aaq.status=='正常'?claa:aaq.status=='异常'?clab:clac"></span>
        </dd>
        <dd>{{aaq.issueDate}}</dd>
        <dt>
          <p>关联代理商</p>
          <p>关联生产商</p>
          <p>查看详情</p>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      claa: "claa",
      clab: "clab"
    };
  },
  mounted() {
    console.log(this.wumaxiangqingList);
    this.getItemInfo({
      url: "/yunqiao/getItemInfo",
      code: this.$route.params.code,
      cb: () => {}
    });
    this.getCertsByItemCode({
      url: "/workbench/getCertsByItemCode",
      itemCode: this.$route.params.code,
      page: 0,
      size: 4,
      cb: () => {}
    });
  },
  computed: {
    ...mapState([
      "wumaxiangqingzhengList",
      "wumaxiangqingzhengshu",
      "wumaxiangqingList"
    ])
  },
  methods: {
    ...mapActions(["getItemInfo", "getCertsByItemCode"])
  }
};
</script>


<style lang="scss" scoped>
.wuma_xqing {
  margin-left: 222px;
  margin-top: 20px;
  width: 1500px;
  overflow: hidden;
  background-color: #fff;
  .wuma_xqing_top {
    padding-top: 20px;
    padding-left: 35px;
    height: 200px;
    border-bottom: 1px solid #d5d5d5;
    overflow: hidden;
    .wuma_xqing_top_left {
      float: left;
      width: 150px;
      height: 150px;
      border: 1px solid #d5d5d5;
      text-align: center;
      margin-right: 20px;
      img {
        display: inline-block;
        width: 75px;
        margin-top: 25px;
        height: 100px;
      }
    }
    .wuma_xqing_top_right {
      float: left;
      width: 1200px;
      background-color: #d5d5d5;
      height: 150px;
      .wuma_xqing_top_right_left {
        float: left;
        width: 400px;
        p {
          text-align: left;
          line-height: 35px;
          span {
            display: inline-block;
          }
        }
      }
    }
  }
  .wuma_xqing_content {
    padding-top: 30px;
    padding-left: 35px;
    height: 240px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d5d5d5;
    text-align: left;
    h4 {
      color: #a3a3a3;
    }
    .wuma_xqing_content_ul {
      padding-left: 10px;
      overflow: hidden;
      li {
        float: left;
        width: 420px;
        margin-left: 30px;
        p {
          line-height: 30px;
          span {
            display: inline-block;
          }
        }
        dl {
          width: 420px;
          height: 150px;
          padding-top: 50px;
          // display: flex;
          // justify-content: space-around;
          overflow: hidden;
          dd {
            float: left;
            width: 70px;
            div {
              border: 1px solid #d5d5d5;
              width: 50px;
              height: 65px;
              padding: 5px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            p {
              text-align: center !important;
            }
          }
          :dd-nth-child(1) {
            margin-left: 0;
          }
        }
      }
      li:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .wuma_xqing_bottom {
    padding-top: 30px;
    padding-left: 35px;
    height: 260px;
    .wuma_xqing_bottom_ul {
      overflow: hidden;
      li {
        float: left;
        height: 90px;
        line-height: 90px;
      }
      dd {
        float: left;
        position: relative;
        height: 90px;
        line-height: 90px;
      }
      dt {
        float: left;
        height: 90px;
        width: 30%;
        p {
          height: 30px;
        }
      }
      li:nth-child(1) {
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
      dd:nth-child(1) {
        width: 10%;
      }
      dd:nth-child(2) {
        width: 30%;
      }
      dd:nth-child(3) {
        width: 30%;
      }
    }
  }
}
.claa {
  position: absolute;
  right: 155px;
  top: 34px;
  width: 20px;
  height: 20px;
  background: url(../../assets/images/youxiao.png) no-repeat center center;
}
.clab {
  position: absolute;
  right: 155px;
  top: 34px;
  width: 20px;
  height: 20px;
  background: url(../../assets/images/yichang.png) no-repeat center center;
}
.clac {
  position: absolute;
  right: 155px;
  top: 34px;
  width: 20px;
  height: 20px;
  background: url(../../assets/images/loading.png) no-repeat center center;
}
</style>

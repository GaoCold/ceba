import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shezhi from "./views/shezhi.vue"
import Hezuo from "./views/hezuo.vue"
import Fenxian from "./views/fenxian.vue"
import Zhengjian from "./views/zhengjian.vue"
import Homeye from "./views/homeye.vue"
import Login from "./views/login.vue"
import Sousuowuma from "./views/sousuowuma.vue"
import Qiye from "./views/qiye.vue"
import Business from "./views/erji/business.vue"
import Aptitude from "./views/erji/aptitude.vue"
import Commodity from "./views/erji/commodity.vue"
import Other from "./views/erji/other.vue"
import Code from "./views/erji/code.vue"
// import Relevance from "./views/erji/relevance.vue"
import Qiyezhenjian from "./views/erjizi/qiyezhenjian.vue"
import Qiyewuma from "./views/erjizi/qiyewuma.vue"
import Qiyewumaguanlian from "./views/erjizi/qiyewumaguanlian.vue"
import Qiyeshengchanshan from "./views/erjizi/qiyeshengchanshan.vue"
import Wumaxiangqing from "./views/erjizi/wumaxiangqing.vue"



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: "homeye" },
    },
    {
      path: "",
      redirect: { name: "homeye" },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        { path: "wumaxiangqing/:code?", component: Wumaxiangqing, name: "wumaxiangqing" },
        { path: "homeye/:id?", name: "homeye", component: Homeye },
        { path: "hezuo", component: Hezuo, name: "hezuo" },
        { path: "shezhi", component: Shezhi, name: "shezhi" },
        { path: "zhengjian", component: Zhengjian, name: "zhengjian" },
        { path: "fenxian", component: Fenxian, name: "fenxian" },
        { path: "sousuowuma", component: Sousuowuma, name: "sousuowuma" },
        { path: "qiyezhenjian/:name", component: Qiyezhenjian, name: "qiyezhenjian" },
        { path: "qiyewuma/:name", component: Qiyewuma, name: "qiyewuma" },
        { path: "qiyewumaguanlian/:itemCode/:name", component: Qiyewumaguanlian, name: "qiyewumaguanlian" },
        { path: "qiyeshengchanshan/:name", component: Qiyeshengchanshan, name: "qiyeshengchanshan" },



      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: '/qiye',
      name: 'qiye',
      component: Qiye,
      // children: [
      //   // 营业执照
      //   { path: 'business', component: Business, name: 'business' },
      //   //资质许可证明
      //   { path: 'aptitude', component: Aptitude, name: 'aptitude' },
      //   //商品合格证明
      //   { path: 'commodity', component: Commodity, name: 'commodity' },
      //   //其他证明
      //   { path: 'other', component: Other, name: 'other' },
      //   //商品物码信息
      //   { path: 'code', component: Code, name: 'code' },
      //   //关联企业
      //   { path: 'relevance', component: Relevance, name: 'relevance' },
      // ]
    }
  ]
})

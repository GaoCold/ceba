import Vue from 'vue'
import Vuex from 'vuex'
import { http } from "./utils"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeyeList: [],
    homeyeLista: [],
    fenxianList: [],
    hezuoList: [],
    totalElements: "",
    zhengjianyeshu: "",
    zhengjianList: [],
    zhengshuList: [],
    qiyeList: [],
    qiyeshu: "",
    qiyezhengshuList: [],
    qiyezhengshu: "",
    qiyewumaList: [],
    qiyewumashu: "",
    wumaxiangqingList: [],
    wumaxiangqingzhengList: [],
    wumaxiangqingzhengshu: ""
  },
  actions: {
    getGoodListAJAX({ commit }, { url, pageSize, cb }) {
      http.get(url, { params: { pageSize } }).then(res => {
        // console.log(res.data.content)
        cb();
        commit("getGoodListAJAX", res.data.content)
      })
    },
    getCertList({ commit }, { url, codeToken, pageIndex, status, certType, pageSize, cb }) {
      http.get(url, {
        headers: {
          codeToken
        },
        params: {
          status,
          pageSize,
          pageIndex,
          certType
        }
      }).then(res => {
        // console.log(res.data)
        cb();
        commit("getCertList", res.data)
      })
    },
    getFenxianList({ commit }, { url, cb }) {
      http.get(url, {}).then(res => {
        console.log(res.data.content)
        cb();
        commit("getFenxianList", res.data.content)
      })
    },
    gotoHezuoList({ commit }, { url, codeToken, pageIndex, entName, pageSize, cb }) {
      http.get(url, {
        headers: {
          codeToken
        },
        params: {
          entName,
          pageSize,
          pageIndex
        }
      }).then(res => {
        // console.log(res.data.content)
        cb();
        commit("gotoHezuoList", res.data)
      })
    },
    getCertTypes({ commit }, { url, codeToken, classify, cb }) {
      http.get(url, {
        headers: {
          codeToken
        },
        params: {
          classify
        }
      }).then(res => {
        // console.log(res.data.content)
        cb();
        commit("getCertTypes", res.data)
      })
    },
    getfuzzyQuery({ commit }, { url, codeToken, keyWord, searchType, page, size, cb }) {
      http.get(url, {
        headers: {
          codeToken
        },
        params: {
          page,
          keyWord,
          searchType,
          size
        }
      }).then(res => {
        console.log(res.data)
        cb();
        commit("getfuzzyQuery", res.data)
      })
    },
    getCertsByEntName({ commit }, { url, page, size, entName, cb }) {
      http.get(url, {
        params: {
          page, size, entName
        }
      }).then(res => {
        console.log(res.data)
        cb();
        commit("getCertsByEntName", res.data)
      })
    },
    getItemCodesByEnt({ commit }, { url, page, size, type, name, itemCode, cb }) {
      http.get(url, {
        params: {
          page, size, type, name, itemCode
        }
      }).then(res => {
        console.log(res.data)
        cb();
        commit("getItemCodesByEnt", res.data)
      })
    },

    getCertsByItemCode({ commit }, { url, page, size, itemCode, cb }) {
      http.get(url, {
        params: {
          page, size, itemCode
        }
      }).then(res => {
        console.log(res.data)
        cb();
        commit("getCertsByItemCode", res.data)
      })
    },
    getRelatedEnt({ commit }, { url, keyWordType, type, page, size, status, keyWord, cb }) {
      http.get(url, {
        params: {
          page, size, keyWordType, keyWord, type, status
        }
      }).then(res => {
        console.log(res.data)
        cb();
        commit("getRelatedEnt", res.data)
      })
    },
    getItemInfo({ commit }, { url, code, cb }) {
      http.get(url, {
        params: {
          code
        }
      }).then(res => {
        console.log(res.data)
        cb();
        commit("getItemInfo", res.data)
      })
    },
    getCertsByItemCode({ commit }, { url, page, size, itemCode, cb }) {
      http.get(url, {
        params: {
          itemCode, page, size,
        }
      }).then(res => {
        // console.log(res.data)
        cb();
        commit("getCertsByItemCode", res.data)
      })
    },
  },



  mutations: {
    getGoodListAJAX(state, homeyeList) {
      state.homeyeList = homeyeList;
    },
    getFenxianList(state, fenxianList) {
      state.fenxianList = fenxianList;
    },
    gotoHezuoList(state, hezuoList) {
      state.hezuoList = hezuoList.content;
      console.log(state.hezuoList)
      state.totalElements = hezuoList.totalElements;
      console.log(state.totalElements)
    },
    getCertList(state, zhengjianList) {
      console.log(zhengjianList)
      state.zhengjianList = zhengjianList.content;
      state.zhengjianyeshu = zhengjianList.totalElements;
      // console.log(state.zhengjianyeshu)
    },
    getCertTypes(state, zhengshuList) {
      console.log(zhengshuList)
      state.zhengshuList = zhengshuList;
    },
    getfuzzyQuery(state, qiyeList) {
      state.qiyeList = qiyeList.content;
      state.qiyeshu = qiyeList.totalElements;
      console.log(qiyeList.totalElements)
    },

    getCertsByEntName(state, qiyezhengshuList) {
      state.qiyezhengshuList = qiyezhengshuList.content;
      state.qiyezhengshu = qiyezhengshuList.totalElements;

    },
    getItemCodesByEnt(state, qiyewumaList) {
      state.qiyewumaList = qiyewumaList.content;
      state.qiyewumashu = qiyewumaList.totalElements;
      console.log(qiyewumaList.totalElements)
    },
    getCertsByItemCode(state, qiyewumaList) {
      state.qiyewumaList = qiyewumaList.content;
      state.qiyewumashu = qiyewumaList.totalElements;
    },
    getRelatedEnt(state, qiyewumaList) {
      state.qiyewumaList = qiyewumaList.content;
      state.qiyewumashu = qiyewumaList.totalElements;
      console.log(state.qiyewumashu)
    },
    getItemInfo(state, wumaxiangqingList) {
      state.wumaxiangqingList = wumaxiangqingList;
    },
    getCertsByItemCode(state, wumaxiangqingzhengList) {
      state.wumaxiangqingzhengList = wumaxiangqingzhengList.content;
      console.log(state.wumaxiangqingzhengList)
      state.wumaxiangqingzhengshu = wumaxiangqingzhengList.totalElements;
      console.log(state.wumaxiangqingzhengshu)
    },
  }
})


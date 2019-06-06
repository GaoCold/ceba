<template>
  <div>
    <Header></Header>
    <Cebian></Cebian>
    <router-view :key="$route.fullPath"></router-view>
    <!-- <Homeye :homeyeList="homeyeList"></Homeye> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import "element-ui/lib/theme-chalk/index.css";
import Cebian from "../components/cebian.vue";
import Homeye from "./homeye.vue";
import { mapState, mapActions } from "vuex";
import http from "../utils";
export default {
  components: {
    Cebian
  }
};
</script>

<template>
  <div style="margin-left:232px;">
    <Shouye :homeyeList="homeyeList"></Shouye>
  </div>
</template>
<script>
import Shouye from "../smllcomponents/shouye.vue";
import { mapState, mapActions } from "vuex";
import dateFormat from "../utils/method.js";
export default {
  props: ["homeyeList"],
  components: {
    Shouye
  }
};
</script>


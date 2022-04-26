import Vue from 'vue'
import Vuex from 'vuex'
import result from "@/store/result";
import matchList from "@/store/matchList";

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    result,
    matchList,
  }
})

export default store
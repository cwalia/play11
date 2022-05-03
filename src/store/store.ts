import Vue from 'vue'
import Vuex from 'vuex'
import result from "@/store/result";
import matchList from "@/store/matchList";
import match from "@/store/match";


Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    result,
    matchList,
    match,
  }
})

export default store
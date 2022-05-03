import {ActionTree, GetterTree, MutationTree} from "vuex";
import {leagueData} from "@/api/match";

interface State {
    leagueData:[]
}

const state: State = {
    leagueData:[]
}

const mutations = <MutationTree<State>>{
  set_LeagueData(state,payload:[]){
    state.leagueData=payload
  }
};

export const actions = <ActionTree<State, any>>{
  async leagueData({commit, state},) {
    const data = await leagueData()
    console.log(data)
    commit('set_LeagueData',data)
  }
};

const getters = <GetterTree<State, any>>{
}

const result = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default result;
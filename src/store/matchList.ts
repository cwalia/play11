import {ActionTree, GetterTree, MutationTree} from "vuex";
import {matchList} from "@/api/matchList";

interface State {
  matchData:[]
}

const state: State = {
    matchData:[]
}

const mutations = <MutationTree<State>>{
  set_MatchData(state,payload:[]){
    state.matchData=payload
  }
};

export const actions = <ActionTree<State, any>>{
  async matchList({commit, state},) {
    const data = await matchList()
    console.log(data)
    commit('set_MatchData',data)
  }
};

const getters = <GetterTree<State, any>>{
  getSample(state, getters) {
    return state.matchData
  },
}

const result = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default result;
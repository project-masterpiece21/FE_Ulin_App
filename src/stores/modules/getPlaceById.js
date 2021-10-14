export default {
  namespaced: true,
  state: {
    placeById: {}
  },

  getters: {
    getterPlaceById(state) {
      return state.placeById;
    }
  },

  mutations: {
    setPlaceById(state, payload) {
      state.placeById = payload;
    },
  },

  actions: {
    async getPlaceById({ commit }, params) {
      const response = await fetch('/api/placeDetail.json');

      const { place } = await response.json();
      commit('setPlaceById', place);
    }
  },
}

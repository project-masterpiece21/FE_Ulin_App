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
      const response = await fetch(`https://ulin-api.herokuapp.com/v1/place/${params}`);
      const result = await response.json();
      
      const place = result.data
      commit('setPlaceById', place);
    }
  },
}

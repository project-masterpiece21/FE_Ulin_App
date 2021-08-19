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
      const response = await fetch(`http://ulin-api.herokuapp.com/v1/place/${params}`);

      const { data } = await response.json();
      commit('setPlaceById', data);
    }
  },
}
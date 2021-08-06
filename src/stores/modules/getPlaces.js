export default {
  namespace: true,
  state: {
    places: []
  },

  getters: {
    getterPlaces(state) {
      return state.places;
    },
  },

  mutations: {
    setPlaces(state, payload) {
      state.places = payload;
    },
  },

  actions: {
    async getPlaces({ commit }) {
      const response = await fetch('https://ulin-api.herokuapp.com/v1/places');

      const { data } = await response.json();

      commit('setPlaces', data)
    }
  }
};
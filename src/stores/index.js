import { createStore } from 'vuex';

const stores = createStore({
  state() {
    return {
      places: {},
      placeById: {},
    };
  },
  getters: {
    getterPlaces(state) {
      return state.places;
    },
    getterPlaceById(state) {
      return state.placeById;
    },
  },
  mutations: {
    setPlaces(state, payload) {
      state.places = payload;
    },
    setPlaceById(state, payload) {
      state.placeById = payload;
    },
  },
  actions: {
    async getPlaces({ commit }) {
      const response = await fetch('https://ulin-api.herokuapp.com/v1/places');

      const { data } = await response.json();

      commit('setPlaces', data);
    },

    async getPlaceById({ commit }, params) {
      const response = await fetch(`http://ulin-api.herokuapp.com/v1/place/${params}`);

      const { data } = await response.json();
      commit('setPlaceById', data);
    },
  },
});

export default stores;

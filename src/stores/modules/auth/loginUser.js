import router from '../../../router';

export default {
  namespaced: true,
  state: {
    payloadUser: {},
    isLoading: false
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    setPayload(state, payload) {
      state.payloadUser = payload;
    }
  },
  actions: {
    async postLogin({ commit }, payload) {
      try {

        const url = 'https://api.ulin-app.xyz/auth/v1/login';

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })

        const status = await response.json();

        console.log(status);

        commit('setPayload', status);
      } catch (err) {
        console.log(err)
      };

    }
  }
}

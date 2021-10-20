import router from '../../router';

export default {
  namespaced: true,
  state: {
    payloadUser: {},
  },
  getters : {
    checkPayload(state) {
      return state.payloadUser;
    }
  },
  mutations: {
    setPayload(state, payload) {
      return state.payloadUser = payload
    }
  },
  actions: {
    async postRegister({ commit }, payload) {
      const url = 'http://localhost:4000/v1/signup';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const status = await response.json()

      commit('setPayload', status);

      if (status.statusCode === 200) {
        router.push({ path: '/login' })
      }
    }
  }
};
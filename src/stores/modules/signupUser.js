import router from '../../router';

export default {
  namespaced: true,
  state: {
    payloadUser: {},
    emailIsAlready: false,
  },
  getters : {
    checkPayload(state) {
      return state.payloadUser;
    },
    getEmailStatus(state) {
      return state.emailIsAlready;
    },
  },
  mutations: {
    setPayload(state, payload) {
      return state.payloadUser = payload
    },
    setEmailExits(state, already) {
      return state.emailIsAlready = already;
    },
    setEmailFalse(state) {
      return state.emailIsAlready = false
    }
  },
  actions: {
    async postRegister({ commit }, payload) {
      const url = 'http://47.254.244.4/auth/v1/signup';

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
      } else if (status.statusCode === 409 ) {
        commit('setEmailExits', true)
      }
    }
  }
};

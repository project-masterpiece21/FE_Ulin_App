import router from '../../../router';
import createPersistedState from 'vuex-persistedstate';
export default {
  namespaced: true,
  state: {
    payloadUser: {},
    isLoading: false,
    isStatus: false
  },
  getters: {
    getLoading(state) {
      return state.isLoading;
    },
    getStatus(state) {
      return state.isStatus;
    },
    isLogin(state) {
      return state.payloadUser;
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.payloadUser = payload;

    },
    seLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setModal(state) {
      state.isStatus = !state.isStatus;
    }
  },
  actions: {
    async postLogin({ commit }, payload) {
      try {

        const url = 'https://api.ulin-app.xyz/auth/v1/login';

        const data = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })

        const response = await data.json();

        if (response.statusCode === 400 || response.statusCode === 401) {
          return commit('setModal');
        }

        commit('setAuth', response);
        router.push('/home')
      } catch (err) {
        console.log(err)
      };

    }
  }
}

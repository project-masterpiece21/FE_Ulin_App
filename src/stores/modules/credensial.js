export default {
  state: {
    credential: true
  },
  getters : {
    checkCredential(state) {
      return state.credential;
    }
  },
  mutations: {
    setCredential(state) {
      state.credential = false
    }
  }
};
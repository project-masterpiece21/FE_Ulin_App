export default {
  state: {
    credential: false
  },
  getters : {
    checkCredential(state) {
      return state.credential;
    }
  },
  mutations: {
    setCredential(state) {
      state.credential = true
      localStorage.setItem('credensial', true);
    }
  }
};
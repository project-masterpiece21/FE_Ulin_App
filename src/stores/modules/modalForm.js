export default {
  namespaced: true,
  state: {
    isModal: false
  },
  getters: {
    checkIsModal(state) {
      return state.isModal;
    }
  },
  mutations: {
    setTrueModal(state) {
      state.isModal = true;
    },
    setFalseModal(state) {
      state.isModal = false;
    }
  }
}

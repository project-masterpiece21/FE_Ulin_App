import { createStore } from 'vuex';
import  createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
const ls = new SecureLS({ isCompression: false });

import getPlaces from './modules/getPlaces';
import getPlaceById from './modules/getPlaceById';
import credensial from './modules/credensial';
import signupUser from './modules/auth/signupUser';
import modalForm from './modules/modalForm';
import loginUser from './modules/auth/loginUser';

const dataState = createPersistedState({
  paths: ['loginUser'],
  storage: {
    getItem: key => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: key => ls.remove(key)
  }
})


const stores = createStore({
  modules: {
    getPlaces,
    getPlaceById,
    credensial,
    signupUser,
    modalForm,
    loginUser
  },
  plugins: [
    dataState
  ]
});

export default stores;

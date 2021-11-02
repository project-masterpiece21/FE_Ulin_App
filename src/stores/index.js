import { createStore } from 'vuex';

import getPlaces from './modules/getPlaces';
import getPlaceById from './modules/getPlaceById';
import credensial from './modules/credensial';
import signupUser from './modules/auth/signupUser';
import modalForm from './modules/modalForm';
import loginUser from './modules/auth/loginUser';

const stores = createStore({
  modules: {
    getPlaces,
    getPlaceById,
    credensial,
    signupUser,
    modalForm,
    loginUser
  }
});

export default stores;

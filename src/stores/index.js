import { createStore } from 'vuex';

import getPlaces from './modules/getPlaces';
import getPlaceById from './modules/getPlaceById';
import credensial from './modules/credensial';
import signupUser from './modules/signupUser';
import modalForm from './modules/modalForm';

const stores = createStore({
  modules: {
    getPlaces,
    getPlaceById,
    credensial,
    signupUser,
    modalForm,
  }
});

export default stores;

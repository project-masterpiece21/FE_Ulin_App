import { createStore } from 'vuex';

import getPlaces from './modules/getPlaces';
import getPlaceById from './modules/getPlaceById';
import credensial from './modules/credensial';
import signupUser from './modules/signupUser';

const stores = createStore({
  modules: {
    getPlaces,
    getPlaceById,
    credensial,
    signupUser
  }
});

export default stores;

import { createStore } from 'vuex';

import getPlaces from './modules/getPlaces';
import getPlaceById from './modules/getPlaceById';
import credensial from './modules/credensial';

const stores = createStore({
  modules: {
    getPlaces,
    getPlaceById,
    credensial
  }
});

export default stores;

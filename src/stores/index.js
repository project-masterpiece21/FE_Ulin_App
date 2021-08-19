import { createStore } from 'vuex';

import getPlaces from './modules/getPlaces';
import getPlaceById from './modules/getPlaceById';

const stores = createStore({
  modules: {
    getPlaces,
    getPlaceById
  }
});

export default stores;

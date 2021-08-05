import { createStore} from 'vuex';

import getPlaces from './modules/getPlaces';

const stores = createStore({
  modules: {
    getPlaces
  }
});

export default stores;
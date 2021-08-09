import { createStore} from 'vuex';

import places from './modules/places';

const stores = createStore({
  modules: {
    places
  }
});

export default stores;
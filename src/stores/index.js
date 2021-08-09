import { createStore} from 'vuex';

import place from './modules/place';

const stores = createStore({
  modules: {
    place
  }
});

export default stores;
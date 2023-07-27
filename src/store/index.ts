import Vuex from 'vuex';
import { RootState } from './types';
import { util } from './util/index'


export default new Vuex.Store<RootState>({
  modules: {
    util
  }
});
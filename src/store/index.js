import Vue from 'vue'
import Vuex from 'vuex'

import occupations from './modules/occupations';
import talks from './modules/talks';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    occupations,
    talks,
  },
  strict: process.env.NODE_ENV !== 'production',
})

import Vue from 'vue'
import Vuex from 'vuex'

import occupations from './modules/occupations';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    occupations,
  },
  strict: process.env.NODE_ENV !== 'production',
})

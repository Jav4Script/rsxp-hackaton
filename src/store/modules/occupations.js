import api from '@/services/api';

const types = {
  OCCUPATIONS: '@OCCUPATIONS/OCCUPATIONS',
  OCCUPATION: '@OCCUPATION/OCCUPATION',
  LOADING: '@OCCUPATIONS/LOADING',
  ERROR: '@OCCUPATIONS/ERROR',
}

const mutations = {
  [types.OCCUPATIONS](state, occupations) {
    state.occupations = occupations;
  },
  [types.OCCUPATION](state, occupation) {
    state.occupation = {
      ...state.occupation,
      ...occupation
    };
  },
  [types.LOADING](state, newState) {
    state.loading = newState;
  },
  [types.ERROR](state, error) {
    if (!error.message) {
      return
    }
    state.error = error.message;
  }
}

const actions = {
  async loadOccupations({ commit }) {
    try {
      commit(types.LOADING, true);
      const { data: occupations } = await api.get('/occupations');
      commit(types.OCCUPATIONS, occupations);
    } catch (error) {
      commit(types.ERROR, error);
    } finally {
      commit(types.LOADING, false);
    }
  },
  async loadOccupation({ commit }, slugOccupation) {
    try {
      commit(types.LOADING, true);
      const { data: occupation } = await api.get(`/occupations/${slugOccupation}`);
      commit(types.OCCUPATION, occupation);
    } catch (error) {
      commit(types.ERROR, error);
    } finally {
      commit(types.LOADING, false);
    }
  }
}

const state = {
 occupations: [],
 occupation: {
   id: '',
   slug: '',
   image: '',
   name: '',
   description: ''
 },
 loading: false,
 error: '',
}

export default {
  namespaced: true,
  mutations,
  actions,
  state,
}

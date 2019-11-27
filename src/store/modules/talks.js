import api from '@/services/api';

const types = {
  TALKS: '@TALKS/TALKS',
  TALK: '@TALK/TALK',
  LOADING: '@TALKS/LOADING',
  ERROR: '@TALKS/ERROR',
}

const mutations = {
  [types.TALKS](state, talks) {
    state.talks = talks;
  },
  [types.TALK](state, talk) {
    state.talk = {
      ...state.talk,
      ...talk
    };
    const index = state.talks.findIndex(element => element.id === talk.id);
    if (index > -1) {
      state.talks = [...state.talks.filter(element => element.id !== talk.id), talk]
    }
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
  async loadTalks({ commit }, filters = {}) {
    try {
      commit(types.LOADING, true);
      let query = '?';
      if (filters.occupation && filters.occupation !== 'all') {
        query += `occupation=${filters.occupation}&`
      }
      if (filters.date) {
        query += `date=${filters.date}`
      }
      const { data: talks } = await api.get(`/talks${query}`);
      commit(types.TALKS, talks);
    } catch (error) {
      commit(types.ERROR, error);
    } finally {
      commit(types.LOADING, false);
    }
  },
  async loadTalk({ commit }, idTalk) {
    try {
      commit(types.LOADING, true);
      const { data: talk } = await api.get(`/talks/${idTalk}`);
      commit(types.TALK, talk);
    } catch (error) {
      commit(types.ERROR, error);
    } finally {
      commit(types.LOADING, false);
    }
  },
  async subscribeTalk({ commit }, { talkId, attendant }) {
    try {
      commit(types.LOADING, true);
      const { data: talk } = await api.post(`/talks/${talkId}/subscribe`, attendant);
      commit(types.TALK, talk);
    } catch (error) {
      commit(types.ERROR, error);
    } finally {
      commit(types.LOADING, false);
    }
  }
}

const getters = {
  getTalks(state) {
    return [...state.talks].sort((a, b) => a.slug && a.slug.localeCompare(b.slug));
  }
}

const state = {
 talks: [],
 talk: {
    id: '',
    slug: "",
    name: "",
    image: "",
    description: "",
    author: {
      id: '',
      name: ""
    },
    date: "",
    spots: {
      available: 0,
      total: 0,
      attendants: []
    },
    status: {
      id: '',
      name: ""
    },
    category: {
      id: '',
      name: ""
    }
  },
  loading: false,
  error: '',
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
        title: 'First note',
        text: 'lorem fds fds f dsf dsf sdf fsdfdsfsdaf',
        id: 123
      },
      {
        title: 'Second note',
        text: 'lorem fds fds f dsf dsf sdf fsdfdsfsdaf',
        id: 143
      },
      {
        title: 'Third note',
        text: 'lorem fds fds f dsf dsf sdf fsdfdsfsdaf',
        id: 122
      }
    ]
  },
  mutations: {
    delNote(state, idx) {
      state.notes.splice(idx, 1)
    },
    addNote(state, note) {
      state.notes.unshift(note)
    }
  },
  actions: {
    delNote(context, idx) {
      context.commit('delNote', idx)
    },
    addNote(context, note) {
      context.commit('addNote', note)
    }
  },
  modules: {
  },
  getters: {
    getNoteById: (state) => (idx) => {
      return state.notes.find(el => {
        if (el.id == idx) {
          return el
        }
      })
    }
  }
})

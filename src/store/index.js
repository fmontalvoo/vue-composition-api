import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { description: '#1', completed: false },
      { description: '#2', completed: false }
    ]
  },
  getters: {
    allTodos: (state, getters, rootState) => [...state.todos],
    completedTodos(state, getters, rootState) {
      return state.todos.filter(t => t.completed)
    },
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(t => !t.completed)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

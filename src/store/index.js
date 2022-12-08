import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, description: '#1', completed: false },
      { id: 2, description: '#2', completed: false }
    ]
  },
  getters: {
    allTodos: (state, getters, rootState) => [...state.todos],
    completedTodos(state, getters, rootState) {
      return state.todos.filter(t => t.completed)
    },
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(t => !t.completed)
    },
    getTodosByStatus: (_, getters, __) => (status) => {
      switch (status) {
        case 'completed':
          return getters.completedTodos
        case 'pending':
          return getters.pendingTodos
        default:
          return getters.allTodos
      }
    }
  },
  mutations: {
    toggleTodoStatus(state, id) {
      const index = state.todos.findIndex(t => t.id === id)
      const todo = state.todos[index]
      todo.completed = !todo.completed
    }
  },
  actions: {
  },
  modules: {
  }
})

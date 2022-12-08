import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')

    return {
        currentTab,
        pending: computed(() => store.getters['pendingTodos']),
        todos: computed(() => store.getters['getTodosByStatus'](currentTab.value)),
        onToggleTodo: (id) => store.commit('toggleTodoStatus', id),
        onAddTodo: (description = '') => store.commit('addTodo', description),
    }
}

export default useTodos
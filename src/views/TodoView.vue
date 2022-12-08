<template>
    <h2>Lista de tareas</h2>
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr>

    <button @click="currentTab = 'all'" :class="{ 'active': currentTab === 'all' }">Todos</button>
    <button @click="currentTab = 'pending'" :class="{ 'active': currentTab === 'pending' }">Pendientes</button>
    <button @click="currentTab = 'completed'" :class="{ 'active': currentTab === 'completed' }">Completados</button>

    <div>
        <ul>
            <li v-for="todo of todos" :class="{ 'completed': todo.completed }" :key="todo.id"
                @dblclick="onToggleTodo(todo.id)">
                {{ todo.description }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const currentTab = ref('all')

        return {
            currentTab,
            pending: computed(() => store.getters['pendingTodos']),
            todos: computed(() => store.getters['getTodosByStatus'](currentTab.value)),
            onToggleTodo: (id) => store.commit('toggleTodoStatus', id)
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: center;
}

li {
    cursor: pointer;
}

.active {
    color: white;
    background-color: #2c3e50;
}

.completed {
    text-decoration: line-through;
}
</style>
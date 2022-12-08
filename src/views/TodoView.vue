<template>
    <h2>Lista de tareas</h2>
    <h4>Pendientes: {{ pending.length }}</h4>

    <button>Crear tarea</button>

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
import useTodos from '@/composables/useTodos'

export default {
    setup() {
        const {
            currentTab,
            pending,
            todos,
            onToggleTodo,
        } = useTodos()

        return {
            currentTab,
            pending,
            todos,
            onToggleTodo,
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
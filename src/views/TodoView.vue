<template>
    <h2>Lista de tareas</h2>
    <h4>Pendientes: {{ pending.length }}</h4>

    <button @click="(isOpen = true)">Agregar tarea</button>

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

    <modal-component v-if="isOpen" @close="(isOpen = false)">
        <template #header>
            <h2>Agregar tarea</h2>
        </template>
        <template #body>
            <form @submit.prevent="onAddTodo(todoDescription); todoDescription = ''; isOpen = false">
                <input type="text" placeholder="Titulo tarea" v-model="todoDescription" />
                <br>
                <br>
                <button type="submit">Agregar</button>
            </form>
        </template>
    </modal-component>
</template>

<script>
import { ref } from 'vue';

import useTodos from '@/composables/useTodos'
import ModalComponent from '@/components/ModalComponent.vue';

export default {
    components: {
        ModalComponent,
    },
    setup() {
        const {
            currentTab,
            pending,
            todos,
            onToggleTodo,
            onAddTodo,
        } = useTodos()

        return {
            currentTab,
            pending,
            todos,
            isOpen: ref(false),
            todoDescription: ref(''),
            onToggleTodo,
            onAddTodo,
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
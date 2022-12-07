<template>
    <h2 v-if="isLoading">Cargando...</h2>
    <h2 v-else>Usuarios</h2>
    <h2 class="error" v-if="(statusCode != 0)">¡Error!</h2>

    <div v-else>
        <ul>
            <li v-for="{ id, avatar, first_name, last_name, email } of users" :key="id">
                <img :src="avatar" :alt="first_name">
                <p><b>{{ first_name }} {{ last_name }}</b></p>
                <p>{{ email }}</p>
            </li>
        </ul>
    </div>

    <div>
        <button @click="prev">&lt;</button> |
        <span>Pagina: {{ currentPage }}</span> |
        <button @click="next">&gt;</button>
    </div>
</template>

<script>
import useUsers from '@/composables/useUsers';

export default {
    setup() {

        const {
            users,
            isLoading,
            statusCode,
            currentPage,
            next,
            prev,
        } = useUsers()

        return {
            users,
            isLoading,
            statusCode,
            currentPage,
            next,
            prev,
        }

    }
}
</script>

<style scoped>
img {
    border-radius: 100%;
    border: 1px solid black;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
    list-style-type: none;
}

.error {
    color: crimson;
}
</style>
<template>
    <h2 v-if="isLoading">Cargando...</h2>
    <h2 v-else>Usuarios</h2>
    <h2 class="error" v-if="(statusCode != 0)">¡Error!</h2>

    <div v-else>
        <user-list-component :users="users" v-slot="{ avatar, first_name, last_name, email }">
            <img :src="avatar" :alt="first_name">
            <p><b>{{ first_name }} {{ last_name }}</b></p>
            <p>{{ email }}</p>
        </user-list-component>
    </div>

    <div>
        <button @click="prev">&lt;</button> |
        <span>Pagina: {{ currentPage }}</span> |
        <button @click="next">&gt;</button>
    </div>
</template>

<script>
import useUsers from '@/composables/useUsers';
import UserListComponent from '@/components/UserListComponent.vue';

export default {
    components: {
        UserListComponent,
    },
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
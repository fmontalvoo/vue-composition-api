<template>
    <ul>
        <slot v-for="user of users" :key="user.id" :avatar="user.avatar" :first_name="user.first_name"
            :last_name="user.last_name" :email="user.email">
        </slot>
    </ul>
</template>

<script>
export default {
    name: 'UserListComponent',
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>
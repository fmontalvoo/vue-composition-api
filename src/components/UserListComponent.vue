<template>
    <ul>
        <slot v-for="user of users" :key="user.id" :user="user">
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
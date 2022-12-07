<template>
    <h2>Lista de tareas</h2>
    {{ pending }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        return {
            pending: computed(() => store.getters['pendingTodos'])
        }
    }
}
</script>

<style scoped>

</style>
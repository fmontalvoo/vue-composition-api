<template>
    <h2>Buscar pokemon:</h2>
    <form @submit.prevent="onSubmit">
        <input type="number" placeholder="ID pokemon" v-model="pokemonId" min="0" ref="txtSearch" />
    </form>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()

        const pokemonId = ref(1)
        const txtSearch = ref()

        onActivated(() => {
            txtSearch.value.select()
        })

        return {
            pokemonId,
            txtSearch,
            onSubmit: () => {
                router.push({ name: 'pokemon', params: { id: pokemonId.value } })
            }
        }
    }
}
</script>

<style scoped>

</style>
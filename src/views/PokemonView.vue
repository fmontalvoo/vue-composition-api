<template>
    <h2 v-if="isLoading">Cargando...</h2>

    <h2 class="error" v-else-if="(statusCode != 0)">¡Error!</h2>

    <template v-else>
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            <h3>{{ pokemon.name }}</h3>
        </div>
    </template>
    <button @click="$router.back()">Regresar</button>
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import usePokemon from '@/composables/usePokemon'

export default {
    setup() {
        const route = useRoute()

        const { pokemon, isLoading, statusCode, getPokemon } = usePokemon(parseInt(route.params.id))

        watch(
            () => route.params.id,
            (newValue, oldValue) => {
                console.info(newValue, oldValue)
                getPokemon(+newValue)
            }
        )

        return {
            pokemon,
            isLoading,
            statusCode,
        }

    }
}
</script>

<style scoped>
img {
    border-radius: 100%;
    border: 1px solid black;
}

.error {
    color: crimson;
}

a {
    cursor: pointer;
}
</style>
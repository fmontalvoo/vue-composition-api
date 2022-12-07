import { ref } from 'vue'
import axios from 'axios'

const usePokemon = (pokemonId = 1) => {
    const pokemon = ref()
    const isLoading = ref(false)
    const statusCode = ref(0)

    const getPokemon = async (id) => {
        if (!id) return

        isLoading.value = true
        pokemon.value = null

        try {
            const url = 'https://pokeapi.co/api/v2/pokemon'

            const { data } = await axios.get(`${url}/${id}`)
            console.log(data)
            pokemon.value = data
            statusCode.value = 0
            isLoading.value = false
        } catch (error) {
            statusCode.value = 1
        }

        isLoading.value = false
    }

    getPokemon(pokemonId)

    return {
        pokemon,
        isLoading,
        statusCode,
        getPokemon,
    }
}

export default usePokemon
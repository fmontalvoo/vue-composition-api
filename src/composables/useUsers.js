import { ref } from 'vue'
import axios from 'axios'

const useUsers = () => {
    const users = ref([])
    const isLoading = ref(false)
    const currentPage = ref(1)
    const statusCode = ref(0)

    const getUsers = async (page = 1) => {
        if (page <= 0) page = 1

        isLoading.value = true

        const response = await (await axios.get('https://reqres.in/api/users', {
            params: {
                page
            }
        })).data

        isLoading.value = false

        if (response.data.length > 0) {
            users.value = response.data
            currentPage.value = page
            statusCode.value = 0
        } else if (currentPage.value > 0) {
            statusCode.value = 1
        }
    }

    getUsers()

    return {
        users,
        isLoading,
        currentPage,
        statusCode,
        next: () => getUsers(currentPage.value + 1),
        prev: () => getUsers(currentPage.value - 1),
    }
}

export default useUsers
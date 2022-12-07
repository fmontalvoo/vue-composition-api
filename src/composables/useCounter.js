import { ref } from 'vue'

const useCounter = (start = 0) => {
    const counter = ref(start)

    return {
        counter,
        add: () => counter.value++,
        substract: () => counter.value--,
    }
}

export default useCounter
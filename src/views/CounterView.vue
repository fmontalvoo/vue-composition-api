<template>
    <h2>Counter: {{ counter }}</h2>
    <div>
        <button class="minus" @click="substract">-</button>
        <button class="plus" @click="add">+</button>
    </div>
</template>

<script>
import useCounter from '@/composables/useCounter'


export default {
    name: 'Counter',
    setup() {
        const { counter, add, substract } = useCounter(7)

        return {
            counter,
            add,
            substract,
        }
    }
}
</script>

<style scoped>
.minus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: crimson;
    background-color: crimson;
}

.plus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: green;
    background-color: green;
}
</style>
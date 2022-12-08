<template>
    <h2>Slots</h2>
    <button @click="(isOpen = true)">Abrir modal</button>
    <ModalComponent v-if="isOpen" @close="(isOpen = false)">
        <template #header>
            <h1>Modal</h1>
        </template>
        <template v-slot:body="{ bodyContent }">
            <p>Contenido del modal</p>
            <p>{{ bodyContent }}</p>
        </template>
        <template #footer>
            <button @click="(isOpen = false)">Cerrar</button>
        </template>
    </ModalComponent>
</template>

<script>
import { ref } from 'vue';

import ModalComponent from '@/components/ModalComponent.vue';

export default {
    name: 'CustomSlots',
    components: {
        ModalComponent,
    },
    setup() {
        const isOpen = ref(false)

        return {
            isOpen
        }

    }
}
</script>

<style scoped>

</style>
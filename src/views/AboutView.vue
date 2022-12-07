<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
} from 'vue'


export default {
  setup() {

    const counter = ref(0)

    console.info('Setup')

    onMounted(() => {
      console.info('onMounted')
    })
    onUpdated(() => {
      console.info('onUpdated')
    })
    onUnmounted(() => {
      console.info('onUnmounted')
    })
    onBeforeMount(() => {
      console.info('onBeforeMount')
    })
    onBeforeUpdate(() => {
      console.info('onBeforeUpdate')
    })
    onBeforeUnmount(() => {
      console.info('onBeforeUnmount')
    })
    onErrorCaptured(() => {
      console.info('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.info('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.info('onRenderTriggered')
    })
    onActivated(() => {
      console.info('onActivated')
    })
    onDeactivated(() => {
      console.info('onDeactivated')
    })

    return {
      counter,
      increment: () => counter.value += 7
    }
  },
}
</script>
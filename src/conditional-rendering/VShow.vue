<template>
    <div>
        <button @click="isShow = !isShow">show / hide</button>
        <div v-show="isShow">Show</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(true)

</script>

<style scoped></style>
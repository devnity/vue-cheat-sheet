<template>
    <div>
        <input type="radio" id="d" value="D" v-model="status" />
        <label for="d">Draft</label>

        <input type="radio" id="d" value="S" v-model="status" />
        <label for="d">Submit</label>

        <br /><br /><br />

        <div v-if="status === 'D'">Draft</div>
        <div v-else-if="status === 'S'">Submit</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const status = ref('D')

</script>

<style scoped></style>
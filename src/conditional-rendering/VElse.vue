<template>
    <div>
        <input type="radio" id="d" value="D" v-model="status" />
        <label for="d">Draft</label>

        <input type="radio" id="s" value="S" v-model="status" />
        <label for="s">Submit</label>

        <input type="radio" id="f" value="null" v-model="status" />
        <label for="f">Final</label>

        <br /><br /><br />

        <div v-if="status === 'D'">Draft</div>
        <div v-else-if="status === 'S'">Submit</div>
        <div v-else>Final</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const status = ref('D')

</script>

<style scoped></style>
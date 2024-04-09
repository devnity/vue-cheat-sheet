<template>
    <div>
        <button @click="counter++">Tambah 1</button>
        <p>Tombol diatas, sudah diklik sebanyak {{ counter }} kali.</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0);
</script>

<style scoped></style>
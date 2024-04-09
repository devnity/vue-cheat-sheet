<template>
    <div>
        <button @click="countMethod">Tambah 1</button>
        <p>Tombol diatas, sudah diklik sebanyak {{ counter }} kali.</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0);

function countMethod(event: any) {
    counter.value++;
    alert("Anda melakukan klik dari " + event.target.tagName);
}

</script>

<style scoped></style>
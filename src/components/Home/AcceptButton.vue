<template>
    <div>
        <img :src="Check" alt="checkmark">
    </div>
</template>

<script setup lang="ts">
import Check from '../../assets/check.png';
</script>

<style scoped>
div {
    width: 4rem;
    height: 4rem;
    background-color: #B12B0D;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 99px;
}
</style>
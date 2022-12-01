<template>
    <div>
        <img :src="Close" alt="checkmark">
    </div>
</template>

<script setup lang="ts">
import Close from '../../assets/close.png';
</script>

<style scoped>
div {
    width: 4rem;
    height: 4rem;
    background-color: #F8E6E6;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 99px;
}
</style>
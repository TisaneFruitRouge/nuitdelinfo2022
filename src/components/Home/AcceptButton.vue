<template>
    <div @click="props.onClick">
        <img :src="Check" alt="checkmark">
    </div>
</template>

<script setup lang="ts">
import Check from '../../assets/check.png';

const props = defineProps<{
    onClick: any
}>();


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

    transition-duration: 300ms;
}

div:hover {
    box-shadow: 6px 5px 6px -2px rgba(177,43,13,0.54);
    -webkit-box-shadow: 6px 5px 6px -2px rgba(177,43,13,0.54);
    -moz-box-shadow: 6px 5px 6px -2px rgba(177,43,13,0.54);
}

</style>
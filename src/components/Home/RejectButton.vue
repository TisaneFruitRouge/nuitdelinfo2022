<template>
    <div @click="props.onClick">
        <img width="16" :src="Close" alt="close">
    </div>
</template>

<script setup lang="ts">
import Close from '../../assets/close.png';

const props = defineProps<{
    onClick: any
}>();

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

    transition-duration: 300ms;
}

div:hover {
    box-shadow: 6px 5px 6px -2px rgba(248,230,230,0.54);
    -webkit-box-shadow: 6px 5px 6px -2px rgba(248,230,230,0.54);
    -moz-box-shadow: 6px 5px 6px -2px rgba(248,230,230,0.54);
}
</style>
<template>
    <div :class="isOpen ? 'background-card open' : 'background-card'">
        <img :src={Banana} alt="banana" @click="toggleProfile">
        <h2>{{name}} - {{age}} ans</h2>
        <p>{{description}}</p>
    </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
import Banana from "../../assets/banana.png";

interface IProps {
    name: string;
    description: string;
    image: string;
    age: number;
}

const props = defineProps<IProps>()

const {name, description, image, age} = toRefs(props);

const isOpen = ref(false);

const toggleProfile = () => {
    isOpen.value = !isOpen.value;
};

</script>

<style scoped>
.background-card {
    z-index: 5;

    top: 20vh;
    left: 7.5vw;
    position: fixed;
    height: 60vh;
    width: 85vw;
    border-radius: 20px;
    background-color: #f8e6e6;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    padding: 1rem;

    display: flex;
    flex-direction: column;

    transition-duration: 300ms;
}

.background-card > img {
    height: 70%;
    width: 100%;

    border: 2px solid white;
    border-radius: 10px;
}

.background-card > p {
    margin-top: 0;
    font-size: 0.9rem;

    max-height: 150px;

    overflow: hidden;
    text-overflow: ellipsis;
}


.background-card.open {
    max-width: 100vw;
    max-height: 100vh;

    width: 100vw;
    height: 85vh;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    left: 0;
    top: 15vh;
}


.background-card.open > p {
    overflow: scroll;
}

</style>
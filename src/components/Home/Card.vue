<template>
    <div :class="`background-card  
                  ${isOpen ? 'open' : ''} 
                  ${swiped ? (matched ? 'right' : 'left') : ''}
                  `">
        <img :src="''" alt="banana" @click="toggleProfile">
        <h2>{{name}}</h2>
        <p>{{description}}</p>
    </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';

interface IProps {
    name: string;
    description: string;
    image: string;
    matched: boolean;
    swiped: boolean;
}

const props = defineProps<IProps>()
const {name, description, image, matched, swiped} = toRefs(props);
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
    max-width: 100%;
    max-height: 100vh;

    width: 100vw;
    height: 85vh;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    left: 0;
    right: 0;
    top: 15vh;
}


.background-card.open > p {
    overflow: scroll;
}

.background-card.right {
  transform: translateX(600px) rotate(45deg);
}

.background-card.left {
  transform: translateX(-600px) rotate(-45deg);
}

</style>
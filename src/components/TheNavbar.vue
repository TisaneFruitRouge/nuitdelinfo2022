<template>
    <Teleport to="body">
        <div id="overlay" :class="isOpen ? 'active' : ''" @click="toggleModal"></div>
        <div id="burger" :class="isOpen ? 'active' : ''" @click="toggleModal">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div id="navbar" :class="isOpen ? 'active' : ''">
            <div class="navbarIcones" >
                <router-link :to="SettingsPage? '/':'/settings' "  @click="loadSetting">
                
                <img v-if="!SettingsPage" id="settingsIcone" :src="settingIcone" alt="checkmark"> 
                <div v-if="!SettingsPage" class="IconeLabel">Settings </div>

            </router-link>
            </div>
           
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import settingIcone from '../assets/setting.png';
import backicone from '../assets/back.png';


const isOpen = ref(false);

const toggleModal = () => {
    isOpen.value = !isOpen.value;
}
const loadSetting =() => {

    isOpen.value=!isOpen.value;
}

</script>

<style scoped>
    #settingsIcone{
        width: 15%;
    }
    .navbarIcones{
        text-align: center;
        margin-top: 100%;
    }
    #overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background-color: black;
        opacity: 0.3;
        display: none;

        z-index: 10;
    }

    #overlay.active {
        display: inline;
    }

    #burger {
        position: fixed;
        top: 5vh;
        left: 5vh;

        z-index: 20;

        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    #burger > div {
        width: 35px;
        height: 3px;

        background-color: white;

        transition-duration: 300ms;
    }

    #burger.active > div:first-child {
        transform: rotate(45deg) translateY(14px);
    }

    #burger.active > div:nth-child(2) {
        transform: translateX(-500px);
    }

    #burger.active > div:last-child {
        transform: rotate(-45deg) translateY(-14px);
    }

    #navbar {
        position: absolute;
        top: 0;
        left: 0;
        transition-duration: 300ms;

        background-color: #DAB0B0;
        max-width: 250px;
        height: 100vh;

        transform: translateX(-500px);

        z-index: 10;
    }

    #navbar.active {
        transform: translateX(0px);
    }

</style>
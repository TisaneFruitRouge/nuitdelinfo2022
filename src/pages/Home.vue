<template>
    <div class="main">
    <main>

        <popup-win v-if="STDValue==='DODGE'" :click="hideModal" :explication="explication"></popup-win>
        <popup-lose v-else-if="STDValue==='STD'" :click="hideModal" :explication="explication"></popup-lose>

        <div id="background-center-cards">
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card"></div>
            <card 
                v-for="(profile, index) in profiles" 
                :name="profile.name" 
                :description="profile.description" 
                :matched="profile.matched"
                :swiped="profile.swiped"
                :photo="profile.photo"
                :key="index"/>
        </div>

        <div id="background-top-cards">
            <div class="background-card background-top-card"></div>
            <div class="background-card background-top-card"></div>
        </div>

        <div id="background-bottom-cards">
            <div class="background-card background-bottom-card"></div>
            <div class="background-card background-bottom-card"></div>
        </div>

        <div id="buttons">
            <AcceptButton :on-click="()=>match(true)"/>
            <RejectButton :on-click="()=>match(false)"/>
        </div>

    </main>
</div>

</template>

<script setup lang="ts">

import AcceptButton from "../components/Home/AcceptButton.vue";
import RejectButton from "../components/Home/RejectButton.vue";
import Card from "../components/Home/Card.vue";
import { ref, watch } from "vue";
import {storeToRefs} from 'pinia';
import PopupWin from "../components/Home/PopupWin.vue";
import PopupLose from "../components/Home/PopupLose.vue";

import { useProfileStore } from '../stores/profiles';
import { proxyPrint } from "../utils";

const store = useProfileStore();

const hideModal = () => {
    STDValue.value = "";
}

const { profiles, profilesSwiped } = storeToRefs(store);
const { matchProfile } = store;
const STDValue = ref("");
const explication = ref("");

const match = (matched: boolean) => {
    const STD_VALUE = matchProfile(matched);
    [STDValue.value, explication.value] = STD_VALUE || "";
}

</script>

<style scoped>
.main{
    background-color: #89A094;

}
main {
    background-color: #89A094;
    max-width: 450px;
    margin: auto;
    height: 100vh;

}

.main {
  overflow: hidden;
}


#background-center-cards, #background-top-cards, #background-bottom-cards  {
    position: relative
}

.background-card {
    position: absolute;
    height: 60vh;
    width: 85%;
    border-radius: 20px;

    max-width: 350px;
    max-height: 500px;
}

.background-center-card {
    top: 20vh;
    left: 7.5%;
}

.background-center-card:first-child {
    background-color: #b12b02;
    transform: rotateZ(15deg)
}

.background-center-card:nth-child(2) {
    background-color: #e47e7e;
    transform: rotateZ(3deg) translateY(-15px);
}

.background-center-card:nth-child(3) {
    background-color: #dab0b0;
    transform: rotateZ(-5deg) translateY(-20px);
}

.background-center-card:nth-child(4) {
    background-color: #f8e6e6;
}

.background-top-card {
    top: -55vh;
    right: -40%;
}

.background-top-card:first-child {
    background-color: #b12b02;
    transform: rotateZ(-12.5deg) translateY(1vh);
}

.background-top-card:last-child {
    background-color: #dab0b0;
    transform: rotateZ(5deg);
}

.background-bottom-card {
    bottom: -147vh;
    left: -30%;
}

.background-bottom-card:last-child {
    background-color: #e47e7e;
    transform: rotateZ(-20deg); 
}

.background-bottom-card:first-child {
    background-color: #b12b02;
    transform: rotateZ(-18deg) translateY(4vh) translateX(10%);
}

#buttons {

    width: 100%;
    max-width: 450px;
    position: fixed;
    top: 85vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
}


</style>
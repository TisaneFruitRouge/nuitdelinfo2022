<template>
    <main>
        <div id="background-center-cards">
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card"></div>
            <div class="background-card background-center-card">
                <form>
                <h1>
                    CUSTOMIZE YOUR PROFILE
                </h1>
                <label>Gender</label>
                <select @change="onChangeGender()" v-model="selectedGender" placeholder="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>   
                <label>Who I'm looking for?</label>
                <select v-model="selectedLooking" @change="onChangeLooking()" placeholder="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="female-and-male">Male and female</option>
                    <option value="other">Other</option>
                </select>
                <router-link to="/" id="button">
                    BACK TO GAME
                </router-link>              
                </form>
            </div>

        </div>
        <div id="background-top-cards">
            <div class="background-card background-top-card"></div>
            <div class="background-card background-top-card"></div>
        </div>

        <div id="background-bottom-cards">
            <div class="background-card background-bottom-card"></div>
            <div class="background-card background-bottom-card"></div>
        </div>
    </main>
</template>

<script setup lang="ts">

import {ref} from 'vue';

var selectedGender = ref(localStorage.getItem("gender")==null ? "female":localStorage.getItem("gender"));
var selectedLooking = ref(localStorage.getItem("looking") == null ? "female" :localStorage.getItem("looking"));


const onChangeGender=() => {
    localStorage.setItem("gender", selectedGender.value === null ? "male" : selectedGender.value);
}
const onChangeLooking=() => {
    localStorage.setItem("looking", selectedLooking.value === null ? "male" : selectedLooking.value);
}
</script>

<style scoped>
label{
    color: #B12B0D;
    position: relative;
    opacity: 70%;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    justify-content: center;
    align-items: center;
}

#button{
    border-radius: 20px;
    color: white;
    background-color: #B12B0D;
    padding: 5px 10px;
    font-weight: semibold;
    margin-top: 25px;
}
h1{
    text-align: center;
    margin-top: 50px;
    line-height: 1.1em;
}
select{
    border: none;
    width: 85%;
    height: 35px;
    /* border-radius: 5px; */
    border-bottom: 2px solid gray;
    background-color: transparent;

}
select:focus {
    border-color: none   !important;
    border: none;
}
main {
    background-color: #89A094;
    width: 100vw;
    height: 100vh;

    overflow: hidden;
}

#background-center-cards, #background-top-cards, #background-bottom-cards  {
    position: relative
}

.background-card {
    position: absolute;
    height: 60vh;
    width: 85vw;
    border-radius: 20px;

    max-width: 350px;
    max-height: 500px;
}

.background-center-card {
    top: 20vh;
    left: 7.5vw;
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
    right: -40vw;
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
    left: -30vw;
}

.background-bottom-card:last-child {
    background-color: #e47e7e;
    transform: rotateZ(-20deg); 
}

.background-bottom-card:first-child {
    background-color: #b12b02;
    transform: rotateZ(-18deg) translateY(4vh) translateX(10vw);
}

</style>
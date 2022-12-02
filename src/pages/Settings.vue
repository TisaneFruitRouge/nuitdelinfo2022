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
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>   
                <label>Who I'm looking for?</label>
                <select v-model="selectedLooking" @change="onChangeLooking()" placeholder="Gender">
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <button >
                    BACK TO GAME
                </button>              
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

        <div id="buttons">

        </div>
    </main>
</template>

<script setup lang="ts">

import AcceptButton from "../components/Home/AcceptButton.vue";
import RejectButton from "../components/Home/RejectButton.vue";

import Card from "../components/Home/Card.vue";


var selectedGender =localStorage.getItem("Gender")==null ? "Female":localStorage.getItem("Gender");
var selectedLooking = localStorage.getItem("Looking") == null ? "Female" :localStorage.getItem("Looking");


function on_match(value: boolean) {
}

const onChangeGender=() => {
    console.log(selectedGender);
    localStorage.setItem("Gender",selectedGender==null?"":selectedGender);
}
const onChangeLooking=() => {
    console.log(selectedLooking);
    localStorage.setItem("Looking",selectedGender==null?"":selectedGender);
}
</script>

<style scoped>
label{
    color: #B12B0D;
    margin-left: 10%;
    position: relative;
    top: 30px;
    opacity: 70%;
}
button{
    margin-left: 25%;
    width: 50%;
    height: 40px;
    margin-top: 25%;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #B12B0D;
}
h1{
    text-align: center;
    margin-top: 50px;
}
select{
    border: none;
    width: 85%;
    height: 35px;
    /* border-radius: 5px; */
    margin-left: 7.5%;
    margin-top: 20px;
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

#buttons {

    width: 100vw;

    position: fixed;
    top: 85vh;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
}


</style>
<template>
<main>
    <div id="background-center-cards">
        <div class="background-card background-center-card"></div>
        <div class="background-card background-center-card"></div>
        <div class="background-card background-center-card"></div>
        <div class="background-card background-center-card"></div>
        <div class="create_profile"></div>
    </div>

    <div id="background-top-cards">
        <div class="background-card background-top-card"></div>
        <div class="background-card background-top-card"></div>
    </div>

    <div id="background-bottom-cards">
        <div class="background-card background-bottom-card"></div>
        <div class="background-card background-bottom-card"></div>
    </div>

    <div class="create_profile">
        <h1> CREATE YOUR <br> STD PROFILE </h1>
        <form method="post">
            <div class="form_items">
            <input v-model="Username"  type="text" id="username" name="username" placeholder="Name"/>
                    
            <select v-model="Gender" name="identity">
                <option value="" disabled> Gender </option>
                <option value="female"> Female </option>
                <option value="male"> Male </option>
                <option value="other"> Other </option>
            </select>

            <select v-model="Looking" name="genders">
                <option value="" disabled> Who am I looking for ? </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="both">Male and Female</option>
                <option value="other">Other</option>
            </select>   
            </div>

                
        
        </form>  
        <div @click="StartGame"  class="test_button">
            <button  > START SWIPING </button>
        </div> 
    </div>
</main>

</template>

<script setup lang="ts">

import {useRouter} from 'vue-router'
import {ref} from 'vue';

let Username = ref("");
let Gender = ref("female");
let Looking =ref("male");

const navigate = useRouter();


const StartGame = () => {
    if(Username.value !== "" && Gender.value !== "" &&  Looking.value !== "" ){
        //verifer les valeur des champs mes flemme
        localStorage.setItem("name",Username.value);
        localStorage.setItem("Gender",Gender.value);
        localStorage.setItem("Looking",Looking.value);
        navigate.push('/');
    }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Inter:bold");

main {
    background-color: #89A094;
    margin: auto;
    height: 100vh;

    overflow: hidden;
}
.create_profile {
    font-family: 'Inter';
    background-color: #f8e6e6;
    height: 60%;
    width: 80%;
    position: absolute;
    display:flex;
    flex-direction: column;
    border-radius: 30px;
    top: 17%;
    left: 10%;
    max-width: 350px;
}

h1 {
    text-align: center;
    font-weight: lighter;
    line-height: 1.25em;
    font-size: 1.8em;
}

form {
    font-family: 'Inter';
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    height: 100%;
}

input, select {
    border: none;
    border-bottom: solid 1px #0e582d;
    background-color: #f8e6e6;
    color:#ba190d;
    margin-bottom: 1%;
    padding-top:8%;
}

.form_items {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
}

.test_button {
    justify-content: center;
    display: flex;
}

button {
    color:white;
    background-color: #ba190d;
    border-radius: 15em;
    height: 4em;
    width: 80%;
    margin-bottom: 15%;
    margin: 500px, 500px;
    font-weight: bold;
    font-size: medium;
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

</style>
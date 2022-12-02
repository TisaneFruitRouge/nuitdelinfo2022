<template>
  <div class ="popup">
    <div class="popup-bg">
    </div>
    <div class="popup-container">>
      <div class="popup-box">
        <h1> YOU'RE AMAZING!</h1>
        <div class="popup-text">You were able to correctly identify all individuals that have STDs. If you'd still like to learn about Sexually Transmitted Diseases and how you can avoid them, you can</div>
        <a href="www.google.com">Click here to learn more.</a>
        <button class="understand-button">I UNDERSTAND</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Check from '../../assets/check.png';
</script>

<style scoped>

.popup {
  z-index: 1000;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
}

.popup-bg {
  background-color: black;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 40%;
}

.popup-container {
  position: absolute;
  height: 100%;
  display: flex;
  left: 5%;
  right: 5%;
  align-items: center;
}

.popup-box {
  border-radius: 2em;
  background-color: #f8e6e6;
  opacity: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;

}

.popup-text {
  padding: 0.2em 1em;
}

a {
  padding-top: 1em;
  color: #89A094;
  text-decoration:none;
}

.understand-button {
  align-self: center;

  color:white;
  background-color: #ba190d;
  border-radius: 15em;
  height: 4em;
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: bold;
  font-size: medium;
}

h1 {
  color: #89A094;
  line-height: 1.2em;
  padding: 0.4em 0;
}


</style>
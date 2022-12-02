<template>
  <Teleport to="body">
    <div class="popup">
      <div class="popup-bg">
      </div>
      <div class="popup-container">>
        <div class="popup-box">
          <h1> HOLD UP!</h1>
          <div class="popup-text">Unfortunately, you guessed wrong ! The person you matched with had an STD without informing you.</div>
            <h1> WHAT COULD I HAVE KNOWN?</h1>
          <div class="popup-text">{{explication}}</div>
          <a href="www.google.com">Click here to learn more about STDs.</a>
          <button class="understand-button" @click="click">I UNDERSTAND</button>
        </div>
      </div>
    </div>
</Teleport>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  click: any;
  explication: string;
}>()

const {click, explication} = toRefs(props);

</script>

<style scoped>

.popup {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
}

.popup-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  opacity: 40%;
}

.popup-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.popup-box {
  z-index: 20;
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
  color: #b12b02;
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
  color: #b12b02;
  line-height: 1.2em;
  padding: 0.4em 0;
}


</style>
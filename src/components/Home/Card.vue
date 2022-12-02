<template>
    <div :class="isOpen ? 'background-card open' : 'background-card'">
        <img :src={Banana} alt="banana" @click="toggleProfile">
        <h2>{{name}} - {{age}} ans</h2>
        <p>{{description}}</p>
    </div>
</template>

<script setup lang="ts">

import { toRefs, ref } from 'vue';
interface IProps {
    name: string;
    description: string;
    image: string;
    age: number;
}

let background: HTMLElement;
let drag_start_pos: {
  x: number,
  y : number,
} = {x: 0, y: 0};

let card_pos: {
  x: number,
  y : number,
} = {x: 0, y: 0};

let is_dragging: boolean = false;

function lerp (start:number, end:number, amt:number) {
  return (1 - amt) * start + amt * end
}
let lastTick = performance.now()

function reset() {
  drag_start_pos.x = 0;
  drag_start_pos.y = 0;
  card_pos.x = 0;
  card_pos.y = 0;
  is_dragging = false;

  // RESET

}

function swipe(match:boolean) {
  console.log("match : ", match)

  // Match

  reset();
}

// Tick
function update(new_tick: number) {

  const delta_time = (new_tick - lastTick) / 1000.0
  lastTick = new_tick

  if (!background) {
    let card_container = document.getElementById("background-center-cards") as HTMLElement
    background = card_container.children[4] as HTMLElement
  }


  let window_width = window.outerWidth

  if (!is_dragging) {
    if (card_pos.x < -window_width / 4) {
      card_pos.x = lerp(card_pos.x, -window_width * 2, delta_time * 5)
    }
    else if (card_pos.x > window_width / 4) {
      card_pos.x = lerp(card_pos.x, window_width * 2, delta_time * 5)
    }
    else {
      card_pos.x = lerp(card_pos.x, 0, delta_time * 5)
    }
    card_pos.y = lerp(card_pos.y, 0, delta_time * 5)

    if (card_pos.x < -window_width * 1.75) {
      swipe(false);
    }
    else if (card_pos.x > window_width * 1.75) {
      swipe(true);
    }
  }

  if (background) {

    background.style.left = `calc(7.5vw + ${card_pos.x}px)`
    background.style.top = `calc(20vw + ${card_pos.y}px)`
    background.style.rotate = card_pos.x / 20 + 'deg'
  }

  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);


// handle events

function begin_drag (x:number, y:number) {
  drag_start_pos.x = x;
  drag_start_pos.y = y;
  is_dragging = true;
}

function end_drag(x:number, y:number) {
  is_dragging = false;
}

function drag (x:number, y:number) {
  if (!is_dragging)
    return;
  let delta_x: number = x - drag_start_pos.x;
  let delta_y: number = y - drag_start_pos.y;
  drag_start_pos.x = x;
  drag_start_pos.y = y;

  card_pos.x += delta_x;
  card_pos.y += delta_y;
}

// Register events
addEventListener('touchstart', function(e:TouchEvent) { begin_drag(e.touches[0].clientX, e.touches[0].clientY)})
addEventListener('touchmove', function(e:TouchEvent) { drag(e.touches[0].clientX, e.touches[0].clientY)})
addEventListener('touchend', function(e:TouchEvent) { end_drag(e.touches[0].clientX, e.touches[0].clientY)})

addEventListener('mousedown', function(e:MouseEvent) { begin_drag(e.clientX, e.clientY)})
addEventListener('mousemove', function(e:MouseEvent) { drag(e.clientX, e.clientY)})
addEventListener('mouseup', function(e:MouseEvent) { end_drag(e.clientX, e.clientY)})
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
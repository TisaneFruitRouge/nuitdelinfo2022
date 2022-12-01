<template>
  <div id="background-center-cards" class="background-card">

  </div>
</template>

<script setup lang="ts">

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

function update(new_tick: number) {

  const delta_time = (new_tick - lastTick) / 1000.0
  lastTick = new_tick

  if (!background)
    background = document.getElementById("background-center-cards") as HTMLElement


  if (!is_dragging) {
    card_pos.x = lerp(card_pos.x, 0, delta_time * 10)
    card_pos.y = lerp(card_pos.y, 0, delta_time * 10)



  }

  if (background) {
    background.style.left = card_pos.x + 'px'
    background.style.top = card_pos.y + 'px'
    background.style.rotate = card_pos.x / 20 + 'deg'

  }

  window.requestAnimationFrame(update);
}


window.requestAnimationFrame(update);

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

addEventListener('touchstart', function(e:TouchEvent) { begin_drag(e.touches[0].clientX, e.touches[0].clientY)})
addEventListener('touchmove', function(e:TouchEvent) { drag(e.touches[0].clientX, e.touches[0].clientY)})
addEventListener('touchend', function(e:TouchEvent) { end_drag(e.touches[0].clientX, e.touches[0].clientY)})

addEventListener('mousedown', function(e:MouseEvent) { begin_drag(e.clientX, e.clientY)})
addEventListener('mousemove', function(e:MouseEvent) { drag(e.clientX, e.clientY)})
addEventListener('mouseup', function(e:MouseEvent) { end_drag(e.clientX, e.clientY)})
</script>

<style scoped>

.background-card {
  top: 20vh;
  left: 7.5vw;

  position: fixed;
  height: 60vh;
  width: 85vw;
  border-radius: 20px;

  max-width: 350px;
  max-height: 500px;

  background-color: #f8e6e6;
}


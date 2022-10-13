import { setupGround, updateGround } from "./ground.js";
import { setupDino, updateDino } from "./dino.js";

const WORLD_HEIGHT = 30;
const WORLD_WIDTH = 100;
const SPEED_SCALE_INC = 0.00001;
const worldElem = document.querySelector("[data-world]");
const scoreElem = document.querySelector("[data-score]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
document.addEventListener("keydown", handleStart, { once: true });

//update loop
let lastTime;
let speedScale;
let score;
function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;

  updateGround(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);
  updateDino(delta, speedScale);

  lastTime = time;
  window.requestAnimationFrame(update);
}

function updateScore(delta) {
  score += delta * 0.01;
  scoreElem.textContent = Math.floor(score);
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INC;
}
function handleStart() {
  speedScale = 1;
  lastTime = null;
  score = 0;
  setupGround();
  setupDino();
  window.requestAnimationFrame(update);
}

//resize
function setPixelToWorldScale() {
  let worldToPixelScale;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}

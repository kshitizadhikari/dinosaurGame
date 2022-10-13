import {
  getCustomProperty,
  incCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js";

const dinoElem = document.querySelector("[data-dino]");
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const JUMP_SPEED = 0.45;
const FRAME_TIME = 150;

let isJumping;
let dinoFrame;
let currentFrame;
let yVelocity;

export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrame = 0;
  yVelocity = 0;
  setCustomProperty(dinoElem, "--bottom", 0);
  document.removeEventListener("keydown", onJump);
  document.addEventListener("keydown", onJump);
}

export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump(delta);
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoElem.src = `imgs/dino-stationary.png`;
    return;
  }

  if (currentFrame >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElem.src = `imgs/dino-run-${dinoFrame}.png`;
    currentFrame -= FRAME_TIME;
  }
  currentFrame += delta * speedScale;
}

function handleJump(delta) {
  if (!isJumping) return;

  incCustomProperty(dinoElem, "--bottom", yVelocity * delta);

  if (getCustomProperty(dinoElem, "--bottom") <= 0) {
    setCustomProperty(dinoElem, "--bottom", 0);
    isJumping = false;
  }

  yVelocity = -GRAVITY * delta;
}

function onJump(e) {
  if (isJumping || e.code !== "Space") return;

  yVelocity = JUMP_SPEED;
  isJumping = true;
}

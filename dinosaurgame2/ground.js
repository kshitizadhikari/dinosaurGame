import {
  getCustomProperty,
  incCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js";

const groundElems = document.querySelectorAll("[data-ground]");

const SPEED = 0.05;

export function setupGround() {
  setCustomProperty(groundElems[0], "--left", 0);
  setCustomProperty(groundElems[1], "--left", 300);
}
export function updateGround(delta) {
  groundElems.forEach((ground) => {
    incCustomProperty(ground, "--left", delta * SPEED * -1);

    if (getCustomProperty(ground, "--left") <= -300) {
      setCustomProperty(ground, "--left", 300);
    }
  });
}

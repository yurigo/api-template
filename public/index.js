import { $ } from "./utils/$.js";
import Vector from "./utils/Vector.js";

const position = new Vector(3, 6);
const direction = new Vector(1, 1.6);
const speed = 2;

const canvas = $("main");
const dvd = $("#dvd");
const lightswitch = $("#lightswitch");

const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

const nearHue = (hue1, hue2) => {
  const diff = Math.abs(hue1 - hue2);
  return diff < 30 || diff > 330;
};

const getNewHue = () => {
  const hue = parseInt(getComputedStyle(dvd).getPropertyValue("--hue"));
  const newHue = Math.floor(Math.random() * 360);
  if (nearHue(hue, newHue)) {
    return getNewHue();
  }
  return newHue;
};

const changeColor = (e) => {
  document.documentElement.style.setProperty("--hue", getNewHue());
};

const hasCollisionX = () =>
  position.x + dvdWidth >= canvas.clientWidth || position.x < 0;

const hasCollisionY = () =>
  position.y + dvdHeight >= canvas.clientHeight || position.y < 0;

const draw = () => {
  dvd.style.left = position.x + "px";
  dvd.style.top = position.y + "px";
};

function animate() {
  position.add(direction.multiply(speed));

  if (hasCollisionX()) {
    direction.x *= -1;
    changeColor();
  }

  if (hasCollisionY()) {
    direction.y *= -1;
    changeColor();
  }

  draw();

  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

// Add event listener to change color on click
canvas.addEventListener(
  "click",
  (e) => {
    console.log("clicked");

    changeColor();
  },
  false
);

// Add event listener to change color on key press
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    changeColor();
  }
});

lightswitch.addEventListener("change", (event) => {
  event.stopPropagation();
  console.log("lightswitch toggled");

  dvd.classList.toggle("on");
  // if (event.target.checked) {
  //   document.body.classList.add("dark-mode");
  // } else {
  //   document.body.classList.remove("dark-mode");
  // }
});

$("#controls > label").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("lightswitch clicked");
});

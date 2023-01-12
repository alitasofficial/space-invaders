import { createAliens } from "./functions/alien";
import { keys, updateGame } from "./functions/updateGame";

createAliens();

// update the state of the pressed key in keys array
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

setInterval(updateGame, 20);

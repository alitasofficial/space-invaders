import { Alien } from "../components/Alien";

const aliens = [];
const ALIEN_ROWS = 5;
const ALIEN_COLS = 9;

const createAliens = () => {
  for (let row = 0; row < ALIEN_ROWS; row++) {
    for (let col = 0; col < ALIEN_COLS; col++) {
      const alien = new Alien({
        x: (innerWidth - ALIEN_COLS * 50) / 2 + col * 50,
        y: 30 + row * 40,
      });
      aliens.push(alien);
    }
  }
};

const getLeftMostAlien = () => {
  return aliens.reduce((minAlien, currentAlien) => {
    return minAlien.x < currentAlien.x ? minAlien : currentAlien;
  });
};

const getRightMostAlien = () => {
  return aliens.reduce((maxAlien, currentAlien) => {
    return maxAlien.x > currentAlien.x ? maxAlien : currentAlien;
  });
};

export { aliens, createAliens, getLeftMostAlien, getRightMostAlien };

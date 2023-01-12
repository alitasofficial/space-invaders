import { bullets, createBullet, removeBullet } from "./bullet";
import {
  aliens,
  createAliens,
  getLeftMostAlien,
  getRightMostAlien,
} from "./alien";
import { Ship } from "../components/Ship";

const ship = new Ship();

const keys = {
  ArrowRight: false,
  ArrowLeft: false,
  [" "]: false,
};

const updateGame = () => {
  // SHIP CONTROL
  keys["ArrowRight"] && ship.x < innerWidth - 50 && ship.moveRight();
  keys["ArrowLeft"] && ship.x > 0 && ship.moveLeft();
  keys[" "] && ship.fire({ createBullet });

  // ALIENS
  aliens.forEach((alien) => {
    alien.move();
  });

  const leftMostAlien = getLeftMostAlien();
  if (leftMostAlien.x < 30) {
    aliens.forEach((alien) => {
      alien.setDirectionRight();
      alien.moveDown();
    });
  }

  const rightMostAlien = getRightMostAlien();
  if (rightMostAlien.x > innerWidth - 80) {
    aliens.forEach((alien) => {
      alien.setDirectionLeft();
      alien.moveDown();
    });
  }

  // BULLETS
  bullets.forEach((bullet) => {
    bullet.move();
    bullet.y < 0 && removeBullet(bullet, bullets);
  });
};

export { keys, updateGame };

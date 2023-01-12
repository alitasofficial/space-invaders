import { Entity } from "./Entity";
import shipImg from "../images/ship.png";

export class Ship extends Entity {
  constructor() {
    super({ tag: "img", className: "ship" });
    this.el.src = shipImg;

    this.SHIP_WIDTH = 50;
    this.SHIP_SPEED = 8;
    this.canFire = true;

    this.setX(innerWidth / 2);
    this.setY(innerHeight - 80);
  }

  moveRight() {
    this.x += this.SHIP_SPEED;
    this.setX(this.x);
  }

  moveLeft() {
    this.x -= this.SHIP_SPEED;
    this.setX(this.x);
  }

  fire({ createBullet }) {
    if (this.canFire) {
      this.canFire = false;
      createBullet({
        x: this.x + this.SHIP_WIDTH / 2,
        y: this.y,
      });
      setTimeout(() => (this.canFire = true), 500);
    }
  }
}

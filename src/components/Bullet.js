import { Entity } from "./Entity";

export class Bullet extends Entity {
  constructor({ x, y }) {
    super({ className: "bullet" });
    this.BULLET_SPEED = 3;

    this.setX(x);
    this.setY(y);
  }

  move() {
    this.y -= this.BULLET_SPEED;
    this.setY(this.y);
  }
}

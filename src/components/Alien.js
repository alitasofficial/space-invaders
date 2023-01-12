import { Entity } from "./Entity";
import alienImg from "../images/alien.png";

export class Alien extends Entity {
  constructor({ x, y }) {
    super({ tag: "img", className: "alien" });
    this.el.src = alienImg;

    this.SPEED = 0.5;
    this.MOVE_DOWN = 2;
    this.direction = "left";

    this.setX(x);
    this.setY(y);
  }

  setDirectionRight() {
    this.direction = "right";
  }

  setDirectionLeft() {
    this.direction = "left";
  }

  moveDown() {
    this.setY(this.y + this.MOVE_DOWN);
  }

  move() {
    if (this.direction === "left") {
      this.setX(this.x - this.SPEED);
    } else {
      this.setX(this.x + this.SPEED);
    }
  }
}

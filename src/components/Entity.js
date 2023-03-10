export class Entity {
  constructor({ tag = "div", className = "" } = {}) {
    this.el = document.createElement(tag);
    this.el.className = `entity ${className}`;
    const body = document.querySelector("#app");
    body.appendChild(this.el);
  }

  setX(x) {
    this.x = x;
    this.el.style.left = `${this.x}px`;
  }

  setY(y) {
    this.y = y;
    this.el.style.top = `${this.y}px`;
  }

  remove() {
    this.el.remove();
  }
}

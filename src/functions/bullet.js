import { Bullet } from "../components/Bullet";

const bullets = [];
const createBullet = ({ x, y }) => {
  bullets.push(
    new Bullet({
      x,
      y,
    })
  );
};

const removeBullet = (bullet, bulletArray) => {
  bullet.remove();
  bulletArray.splice(bulletArray.indexOf(bullet), 1);
};

export { bullets, createBullet, removeBullet };

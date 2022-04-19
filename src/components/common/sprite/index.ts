export class Sprite {
  position;
  image;
  ctx;
  constructor({ position, imageSrc, ctx }: any) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}

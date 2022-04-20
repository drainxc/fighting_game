const gravity = 1.1;

type positionType = {
  x?: number;
  y?: number;
};

export class Fighter {
  name: string;
  position: positionType;
  speed: positionType;
  width: number;
  height: number;
  range;
  image;
  attacking: boolean;
  frame: number;
  framecurrent: number;
  count: number;
  delay: number;
  canvas;
  ctx;

  constructor({
    name,
    position,
    imageSrc,
    offset,
    idleFrame,
    width,
    height,
    canvas,
    ctx,
  }: any) {
    this.name = name;
    this.position = position;
    this.speed = {
      x: 0,
      y: 10,
    };
    this.height = 200;
    this.width = 100;
    this.image = new Image();
    this.image.src = imageSrc;
    this.range = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset,
      width: width,
      height: height,
    };
    this.attacking = false;
    this.frame = idleFrame;
    this.framecurrent = 0;
    this.count = 1;
    this.delay = 6;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw() {
    if (!this.position.x || !this.position.y) return;
    this.ctx.drawImage(
      this.image,
      0,
      this.framecurrent * (this.image.height / this.frame),
      this.image.width,
      this.image.height / this.frame,
      this.position.x - 130,
      this.position.y - 0,
      this.image.width * 2,
      (this.image.height / this.frame) * 2
    );
    this.ctx.scale(-1, 1);

    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(-this.position.x, this.position.y, -this.width, this.height);

    // this.ctx.fillStyle = "white";
    // this.ctx.fillRect(
    //   -this.position.x,
    //   this.position.y,
    //   this.range.width,
    //   this.range.height
    // );
  }

  update() {
    this.draw();

    if (this.count % this.delay === 0) {
      if (this.framecurrent < this.frame - 1) {
        this.framecurrent += 1;
      } else {
        this.framecurrent = 0;
      }
    }
    this.count++;

    if (!this.position.y || !this.speed.y) return;

    this.position.y += this.speed.y;
    if (
      this.position.y + this.height + this.speed.y >=
      this.canvas.height - 75
    ) {
      this.position.y = this.canvas.height - (75 + 200);
    } else {
      this.speed.y += gravity;
    }

    if (!this.position.x || !this.speed.x) return;
    this.position.x += this.speed.x;

    this.range.position.x = this.position.x + this.range.offset.x;
    this.range.position.y = this.position.y;
  }
}

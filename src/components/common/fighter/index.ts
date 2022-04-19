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
    this.height = 250;
    this.width = 80;
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
      this.framecurrent * (this.image.width / this.frame),
      0,
      this.image.width / this.frame,
      this.image.height,
      this.position.x - 450,
      this.position.y - 325,
      (this.image.width / this.frame) * 2,
      this.image.height * 2
    );

    // this.ctx.fillStyle = "red";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    // if (key.eattack) {
    //   ctx.fillStyle = "white";
    //   ctx.fillRect(
    //     enemy.range.position.x,
    //     enemy.range.position.y,
    //     enemy.range.width,
    //     enemy.range.height
    //   );
    // }
  }

  update() {
    this.draw();

    const { width, height } = this.canvas;

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
      this.position.y = height - (75 + 250);
    } else {
      this.speed.y += gravity;
    }

    if (!this.position.x || !this.speed.x) return;
    if (this.position.x < 10) {
      this.position.x = 10;
    } else if (this.position.x > width - 100) {
      this.position.x = width - 100;
    }
    this.position.x += this.speed.x;

    this.range.position.x = this.position.x + this.range.offset.x;
    this.range.position.y = this.position.y;
  }
}

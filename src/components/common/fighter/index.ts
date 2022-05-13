import * as D from "../../../lib/export/data";
import { drawImg } from "../../../lib/function/drawImage";

const gravity = 1.1;

type coordinateType = {
  x?: number;
  y?: number;
};

export class Fighter {
  position: coordinateType;
  speed: coordinateType;
  width: number;
  height: number;
  range;
  image;
  frame: number;
  framecurrent: number;
  count: number;
  delay: number;
  canvas;
  ctx;
  img: string;

  constructor({ position, imageSrc, idleFrame, canvas, ctx, img }: any) {
    this.position = position;
    this.speed = {
      x: 0,
      y: 10,
    };
    this.height = 200;
    this.width = 70;
    this.image = new Image();
    this.image.src = imageSrc;
    this.range = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
    };
    this.frame = idleFrame;
    this.framecurrent = 0;
    this.count = 1;
    this.delay = 7;
    this.canvas = canvas;
    this.ctx = ctx;
    this.img = img;
  }

  draw() {
    const data = {
      ctx: this.ctx,
      image: this.image,
      framecurrent: this.framecurrent,
      imageWidth: this.image.width,
      frame: this.frame,
      imageHeight: this.image.height,
      posY: this.position.y,
    };

    if (!this.position.x || !this.position.y) return;
    if (D.pkey.lf) {
      // 왼쪽을 바라보고 있을 때
      this.ctx.scale(-1, 1); // 캐릭터 반전
      drawImg(data, -this.position.x, 75);
    } else if (D.pkey.rf) {
      // 왼쪽을 바라보고 있을 때
      drawImg(data, this.position.x, 0);
    } else {
      drawImg(data, this.position.x, 0);
    }

    if (D.ekey.lf) {
      drawImg(data, -this.position.x, 75);
      this.ctx.scale(-1, 1);
    } else if (D.ekey.rf) {
      drawImg(data, this.position.x, 0);
    } else {
      drawImg(data, this.position.x, 0);
    }
    this.ctx.scale(-1, 1);

    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(
    //   -this.position.x,
    //   this.position.y,
    //   -this.width,
    //   this.height
    // );

    // this.ctx.fillStyle = "white";
    // this.ctx.fillRect(-this.position.x, this.position.y +50, -250, 150);
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
    this.count++; // 애니메이션

    if (!this.position.y || !this.speed.y) return;

    this.position.y += this.speed.y;
    if (
      this.position.y + this.height + this.speed.y >=
      this.canvas.height - 75
    ) {
      this.position.y = this.canvas.height - (75 + 200);
    } else {
      this.speed.y += gravity;
    } // 추락

    if (!this.position.x || !this.speed.x) return;
    this.position.x += this.speed.x; // 이동

    this.range.position.x = this.position.x;
    this.range.position.y = this.position.y; // 히트박스 위치 조정
  }
}

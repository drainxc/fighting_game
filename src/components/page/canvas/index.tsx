import React, { useState, useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [ctx, setCtx] = useState<any>();

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth - 1;
    canvas.height = window.innerHeight - 1;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;

    type SpriteType = {
      x?: number;
      y?: number;
    };

    const gravity = 0.7;

    class Sprite {
      position: SpriteType;
      speed: SpriteType;
      height: number;
      constructor({ position, speed }: any) {
        this.position = position;
        this.speed = speed;
        this.height = 150;
      }

      draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, 50, this.height);
      }

      update() {
        this.draw();
        if (!this.position.y || !this.speed.y) return;

        this.speed.y += gravity;
        this.position.y += this.speed.y;
        if (this.position.y + this.height + this.speed.y >= canvas.height) {
          this.position.y = canvas.height - 150;
        }

        if (!this.position.x || !this.speed.x) return;
        this.position.x += this.speed.x;
      }
    }

    const player = new Sprite({
      position: {
        x: 1,
        y: 1,
      },
      speed: {
        x: 0,
        y: 5,
      },
    });

    const enemy = new Sprite({
      position: {
        x: 400,
        y: 100,
      },
      speed: {
        x: 0,
        y: 5,
      },
    });

    const key = {
      d: {
        press: false,
      },
      a: {
        press: false,
      },
    };

    function animate() {
      window.requestAnimationFrame(animate);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      player.update();
      enemy.update();

      if (key.d.press) {
        player.speed.x = 3;
      } else if (key.a.press) {
        player.speed.x = -3;
      }else {
        player.speed.x = 0;
      }
    }

    animate();

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "d":
          key.d.press = true;
          break;
        case "a":
          key.a.press = true;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "d":
          key.d.press = false;
          break;
        case "a":
          key.a.press = false;
          break;
      }
    });

    setCtx(ctxRef.current);
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

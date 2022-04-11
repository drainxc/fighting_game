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

    const gravity = 0.3;

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

        this.position.y += this.speed.y;
        if (this.position.y + this.height + this.speed.y >= canvas.height) {
          this.position.y = canvas.height - 150;
        } else {
          this.speed.y += gravity;
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
        y: 10,
      },
    });

    const enemy = new Sprite({
      position: {
        x: 400,
        y: 100,
      },
      speed: {
        x: 0,
        y: 10,
      },
    });

    const key = {
      pd: {
        press: false,
      },
      pa: {
        press: false,
      },
      ed: {
        press: false,
      },
      ea: {
        press: false,
      },
    };

    function animate() {
      window.requestAnimationFrame(animate);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      player.update();
      enemy.update();

      if (key.pd.press) {
        player.speed.x = 3;
      } else if (key.pa.press) {
        player.speed.x = -3;
      } else {
        player.speed.x = 0;
      }

      if (key.ed.press) {
        enemy.speed.x = 3;
      } else if (key.ea.press) {
        enemy.speed.x = -3;
      } else {
        enemy.speed.x = 0;
      }
    }

    animate();

    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch (e.key) {
        case "d":
          key.pd.press = true;
          break;
        case "a":
          key.pa.press = true;
          break;
        case "w":
          player.speed.y = -10;
          break;
        case "ArrowRight":
          key.ed.press = true;
          break;
        case "ArrowLeft":
          key.ea.press = true;
          break;
        case "ArrowUp":
          enemy.speed.y = -10;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "d":
          key.pd.press = false;
          break;
        case "a":
          key.pa.press = false;
          break;
        case "ArrowRight":
          key.ed.press = false;
          break;
        case "ArrowLeft":
          key.ea.press = false;
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

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

    function animate() {
      window.requestAnimationFrame(animate);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      player.update();
      enemy.update();
    }

    animate();

    setCtx(ctxRef.current);
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

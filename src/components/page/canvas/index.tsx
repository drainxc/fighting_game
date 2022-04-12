import React, { useState, useRef, useEffect } from "react";
import { collision } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [ctx, setCtx] = useState<any>();

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;

    type SpriteType = {
      x?: number;
      y?: number;
    };

    const gravity = 1.1;

    class Sprite {
      position: SpriteType;
      speed: SpriteType;
      width: number;
      height: number;
      color: string;
      range: any;
      attacking: boolean;
      constructor({ position, speed, color, offset }: any) {
        this.position = position;
        this.speed = speed;
        this.height = 150;
        this.width = 50;
        this.color = color;
        this.range = {
          position: {
            x: this.position.x,
            y: this.position.y,
          },
          offset,
          width: 100,
          height: 50,
        };
        this.attacking = false;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        if (this.attacking) {
          ctx.fillStyle = "white";
          ctx.fillRect(
            this.range.position.x,
            this.range.position.y,
            this.range.width,
            this.range.height
          );
        }
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

        this.range.position.x = this.position.x + this.range.offset.x;
        this.range.position.y = this.position.y;
      }

      attack() {
        this.attacking = true;
        setTimeout(() => {
          this.attacking = false;
        }, 100);
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
      offset: {
        x: 0,
        y: 0,
      },
      color: "blue",
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
      offset: {
        x: -50,
        y: 0,
      },
      color: "red",
    });

    const key = {
      pd: false,
      pa: false,
      ed: false,
      ea: false,
    };

    function animate() {
      window.requestAnimationFrame(animate);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      player.update();
      enemy.update();

      pressSense(player, key.pd, key.pa);
      pressSense(enemy, key.ed, key.ea);

      if (!enemy.position.x || !enemy.position.y) return;

      if (collision(player, enemy)) {
        console.log("hit");
      } // 히트 판정
      if (collision(enemy, player)) {
        console.log("hit");
      } // 히트 판정
    }

    animate();

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "d":
          key.pd = true;
          break;
        case "a":
          key.pa = true;
          break;
        case "w":
          player.speed.y = -20;
          break;
        case "u":
          player.attack();
          break;

        case "ArrowRight":
          key.ed = true;
          break;
        case "ArrowLeft":
          key.ea = true;
          break;
        case "ArrowUp":
          enemy.speed.y = -20;
          break;
        case "7":
          enemy.attack();
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "d":
          key.pd = false;
          break;
        case "a":
          key.pa = false;
          break;
        case "ArrowRight":
          key.ed = false;
          break;
        case "ArrowLeft":
          key.ea = false;
          break;
      }
    });

    setCtx(ctxRef.current);
  }, []);

  return (
    <S.MainDiv>
      <canvas ref={canvasRef}></canvas>
    </S.MainDiv>
  );
}

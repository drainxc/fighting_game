import React, { useState, useRef, useEffect } from "react";
import { collision } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import backgroundimg from "../../../asset/img/DeadForest_BG.png";
// import shopImg from "../../../asset/img/shop_anim.png";
import warrior from "../../../asset/img/warriorSprite/Idle.png";
import wizard from "../../../asset/img/wizardSprite/Idle.png";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [ctx, setCtx] = useState<any>();
  const enemyHealthRef = useRef<HTMLDivElement>(null);
  const playerHealthRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;

    class Sprite {
      position;
      image;
      frame: number;
      scale: number;
      framecurrent: number;
      delay: number;
      count: number;
      constructor({ position, imageSrc, frame, scale = 1 }: any) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.frame = frame;
        this.scale = scale;
        this.framecurrent = 0;
        this.count = 1;
        this.delay = 7;
      }

      draw() {
        ctx.drawImage(
          this.image,
          this.framecurrent * (this.image.width / this.frame),
          0,
          this.image.width / this.frame,
          this.image.height,
          this.position.x,
          this.position.y,
          (this.image.width / this.frame) * this.scale,
          this.image.height * this.scale
        );
      }

      update() {
        this.draw();
        if (this.count % this.delay === 0) {
          if (this.framecurrent < this.frame - 1) {
            this.framecurrent += 1;
          } else {
            this.framecurrent = 0;
          }
          this.count++;
        } else {
          this.count++;
        }
      }
    }

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: backgroundimg,
      frame: 1,
    });

    // const shop = new Sprite({
    //   position: {
    //     x: 1280,
    //     y: 294,
    //   },
    //   imageSrc: shopImg,
    //   frame: 6,
    // });

    type FighterType = {
      x?: number;
      y?: number;
    };

    const gravity = 1.1;

    class Fighter {
      position: FighterType;
      speed: FighterType;
      width: number;
      height: number;
      range;
      image;
      attacking: boolean;
      frame: number;
      scale: number;
      framecurrent: number;
      count: number;
      delay: number;
      constructor({
        position,
        speed,
        imageSrc,
        offset,
        frame,
        scale = 2,
      }: any) {
        this.position = position;
        this.speed = speed;
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
          width: 100,
          height: 50,
        };
        this.attacking = false;
        this.frame = frame;
        this.scale = scale;
        this.framecurrent = 0;
        this.count = 1;
        this.delay = 7;
      }

      draw() {
        if (!this.position.x || !this.position.y) return;
        ctx.drawImage(
          this.image,
          this.framecurrent * (this.image.width / this.frame),
          0,
          this.image.width / this.frame,
          this.image.height,
          this.position.x - 450,
          this.position.y - 350,
          (this.image.width / this.frame) * this.scale,
          this.image.height * this.scale
        );

        ctx.fillStyle = "red";
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

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

        if (this.count % this.delay === 0) {
          if (this.framecurrent < this.frame - 1) {
            this.framecurrent += 1;
          } else {
            this.framecurrent = 0;
          }
          this.count++;
        } else {
          this.count++;
        }

        if (!this.position.y || !this.speed.y) return;

        this.position.y += this.speed.y;
        if (
          this.position.y + this.height + this.speed.y >=
          canvas.height - 75
        ) {
          this.position.y = canvas.height - (75 + 250);
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

    const player = new Fighter({
      position: {
        x: 300,
        y: 100,
      },
      speed: {
        x: 0,
        y: 10,
      },
      offset: {
        x: 0,
        y: 0,
      },
      imageSrc: warrior,
      frame: 10,
    });

    const enemy = new Fighter({
      position: {
        x: 1520,
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
      imageSrc: wizard,
      frame: 8,
    });

    const key = {
      pd: false,
      pa: false,
      ed: false,
      ea: false,
    };

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      // shop.update();
      player.update();
      enemy.update();

      pressSense(player, key.pd, key.pa);
      pressSense(enemy, key.ed, key.ea);

      if (!enemy.position.x || !enemy.position.y) return;

      if (collision(player, enemy) && enemyHealthRef.current !== null) {
        enemyHealthRef.current.style.width = `calc(${enemyHealthRef.current.style.width} - 1%)`;
      } // 히트 판정
      if (collision(enemy, player) && playerHealthRef.current !== null) {
        playerHealthRef.current.style.width = `calc(${playerHealthRef.current.style.width} - 1%)`;
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
          player.speed.y = -22;
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
          enemy.speed.y = -22;
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

  useEffect(() => {
    let stopWatch = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(stopWatch);
  }, [timer]);

  return (
    <>
      <S.MainDiv>
        <S.HealthBar>
          <S.PlayerBar>
            <div style={{ backgroundColor: "yellow", height: "50px" }}></div>
            <div
              ref={playerHealthRef}
              style={{
                position: "absolute",
                background: "red",
                width: "100%",
                top: 0,
                bottom: 0,
                right: 0,
              }}
            ></div>
          </S.PlayerBar>
          <S.Timer>{timer}</S.Timer>
          <S.EnemyBar>
            <div style={{ backgroundColor: "yellow", height: "50px" }}></div>
            <div
              ref={enemyHealthRef}
              style={{
                position: "absolute",
                background: "red",
                width: "100%",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            ></div>
          </S.EnemyBar>
        </S.HealthBar>
        <canvas ref={canvasRef}></canvas>
      </S.MainDiv>
    </>
  );
}

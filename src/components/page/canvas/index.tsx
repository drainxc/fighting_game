import React, { useState, useRef, useEffect } from "react";
import { collision } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import backgroundimg from "../../../asset/img/DeadForest_BG.png";
// import shopImg from "../../../asset/img/shop_anim.png";
import warriorIdle from "../../../asset/img/warriorSprite/Idle.png";
import warriorRun from "../../../asset/img/warriorSprite/Run.png";
import warriorJump from "../../../asset/img/warriorSprite/Jump.png";
import warriorFall from "../../../asset/img/warriorSprite/Fall.png";
import warriorAttack1 from "../../../asset/img/warriorSprite/Attack1.png";
import wizardIdle from "../../../asset/img/wizardSprite/Idle.png";
import wizardRun from "../../../asset/img/wizardSprite/Run.png";
import wizardJump from "../../../asset/img/wizardSprite/Jump.png";
import wizardFall from "../../../asset/img/wizardSprite/Fall.png";

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
      constructor({ position, imageSrc }: any) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
      }

      draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y);
      }

      update() {
        this.draw();
      }
    }

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: backgroundimg,
    });

    // const shop = new Sprite({
    //   position: {
    //     x: 1280,
    //     y: 294,
    //   },
    //   imageSrc: shopImg,
    //   frame: 6,
    // });

    type positionType = {
      x?: number;
      y?: number;
    };

    const gravity = 1.1;

    class Fighter {
      name: string;
      position: positionType;
      speed: positionType;
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
        name,
        position,
        speed,
        imageSrc,
        offset,
        idleFrame,
        scale = 2,
      }: any) {
        this.name = name;
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
          width: 320,
          height: 250,
        };
        this.attacking = false;
        this.frame = idleFrame;
        this.scale = scale;
        this.framecurrent = 0;
        this.count = 1;
        this.delay = 6;
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
          this.position.y - 325,
          (this.image.width / this.frame) * this.scale,
          this.image.height * this.scale
        );

        ctx.fillStyle = "red";
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        // if (key.pattack) {
        //   ctx.fillStyle = "white";
        //   ctx.fillRect(
        //     player.range.position.x,
        //     player.range.position.y,
        //     player.range.width,
        //     player.range.height
        //   );
        // }
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
          canvas.height - 75
        ) {
          this.position.y = canvas.height - (75 + 250);
        } else {
          this.speed.y += gravity;
        }

        if (!player.position.x || !enemy.position.x) return;
        if (
          !(enemy.position.x > player.position.x + this.width) ||
          !(player.position.x < enemy.position.x - this.width)
        ) {
          enemy.position.x += 9;
          player.position.x -= 9;
        }
        if (!this.position.x) return;
        if (this.position.x < 10) {
          this.position.x = 10;
        } else if (this.position.x > canvas.width - 100) {
          this.position.x = canvas.width - 100;
        }

        if (!this.position.x || !this.speed.x) return;
        this.position.x += this.speed.x;

        this.range.position.x = this.position.x + this.range.offset.x;
        this.range.position.y = this.position.y;
      }

      attack() {}
    }

    const player = new Fighter({
      name: "warrior",
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
      imageSrc: warriorIdle,
      idleFrame: 10,
    });

    const enemy = new Fighter({
      name: "wizard",
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
      imageSrc: wizardIdle,
      idleFrame: 8,
    });

    const key = {
      pr: false,
      pl: false,
      er: false,
      el: false,
      pjump: false,
      ejump: false,
      pfall: false,
      efall: false,
      pmove: false,
      emove: false,
      pfloat: false,
      efloat: false,
      pattack: false,
      eattack: false,
    };

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      // shop.update();
      player.update();
      enemy.update();

      pressSense(player, key.pr, key.pl, 7, -5);
      pressSense(enemy, key.er, key.el, 5, -7);

      if (key.pattack) {
        player.delay = 10;
        player.frame = 7;
        player.speed.x = 0;
        player.image.src = warriorAttack1;
      } else if (key.pjump) {
        player.frame = 3;
        player.image.src = warriorJump;
      } else if (key.pfall) {
        player.image.src = warriorFall;
      } else if (key.pmove) {
        player.frame = 8;
        player.image.src = warriorRun;
      } else {
        player.frame = 10;
        player.image.src = warriorIdle;
      }

      if (key.ejump) {
        enemy.frame = 2;
        enemy.image.src = wizardJump;
      } else if (key.efall) {
        enemy.image.src = wizardFall;
      } else if (key.emove) {
        enemy.frame = 8;
        enemy.image.src = wizardRun;
      } else {
        enemy.frame = 8;
        enemy.image.src = wizardIdle;
      }

      if (!enemy.position.x || !enemy.position.y) return;

      if (
        collision(player, enemy, key.pattack) &&
        enemyHealthRef.current !== null
      ) {
        enemyHealthRef.current.style.width = `calc(${enemyHealthRef.current.style.width} - 0.2%)`;
      }
      if (collision(enemy, player, false) && playerHealthRef.current !== null) {
        playerHealthRef.current.style.width = `calc(${playerHealthRef.current.style.width} - 0.2%)`;
      } // 히트 판정
    }

    animate();

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "d":
          key.pr = true;
          key.pmove = true;
          break;
        case "a":
          key.pl = true;
          key.pmove = true;
          player.delay = 15;
          break;
        case "w":
          if (!key.pfloat) {
            player.speed.y = -25;
            key.pjump = true;
            key.pfloat = true;
            setTimeout(() => {
              key.pfall = true;
              key.pjump = false;
              setTimeout(() => {
                key.pfall = false;
                key.pfloat = false;
              }, 400);
            }, 400);
          }
          break;
        case "u":
          player.framecurrent = 0;
          if (!key.pattack) {
            key.pattack = true;
            setTimeout(() => {
              key.pattack = false;
            }, 1000);
          }
          break;

        case "ArrowRight":
          key.er = true;
          key.emove = true;
          enemy.delay = 15;
          break;
        case "ArrowLeft":
          key.el = true;
          key.emove = true;
          break;
        case "ArrowUp":
          if (!key.efloat) {
            enemy.speed.y = -25;
            key.ejump = true;
            key.efloat = true;
            setTimeout(() => {
              key.efall = true;
              key.ejump = false;
              setTimeout(() => {
                key.efall = false;
                key.efloat = false;
              }, 400);
            }, 400);
          }
          break;
        case "7":
          enemy.attack();
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "d":
          key.pr = false;
          key.pmove = false;
          break;
        case "a":
          key.pl = false;
          key.pmove = false;
          player.delay = 6;
          break;
        case "ArrowRight":
          key.er = false;
          key.emove = false;
          enemy.delay = 6;
          break;
        case "ArrowLeft":
          key.el = false;
          key.emove = false;
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

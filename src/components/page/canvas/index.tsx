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
import wizardAttack1 from "../../../asset/img/wizardSprite/Attack1.png";
import { keyDown, keyUp } from "../../../lib/function/key";

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
        width,
        height,
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
          width: width,
          height: height,
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
      width: 320,
      height: 250,
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
        x: -390,
        y: 0,
      },
      imageSrc: wizardIdle,
      idleFrame: 8,
      width: 390,
      height: 250,
    });

    const ekey = {
      r: false,
      l: false,
      jump: false,
      fall: false,
      move: false,
      float: false,
      attack: false,
    };

    const pkey = {
      r: false,
      l: false,
      jump: false,
      fall: false,
      move: false,
      float: false,
      attack: false,
    };

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      // shop.update();
      player.update();
      enemy.update();

      pressSense(player, pkey.r, pkey.l, 8, -5);
      pressSense(enemy, ekey.r, ekey.l, 5, -8);

      if (pkey.attack) {
        player.delay = 5;
        player.frame = 7;
        player.speed.x = 0;
        player.image.src = warriorAttack1;
      } else if (pkey.jump) {
        player.frame = 3;
        player.image.src = warriorJump;
      } else if (pkey.fall) {
        player.image.src = warriorFall;
      } else if (pkey.move) {
        player.frame = 8;
        player.image.src = warriorRun;
      } else {
        player.frame = 10;
        player.image.src = warriorIdle;
      }

      if (ekey.attack) {
        enemy.delay = 5;
        enemy.frame = 8;
        enemy.speed.x = 0;
        enemy.image.src = wizardAttack1;
      } else if (ekey.jump) {
        enemy.frame = 2;
        enemy.image.src = wizardJump;
      } else if (ekey.fall) {
        enemy.image.src = wizardFall;
      } else if (ekey.move) {
        enemy.frame = 8;
        enemy.image.src = wizardRun;
      } else {
        enemy.frame = 8;
        enemy.image.src = wizardIdle;
      }

      if (!enemy.position.x || !enemy.position.y) return;

      if (
        collision(player, enemy, pkey.attack, 4) &&
        enemyHealthRef.current !== null
      ) {
        enemyHealthRef.current.style.width = `calc(${enemyHealthRef.current.style.width} - 2%)`;
      }
      if (
        collision(enemy, player, ekey.attack, 3) &&
        playerHealthRef.current !== null
      ) {
        playerHealthRef.current.style.width = `calc(${playerHealthRef.current.style.width} - 1.5%)`;
      } // 히트 판정
    }

    animate();

    const pkeycap = {
      w: "w",
      a: "a",
      d: "d",
      attack: "u",
    };
    const ekeycap = {
      w: "ArrowUp",
      a: "ArrowLeft",
      d: "ArrowRight",
      attack: "7",
    };

    window.addEventListener("keydown", (e) => {
      keyDown(e.key, pkey, player, pkeycap);
      keyDown(e.key, ekey, enemy, ekeycap);
    });

    window.addEventListener("keyup", (e) => {
      keyUp(e.key, pkey, player, pkeycap);
      keyUp(e.key, ekey, enemy, ekeycap);
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

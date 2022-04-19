import React, { useState, useRef, useEffect } from "react";
import { collision } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import backgroundimg from "../../../asset/img/DeadForest_BG.png";
import { keyDown, keyUp } from "../../../lib/function/key";
import {
  eframe,
  ekeycap,
  pframe,
  pkeycap,
  warriorImg,
} from "../../../lib/export/data";
import { wizardImg } from "../../../lib/export/data";
import { ekey } from "../../../lib/export/data";
import { pkey } from "../../../lib/export/data";
import { animation } from "../../../lib/function/animation";
import { Sprite } from "../../common/sprite";
import Timer from "../../common/timer";

export default function Canvas() {
  const canvasRef = useRef(null);
  const enemyHealthRef = useRef<HTMLDivElement>(null);
  const playerHealthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: backgroundimg,
      ctx: ctx,
    });

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
          (this.image.width / this.frame) * 2,
          this.image.height * 2
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

        const { width, height } = canvas;

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
          this.position.y = height - (75 + 250);
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
      imageSrc: warriorImg.idle,
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
      imageSrc: wizardImg.idle,
      idleFrame: 8,
      width: 390,
      height: 250,
    });

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      // shop.update();
      player.update();
      enemy.update();

      pressSense(player, pkey.r, pkey.l, 8, -5);
      pressSense(enemy, ekey.r, ekey.l, 5, -8);

      animation(pkey, player, warriorImg, pframe);
      animation(ekey, enemy, wizardImg, eframe);

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

    window.addEventListener("keydown", (e) => {
      keyDown(e.key, pkey, player, pkeycap);
      keyDown(e.key, ekey, enemy, ekeycap);
    });

    window.addEventListener("keyup", (e) => {
      keyUp(e.key, pkey, player, pkeycap);
      keyUp(e.key, ekey, enemy, ekeycap);
    });
  }, []);

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
          <Timer />
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

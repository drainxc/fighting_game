import React, { useRef, useEffect } from "react";
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
import { Fighter } from "../../common/fighter";
import { push } from "../../../lib/function/push";

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

    const player = new Fighter({
      name: "warrior",
      position: {
        x: 300,
        y: 100,
      },
      offset: {
        x: 0,
        y: 0,
      },
      imageSrc: warriorImg.idle,
      idleFrame: 10,
      width: 320,
      height: 250,
      canvas: canvas,
      ctx: ctx,
    });

    const enemy = new Fighter({
      name: "wizard",
      position: {
        x: 1520,
        y: 100,
      },
      offset: {
        x: -390,
        y: 0,
      },
      imageSrc: wizardImg.idle,
      idleFrame: 8,
      width: 390,
      height: 250,
      canvas: canvas,
      ctx: ctx,
    });

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      // shop.update();
      player.update();
      enemy.update();

      if (!player.position.x || !enemy.position.x) return;
      push(player, enemy);

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
            <S.Barbg />
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
            <S.Barbg />
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

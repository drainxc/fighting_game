import React, { useRef, useEffect } from "react";
import { collision } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import backgroundimg from "../../../asset/img/bg/bg1.gif";
import { keyDown, keyUp } from "../../../lib/function/key";
import * as D from "../../../lib/export/data";

import { animation } from "../../../lib/function/animation";
import { Sprite } from "../../common/sprite";
import { Fighter } from "../../common/fighter";
import { push } from "../../../lib/function/push";
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

    const player = new Fighter({
      name: "player",
      position: {
        x: 300,
        y: 100,
      },
      offset: {
        x: 0,
        y: 0,
      },
      imageSrc: D.playerImg.idle,
      idleFrame: 10,
      width: -900,
      height: 200,
      canvas: canvas,
      ctx: ctx,
    });

    const enemy = new Fighter({
      name: "enemy",
      position: {
        x: -1520,
        y: 100,
      },
      offset: {
        x: 0,
        y: 0,
      },
      imageSrc: D.enemyImg.idle,
      idleFrame: 8,
      width: -900,
      height: 200,
      canvas: canvas,
      ctx: ctx,
    });

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      player.update();
      enemy.update();

      if (!player.position.x || !enemy.position.x) return;
      push(player, enemy);

      pressSense(player, D.pkey.r, D.pkey.l);
      pressSense(enemy, D.ekey.r, D.ekey.l);

      animation(D.pkey, player, D.playerImg, D.pframe);
      animation(D.ekey, enemy, D.enemyImg, D.eframe);

      if (!enemy.position.x || !enemy.position.y) return;

      if (
        collision(player, enemy, D.pkey.attack, 7) &&
        enemyHealthRef.current !== null
      ) {
        enemyHealthRef.current.style.width = `calc(${enemyHealthRef.current.style.width} - 2%)`;
      }
      if (
        collision(enemy, player, D.ekey.attack, 7) &&
        playerHealthRef.current !== null
      ) {
        playerHealthRef.current.style.width = `calc(${playerHealthRef.current.style.width} - 1.5%)`;
      } // 히트 판정
    }

    animate();

    window.addEventListener("keydown", (e) => {
      keyDown(e.key, D.pkey, player, D.pkeycap);
      keyDown(e.key, D.ekey, enemy, D.ekeycap);
    });

    window.addEventListener("keyup", (e) => {
      keyUp(e.key, D.pkey, player, D.pkeycap);
      keyUp(e.key, D.ekey, enemy, D.ekeycap);
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

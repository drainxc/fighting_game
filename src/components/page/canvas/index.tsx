import React, { useRef, useEffect } from "react";
import { combo } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import { keyDown, keyUp } from "../../../lib/function/key";
import * as D from "../../../lib/export/data";
import { animation } from "../../../lib/function/animation";
import { Sprite } from "../../common/sprite";
import { Fighter } from "../../common/fighter";
import { push } from "../../../lib/function/push";
import HealthBar from "../../common/healthbar";
import { useParams } from "react-router-dom";
import { getRandomIntInclusive } from "../../../lib/function/random";

export default function Canvas() {
  const { id } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const enemyHealthRef = useRef<HTMLDivElement>(null);
  const playerHealthRef = useRef<HTMLDivElement>(null);
  let gamer: number[] = [];

  if (id !== undefined) {
    gamer = id.split("").map(function (item) {
      return parseInt(item, 10);
    });
  }

  if (gamer[2] === 0) {
    gamer[2] = getRandomIntInclusive(1, D.background.length);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: D.background[gamer[2] - 1],
      ctx: ctx,
    }); // 배경

    const player = new Fighter({
      position: {
        x: 300,
        y: 300,
      },
      imageSrc: D.gameData[gamer[0]][0],
      idleFrame: D.gameData[gamer[0]][12].idleFrame,
      width: D.gameData[gamer[0]][12].width,
      height: D.gameData[gamer[0]][12].height,
      canvas: canvas,
      ctx: ctx,
      img: D.gameData[gamer[0]][12].img,
    }); // 플레이어 1

    const enemy = new Fighter({
      position: {
        x: -1520,
        y: 300,
      },
      imageSrc: D.gameData[gamer[1]][0],
      idleFrame: D.gameData[gamer[1]][12].idleFrame,
      width: D.gameData[gamer[1]][12].width,
      height: D.gameData[gamer[1]][12].height,
      canvas: canvas,
      ctx: ctx,
      img: D.gameData[gamer[1]][12].img,
    }); // 플레이어 2

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      player.update();
      enemy.update();

      push(player, enemy); // 밀리기

      pressSense(player, D.pkey.r, D.pkey.l);
      pressSense(enemy, D.ekey.r, D.ekey.l); // 속도 바꾸기

      animation(D.pkey, player, D.gameData[gamer[0]], D.gameData[gamer[0]][12]);
      animation(D.ekey, enemy, D.gameData[gamer[1]], D.gameData[gamer[1]][12]); // 애니메이션

      const atk = [
        [
          D.pkey.attack1,
          D.gameData[gamer[0]][12].damaged1,
          D.gameData[gamer[0]][12].atk1hitFrame,
          D.gameData[gamer[0]][12].atk1hittime,
          D.gameData[gamer[0]][12].width1,
          D.gameData[gamer[0]][12].height1,
        ],
        [
          D.pkey.attack2,
          D.gameData[gamer[0]][12].damaged2,
          D.gameData[gamer[0]][12].atk2hitFrame,
          D.gameData[gamer[0]][12].atk2hittime,
          D.gameData[gamer[0]][12].width2,
          D.gameData[gamer[0]][12].height2,
        ],
        [
          D.pkey.attack3,
          D.gameData[gamer[0]][12].damaged3,
          D.gameData[gamer[0]][12].atk3hitFrame,
          D.gameData[gamer[0]][12].atk3hittime,
          D.gameData[gamer[0]][12].width3,
          D.gameData[gamer[0]][12].height3,
        ],
        [
          D.pkey.attack4,
          D.gameData[gamer[0]][12].damaged4,
          D.gameData[gamer[0]][12].atk4hitFrame,
          D.gameData[gamer[0]][12].atk4hittime,
          D.gameData[gamer[0]][12].width4,
          D.gameData[gamer[0]][12].height4,
        ],
        [
          D.pkey.airatk,
          D.gameData[gamer[0]][12].damaged5,
          D.gameData[gamer[0]][12].airatkhitFrame,
          D.gameData[gamer[0]][12].airatkhittime,
          D.gameData[gamer[0]][12].width5,
          D.gameData[gamer[0]][12].height5,
        ],
        [
          D.ekey.attack1,
          D.gameData[gamer[1]][12].damaged1,
          D.gameData[gamer[1]][12].atk1hitFrame,
          D.gameData[gamer[1]][12].atk1hittime,
          D.gameData[gamer[1]][12].width1,
          D.gameData[gamer[1]][12].height1,
        ],
        [
          D.ekey.attack2,
          D.gameData[gamer[1]][12].damaged2,
          D.gameData[gamer[1]][12].atk2hitFrame,
          D.gameData[gamer[1]][12].atk2hittime,
          D.gameData[gamer[1]][12].width2,
          D.gameData[gamer[1]][12].height2,
        ],
        [
          D.ekey.attack3,
          D.gameData[gamer[1]][12].damaged3,
          D.gameData[gamer[1]][12].atk3hitFrame,
          D.gameData[gamer[1]][12].atk3hittime,
          D.gameData[gamer[1]][12].width3,
          D.gameData[gamer[1]][12].height3,
        ],
        [
          D.ekey.attack4,
          D.gameData[gamer[1]][12].damaged4,
          D.gameData[gamer[1]][12].atk4hitFrame,
          D.gameData[gamer[1]][12].atk4hittime,
          D.gameData[gamer[1]][12].width4,
          D.gameData[gamer[1]][12].height4,
        ],
        [
          D.ekey.airatk,
          D.gameData[gamer[1]][12].damaged5,
          D.gameData[gamer[1]][12].airatkhitFrame,
          D.gameData[gamer[1]][12].airatkhittime,
          D.gameData[gamer[1]][12].width5,
          D.gameData[gamer[1]][12].height5,
        ],
      ];

      for (let i = 0; i < atk.length / 2; i++) {
        combo(atk[i], D.ekey, player, enemy, enemyHealthRef);
        combo(atk[i + atk.length / 2], D.pkey, enemy, player, playerHealthRef); // 히트 판정
      }
    }

    animate();

    window.addEventListener("keydown", (e) => {
      keyDown(e.key, D.pkey, player, D.pkeycap, D.gameData[gamer[0]][12]);
      keyDown(e.key, D.ekey, enemy, D.ekeycap, D.gameData[gamer[1]][12]);
    }); // 키 눌렀을 때

    window.addEventListener("keyup", (e) => {
      keyUp(e.key, D.pkey, player, D.pkeycap);
      keyUp(e.key, D.ekey, enemy, D.ekeycap);
    }); // 키 땠을 때
  }, []);

  return (
    <>
      <S.MainDiv>
        <HealthBar pref={playerHealthRef} eref={enemyHealthRef} />
        <canvas ref={canvasRef}></canvas>
      </S.MainDiv>
    </>
  );
}

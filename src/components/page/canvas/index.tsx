import React, { useRef, useEffect } from "react";
import { attack } from "../../../lib/function/collision";
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
  const enemyHealthRef = useRef<HTMLSpanElement>(null);
  const playerHealthRef = useRef<HTMLSpanElement>(null);
  const enemyEnergeRef = useRef<HTMLSpanElement>(null);
  const playerEnergeRef = useRef<HTMLSpanElement>(null);

  const pkey = JSON.parse(localStorage.getItem("pkey")!) || D.pkeycap;
  const ekey = JSON.parse(localStorage.getItem("ekey")!) || D.ekeycap;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let gamer: number[] = [];

  if (id !== undefined) {
    gamer = id.split("").map(function (item) {
      return parseInt(item, 10);
    });
  }
  if (gamer[2] === 0) {
    gamer[2] = getRandomIntInclusive(1, D.background.length - 1);
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
      imageSrc: D.background[gamer[2]],
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

      push(player, 1);
      push(enemy, -1); // 맵 이탈 방지

      pressSense(player, D.pkey.r, D.pkey.l);
      pressSense(enemy, D.ekey.r, D.ekey.l); // 속도 바꾸기

      animation(D.pkey, player, D.gameData[gamer[0]], D.gameData[gamer[0]][12]);
      animation(D.ekey, enemy, D.gameData[gamer[1]], D.gameData[gamer[1]][12]); // 애니메이션

      let atk = D.atk(gamer[0], gamer[1]);

      for (let i = 0; i < atk.length / 2; i++) {
        attack(
          atk[i],
          D.ekey,
          player,
          enemy,
          enemyHealthRef,
          D.pkey,
          playerEnergeRef
        );
        attack(
          atk[i + atk.length / 2],
          D.pkey,
          enemy,
          player,
          playerHealthRef,
          D.ekey,
          enemyEnergeRef
        ); // 히트 판정
      }
    }

    animate();

    window.addEventListener("keydown", (e) => {
      keyDown(
        e.key,
        D.pkey,
        player,
        pkey,
        D.gameData[gamer[0]][12],
        playerEnergeRef
      );
      keyDown(
        e.key,
        D.ekey,
        enemy,
        ekey,
        D.gameData[gamer[1]][12],
        enemyEnergeRef
      );
    }); // 키 눌렀을 때

    window.addEventListener("keyup", (e) => {
      keyUp(e.key, D.pkey, player, D.pkeycap, D.gameData[gamer[0]][12]);
      keyUp(e.key, D.ekey, enemy, D.ekeycap, D.gameData[gamer[1]][12]);
    }); // 키 땠을 때
  }, [ekey, gamer, pkey]);

  return (
    <>
      <S.MainDiv>
        <HealthBar
          pHealthRef={playerHealthRef}
          eHealthRef={enemyHealthRef}
          pEnergeRef={playerEnergeRef}
          eEnergeRef={enemyEnergeRef}
        />
        <canvas ref={canvasRef}></canvas>
      </S.MainDiv>
    </>
  );
}

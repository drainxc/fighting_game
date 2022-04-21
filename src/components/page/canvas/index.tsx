import React, { useRef, useEffect } from "react";
import { combo } from "../../../lib/function/collision";
import { pressSense } from "../../../lib/function/pressSense";
import * as S from "./styles";
import backgroundimg from "../../../asset/img/bg/bg1.gif";
import { keyDown, keyUp } from "../../../lib/function/key";
import * as D from "../../../lib/export/data";
import { animation } from "../../../lib/function/animation";
import { Sprite } from "../../common/sprite";
import { Fighter } from "../../common/fighter";
import { push } from "../../../lib/function/push";
import HealthBar from "../../common/healthbar";
import { useParams } from "react-router-dom";

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

  console.log(gamer);

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
      imageSrc: backgroundimg,
      ctx: ctx,
    }); // 배경

    const player = new Fighter({
      position: {
        x: 300,
        y: 300,
      },
      imageSrc: D.gameData[gamer[0]][1],
      idleFrame: D.gameData[gamer[0]][5].idleFrame,
      width: D.gameData[gamer[0]][5].width,
      height: D.gameData[gamer[0]][5].height,
      canvas: canvas,
      ctx: ctx,
    }); // 플레이어 1

    const enemy = new Fighter({
      position: {
        x: -1520,
        y: 300,
      },
      imageSrc: D.gameData[gamer[1]][1],
      idleFrame: D.gameData[gamer[1]][5].idleFrame,
      width: D.gameData[gamer[1]][5].width,
      height: D.gameData[gamer[1]][5].height,
      canvas: canvas,
      ctx: ctx,
    }); // 플레이어 2

    function animate() {
      window.requestAnimationFrame(animate);

      background.update();
      player.update();
      enemy.update();

      push(player, enemy); // 밀리기

      pressSense(player, D.pkey.r, D.pkey.l);
      pressSense(enemy, D.ekey.r, D.ekey.l); // 속도 바꾸기

      animation(D.pkey, player, D.gameData[gamer[0]], D.gameData[gamer[0]][5]);
      animation(D.ekey, enemy, D.gameData[gamer[1]], D.gameData[gamer[1]][5]); // 애니메이션

      combo(
        D.gameData[gamer[0]][5],
        D.pkey,
        D.ekey,
        player,
        enemy,
        enemyHealthRef,
        D.gameData[gamer[1]][5]
      );
      combo(
        D.gameData[gamer[1]][5],
        D.ekey,
        D.pkey,
        enemy,
        player,
        playerHealthRef,
        D.gameData[gamer[0]][5]
      ); // 히트 판정
    }

    animate();

    window.addEventListener("keydown", (e) => {
      keyDown(e.key, D.pkey, player, D.pkeycap, D.gameData[gamer[0]][5]);
      keyDown(e.key, D.ekey, enemy, D.ekeycap, D.gameData[gamer[1]][5]);
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

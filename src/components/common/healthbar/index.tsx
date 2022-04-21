import * as S from "./styles";
import React, { useRef } from "react";
import Timer from "../timer/index";

export default function HealthBar({ pref, eref }: any) {
  return (
    <>
      <S.HealthBar>
        <S.PlayerBar>
          <S.Barbg />
          <span
            ref={pref}
            style={{
              position: "absolute",
              background: "red",
              width: "100%",
              top: 0,
              bottom: 0,
              right: 0,
            }}
          />
        </S.PlayerBar>
        <Timer />
        <S.EnemyBar>
          <S.Barbg />
          <span
            ref={eref}
            style={{
              position: "absolute",
              background: "red",
              width: "100%",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </S.EnemyBar>
      </S.HealthBar>
    </>
  );
}

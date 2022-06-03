import * as S from "./styles";
import React, { useEffect, useState } from "react";
import { pkey, ekey } from "../../../lib/export/data";

export default function Timer() {
  const [timer, setTimer] = useState(90);
  const regex = /[^0-9^.]/g;

  useEffect(() => {
    let stopWatch = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else if (timer === 0) {
        if (
          parseFloat(pkey.health.replace(regex, "")) >
          parseFloat(ekey.health.replace(regex, ""))
        ) {
          alert("Player1 Win!");
        } else if (
          parseFloat(pkey.health.replace(regex, "")) <
          parseFloat(ekey.health.replace(regex, ""))
        ) {
          alert("Player2 Win!");
        } else {
          alert("Draw!");
        }
        window.location.href = `/select`;
      }
    }, 1000); // 1초씩 감소
    return () => clearInterval(stopWatch);
  }, [timer]); // 타이머
  return (
    <>
      <S.Time>{timer}</S.Time>
    </>
  );
}

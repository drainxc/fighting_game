import * as S from "./styles";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(90);
  useEffect(() => {
    let stopWatch = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
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

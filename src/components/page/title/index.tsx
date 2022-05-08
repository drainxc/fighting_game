import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Title() {
  const word = ["start", "help", "setting", "github"];
  const link = ["/select", "", "", ""];

  return (
    <>
      <S.Menu />
      <S.MainDiv>
        {word.map((item, i) => (
          <Link to={link[i]}>
            <S.Word position={i * 55}>{item}</S.Word>
          </Link>
        ))}
      </S.MainDiv>
      <S.BgColor />
      <S.BgImage />
    </>
  );
}

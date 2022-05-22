/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import ui1 from "../../../asset/img/ui/ui1.png";
import ui2 from "../../../asset/img/ui/ui2.png";

export default function Title() {
  const word = ["start", "help", "setting", "github"];
  const link = ["/select", "/help", "/setting", ""];

  const width = window.innerWidth;
  const height = window.innerHeight; // 브라우저 창 크기 구하기

  return (
    <S.MainDiv width={width} height={height}>
      <S.MainTitle>
        <img src={ui1} alt="" style={{ width: "750px" }} />
        <div>Fighting Game</div>
        <img src={ui2} alt="" style={{ width: "450px" }} />
      </S.MainTitle>
      <S.Menu>
        {word.map((item, i) => (
          <S.Word>
            {item !== "github" ? (
              <Link to={link[i]}>
                <a>{item}</a>
              </Link>
            ) : (
              <a
                href="https://github.com/eastcopper/fighting_game"
                target="_blank"
              >
                {item}
              </a>
            )}
          </S.Word>
        ))}
      </S.Menu>
    </S.MainDiv>
  );
}

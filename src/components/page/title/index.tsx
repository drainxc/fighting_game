import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import ui1 from "../../../asset/img/ui/ui1.png";
import ui2 from "../../../asset/img/ui/ui2.png";

export default function Title() {
  const word = ["start", "help", "setting", "github"];
  const link = ["/select", "", "", ""];

  const width = window.innerWidth;
  const height = window.innerHeight;

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
            <Link to={link[i]}>
              <a>{item}</a>
            </Link>
          </S.Word>
        ))}
      </S.Menu>
      <S.BgColor />
    </S.MainDiv>
  );
}

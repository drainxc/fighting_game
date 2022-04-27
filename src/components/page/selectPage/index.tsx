import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomIntInclusive } from "../../../lib/function/random";
import * as S from "./styles";
import bg1 from "../../../asset/img/bg/bg1.gif";
import bg2 from "../../../asset/img/bg/bg10.png";
import bg3 from "../../../asset/img/bg/bg3.gif";
import bg4 from "../../../asset/img/bg/bg4.png";
import bg5 from "../../../asset/img/bg/bg5.png";
import bg6 from "../../../asset/img/bg/bg6.png";
import bg7 from "../../../asset/img/bg/bg7.png";
import bg8 from "../../../asset/img/bg/bg8.png";
import bg9 from "../../../asset/img/bg/bg9.png";
import randomBg from "../../../asset/img/bg/randomMap.jpg";
import { background } from "../../../lib/export/data";

export default function Select() {
  const character = [
    "fire_knight",
    "water_priestess",
    "?",
    "metal_bladekeeper",
  ];

  const profile: string[] = [];

  const images = [randomBg, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

  const [player, setPlayer] = useState<number[]>([]);
  function selectCharacter(e: any, n: number) {
    if (e.target.alt === "?") {
      n = getRandomIntInclusive(0, character.length - 1);
    }
    if (n >= 7) {
      n -= 1;
    }
    setPlayer((play) => [...play, n]);
    if (player.length >= 3) {
      player.shift();
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide >= images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const pre = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <S.BgColor />
      <S.Background image={background[currentSlide]} />
      <S.MainDiv>
        <S.Top>
          <S.Map>
            <S.Slide onClick={() => pre()}>‹</S.Slide>
            {images.map((img: string, i: number) => (
              <>{currentSlide === i ? <S.BgImg src={img} alt="" /> : <></>}</>
            ))}
            <S.Slide onClick={() => next()}>›</S.Slide>
          </S.Map>
        </S.Top>
        <S.Bottom>
          <S.Page>
            <div>back</div>
          </S.Page>
          <S.BtnDiv>
            {character.map((name: string, i: number) => (
              <>
                <button onClick={(e) => selectCharacter(e, i)}>
                  <img src={profile[i]} alt={name} />
                </button>
              </>
            ))}
          </S.BtnDiv>
          <S.Page>
            {player.length === 2 ? (
              <Link to={"/game" + player[0] + player[1] + currentSlide}>
                <div>start</div>
              </Link>
            ) : (
              <div>start</div>
            )}
          </S.Page>
        </S.Bottom>
      </S.MainDiv>
    </>
  );
}

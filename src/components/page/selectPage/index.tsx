import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomIntInclusive } from "../../../lib/function/random";
import * as S from "./styles";
import { background } from "../../../lib/export/data";
import profile1 from "../../../asset/img/fire_knight/fire_knight.png";
import profile2 from "../../../asset/img/water_priestess/water_priestess.png";
import profile3 from "../../../asset/img/metal_bladekeeper/metal_bladekeeper.png";

export default function Select() {
  const character = [
    "fire_knight",
    "water_priestess",
    "metal_bladekeeper",
    "?",
  ];
  const profile: string[] = [profile1, profile2, profile3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [player, setPlayer] = useState<number[]>([0]);

  const selectCharacter = (e: any, n: number) => {
    if (e.target.alt === "?") {
      n = getRandomIntInclusive(0, character.length - 1);
    }
    if (n >= 3) {
      n -= 1;
    }
    setPlayer((play) => [...play, n]);
    if (player.length >= 3) {
      player.shift();
    }
  };

  const next = () => {
    if (currentSlide >= background.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const pre = () => {
    if (currentSlide === 0) {
      setCurrentSlide(background.length - 1);
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
            {background.map((img: string, i: number) => (
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
            {player.length === 3 ? (
              <Link to={"/game" + player[1] + player[2] + currentSlide}>
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

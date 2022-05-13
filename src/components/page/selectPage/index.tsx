import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import * as D from "../../../lib/export/data";
export default function Select() {
  const character = [
    "fire_knight",
    "water_priestess",
    "metal_bladekeeper",
    "ground_monk",
    "wind_hashshin",
  ]; // 캐릭터
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [player, setPlayer] = useState<number[]>([0]);

  const selectCharacter = (e: any, n: number) => {
    // if (e.target.alt === "?") {
    //   n = getRandomIntInclusive(0, character.length - 1);
    // }
    // if (n >= 3) {
    //   n -= 1;
    // }
    setPlayer((play) => [...play, n]);
    if (player.length >= 3) {
      player.shift();
    } // 캐릭터 선택
  };

  const next = () => {
    if (currentSlide >= D.background.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const pre = () => {
    if (currentSlide === 0) {
      setCurrentSlide(D.background.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  // 맵 선택

  return (
    <>
      <S.BgColor />
      <S.Background image={D.background[currentSlide]} />
      <S.MainDiv>
        <S.Map>
          <S.Slide onClick={() => pre()}>‹</S.Slide>
          {D.background.map((img: string, i: number) => (
            <>{currentSlide === i ? <S.BgImg src={img} alt="" /> : <></>}</>
          ))}
          <S.Slide onClick={() => next()}>›</S.Slide>
        </S.Map>
        <S.Bottom>
          <div>
            <div>back</div>
          </div>

          <S.BtnDiv>
            {character.map((name: string, i: number) => (
              <>
                {i === 0 || i === 4 ? (
                  <button
                    onClick={(e) => selectCharacter(e, i)}
                    style={{ marginBottom: "150px" }}
                  >
                    <img src={D.profile[i]} alt={name} />
                  </button>
                ) : (
                  <button onClick={(e) => selectCharacter(e, i)}>
                    <img src={D.profile[i]} alt={name} />
                  </button>
                )}
              </>
            ))}
          </S.BtnDiv>
          <div>
            {player.length === 3 ? (
              <Link to={"/game" + player[1] + player[2] + currentSlide}>
                <div>start</div>
              </Link>
            ) : (
              <div>start</div>
            )}
          </div>
        </S.Bottom>
      </S.MainDiv>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import * as D from "../../../lib/export/data";
import oneP from "../../../asset/img/ui/1player.png";
import twoP from "../../../asset/img/ui/2player.png";
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
    console.log(player);
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

  const Profile = (name: string, i: number) => {
    return (
      <>
        <S.Profile>
          <img src={D.profile[i]} alt={name} />
        </S.Profile>
        <S.Player>
          {i === player[1] && player[1] === player[2] ? (
            <>
              <img src={oneP} alt="" />
              <img src={twoP} alt="" />
            </>
          ) : (
            <>
              {i === player[1] ? (
                <img src={oneP} alt="" />
              ) : (
                <>{i === player[2] ? <img src={twoP} alt="" /> : <></>}</>
              )}
            </>
          )}
        </S.Player>
      </>
    );
  };

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
          <Link to={"/"}>
            <div>back</div>
          </Link>

          <S.BtnDiv>
            {character.map((name: string, i: number) => (
              <>
                {i === 0 || i === 4 ? (
                  <button
                    onClick={(e) => selectCharacter(e, i)}
                    style={{ marginBottom: "150px" }}
                  >
                    {Profile(name, i)}
                  </button>
                ) : (
                  <button onClick={(e) => selectCharacter(e, i)}>
                    {Profile(name, i)}
                  </button>
                )}
              </>
            ))}
          </S.BtnDiv>
          <div>
            {player.length >= 3 ? (
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

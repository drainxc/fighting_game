/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { ekeycap, pkeycap } from "../../../lib/export/data";
import * as S from "./style";

export default function Setting() {
  let pkey = JSON.parse(localStorage.getItem("pkey")!) || pkeycap;
  let ekey = JSON.parse(localStorage.getItem("ekey")!) || ekeycap;

  const keycap = [
    ["w", "p", pkey.w, "점프"],
    ["w", "e", ekey.w, "점프"],
    ["a", "p", pkey.a, "왼쪽"],
    ["a", "e", ekey.a, "왼쪽"],
    ["s", "p", pkey.s, "가드"],
    ["s", "e", ekey.s, "가드"],
    ["d", "p", pkey.d, "오른쪽"],
    ["d", "e", ekey.d, "오른쪽"],

    ["attack1", "p", pkey.attack1, "공격1"],
    ["attack1", "e", ekey.attack1, "공격1"],
    ["attack2", "p", pkey.attack2, "공격2"],
    ["attack2", "e", ekey.attack2, "공격2"],
    ["attack3", "p", pkey.attack3, "스킬1"],
    ["attack3", "e", ekey.attack3, "스킬1"],
    ["attack4", "p", pkey.attack4, "스킬2"],
    ["attack4", "e", ekey.attack4, "스킬2"],
  ];

  const handleInputChange = (key: string, p: string) => (e: any) => {
    // if (e.target.value.length > 1) e.target.value = e.target.value[1];
    console.log(e.key);
    e.target.value = e.key;

    if (p === "p") pkey = { ...pkey, [key]: e.target.value };
    else if (p === "e") ekey = { ...ekey, [key]: e.target.value };
  };

  const save = () => {
    window.localStorage.setItem("pkey", JSON.stringify(pkey));
    window.localStorage.setItem("ekey", JSON.stringify(ekey));
  };

  const defaultValue = () => {
    window.localStorage.setItem("pkey", JSON.stringify(pkeycap));
    window.localStorage.setItem("ekey", JSON.stringify(ekeycap));
  };

  document.onkeydown = function (event) {
    if (event.code === "Backspace" || event.code === "Delete") return false;
  };

  return (
    <>
      <S.MainDiv>
        <S.InputGrid>
          <S.Player>1p</S.Player>
          <S.Player>2p</S.Player>
          {keycap.map((item) => (
            <div>
              <span>{item[3]} ›</span>
              <input
                value={item[2]}
                maxLength={1}
                onKeyDown={handleInputChange(item[0], item[1])}
              />
            </div>
          ))}
        </S.InputGrid>
        <S.Btn style={{ right: "370px" }} onClick={() => defaultValue()}>
          <Link to={"/"}>
            <a>초기값</a>
          </Link>
        </S.Btn>
        <S.Btn style={{ right: "210px" }}>
          <Link to={"/"}>
            <a>취소</a>
          </Link>
        </S.Btn>
        <S.Btn style={{ right: "50px" }} onClick={() => save()}>
          <Link to={"/"}>
            <a>적용</a>
          </Link>
        </S.Btn>
      </S.MainDiv>
    </>
  );
}
